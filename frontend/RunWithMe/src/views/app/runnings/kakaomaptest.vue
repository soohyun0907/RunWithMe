<template>
  <div class="main-content">
    <section class="top-bar">
      <breadcumb :page="'Record Running'" :folder="'Runnings'" />
      <h4>Run With Me?</h4>
    </section>

    <section ref="map" class="map"></section>

    <div class="btn_container">
      <div v-if="!running">
        <section class="bottom-bar">
          <div v-if="!isPause">
            <div class="latLngLabel">{{ this.current.lat }}, {{ this.current.lng }}</div>
            <button class="running button green" @click="startLocationUpdates">
              <i class="i-Start-2"></i>
              Start
            </button>
          </div>
          <div v-if="isPause">
            <button class="running button yellow" @click="watchLocationUpdates">
              <i class="i-Start-2"></i>
              Resume
            </button>
          </div>
        </section>
      </div>
      <div v-if="running">
        <section class="bottom-bar">
          <button class="running button red" @click="stopLocationUpdates">
            <i class="i-Stop-2"></i>
            Pause
          </button>
          <div>
            <button class="running button blue" @click="endLocationUpdates">
              <i class="i-Start-2"></i>
              End Running
            </button>
          </div>
        </section>
      </div>
    </div>
    <div id="clock">
      <span id="time">{{ clock }}</span>
    </div>
    <textarea id="encoded-polyline"></textarea>
  </div>
</template>
<script>
import SERVER from "@/api/api";
import axios from "axios";
import http from '@/utils/http-common'
import {mapGetters} from 'vuex';

export default {

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running"
  },
  data() {
      return {
          current:{lat:0, lng:0},
          previous: {lat: 0, lng: 0},
          watchPositionId: null,
          map: null,
          accumulated_distance: 0,
          accumulated_time: 0,
          checkOneKm:0,
          checkSecond:0,
          linePath: [],
          poly: null,
          encoded_polyline: "",
          cur_marker:null,
          startTime:"",
          endTime:"",
          speed:0,

          //스톱워치 변수
          clock: "00:00:00",
          timeBegan: null,
          timeStopped: null,
          stoppedDuration: 0,
          started: null,
          running: false,
          isPause: false,
      };
  },
  mounted() {
    if(window.google && window.google.maps) {
      this.initMap();
    }else {
      const script = document.createElement('script');
      script.onload = () => google.maps.load(this.initMap);
    }
  },
  computed: {
  ...mapGetters(["userInfo"])
  },
  methods: {
      initMap(){
        var map = new google.maps.Map(this.$refs["map"], {
              zoom: 16,
              center: new google.maps.LatLng(37.331777, 127.129347),
        });
        this.linePath.push(new google.maps.LatLng(37.331777, 127.129347))
        this.map = map;
      },
      startLocationUpdates() {
        this.startTime = new Date()
        this.startTime = this.$moment(this.startTime).format('YYYY-MM-DDTHH:mm:ss')
        this.watchLocationUpdates()
      },

      watchLocationUpdates() {
          // stopwatch
          if (this.running) return;

          if (this.timeBegan === null) {
            this.endLocationUpdates();
            this.timeBegan = new Date();
          }

          if (this.timeStopped !== null) {
            this.stoppedDuration += new Date() - this.timeStopped;
          }

          this.started = setInterval(this.clockRunning, 1000);
          this.running = true;
          this.isPause = false;

          //Map 시작
          //Map 현재위치 마커
          var runningMarkerSrc = require("../../../assets/images/running_marker.png")
          var runningMarkerSize = new google.maps.Size(35,50)
          var runningMarker = new google.maps.MarkerImage(runningMarkerSrc,null,null,null,runningMarkerSize)
          var runningMarkerPosition = (this.current.lat !=0)? new google.maps.LatLng(this.current.lat, this.current.lng) : new google.maps.LatLng(37.331777, 127.129347)
          var map = this.map
          var marker = new google.maps.Marker({
              map: map,
              title:"현재위치",
              position:runningMarkerPosition,
              icon:runningMarker,
          });
         
          this.watchPositionId = navigator.geolocation.watchPosition(
            position => {
                this.current.lat= position.coords.latitude;
                this.current.lng = position.coords.longitude;
                // console.log(position);
                map.setCenter(new google.maps.LatLng(this.current.lat, this.current.lng)); 
                marker.setPosition(new google.maps.LatLng(this.current.lat, this.current.lng));

                if(this.previous.lat==0){
                  this.previous.lat = this.current.lat;
                  this.previous.lng = this.current.lng;
                  this.savePosition(position);

                  this.poly = new google.maps.Polyline({
                    strokeColor: "#000000",
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    map: this.map
                  });
                  var currentLatLng = new google.maps.LatLng(this.current.lat, this.current.lng);
                  this.linePath.push(currentLatLng);
                  this.make_encode_polyline(currentLatLng, this.poly);

                }else{
                  var distance = this.computeDistance(this.previous, this.current);
                  console.log("watchposition 이동거리" + distance);
                  console.log("watchposition 걸린시간"+ this.accumulated_time)
                  var threshold = 0.01;
                  if(distance > threshold){
                    this.previous.lat = this.current.lat;
                    this.previous.lng = this.current.lng;
                    this.accumulated_distance += distance;
                    this.checkOneKm= this.accumulated_distance
                    this.checkSecond = this.accumulated_time
                    
                    var currentLatLng = new google.maps.LatLng(this.current.lat, this.current.lng);
                    this.linePath.push(currentLatLng);
                    this.make_encode_polyline(currentLatLng, this.poly);
                  }
                if(this.checkOneKm>=1){
                  this.savePosition()
                  this.speed = (this.checkOneKm*1000)/this.checkSecond
                  this.checkSecond=0
                  this.checkOneKm-=1
                  console.log("1km당 스피드 = " + this.speed)
                }
                }
              },
              error => {
                  console.log(error.message);
              },
              {
                timeout: 5000,
                maximumAge: 0
              }
          );
          this.map = map;
          this.cur_marker = marker
          
      },
      stopLocationUpdates() {
        this.isPause = true;
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
        
        navigator.geolocation.clearWatch(this.watchPositionId);
        this.drawLines(this.linePath);
        axios.get(SERVER.URL+"gps/" + this.userInfo.userId)
        .then(res => {
          console.log(res.data);
          this.drawLines(res.data.data);
          this.previous.lat=0;
          this.previous.lng=0;
        })
        .catch(err => console.log(err.response));
      },
      savePosition(position) {
          let data = {
            userId: this.userInfo.userId,
            accDistance : this.accumulated_distance,
            accTime : this.accumulated_time,
            speed: this.speed,
          };
          http.post(`runings/temp`, data, {
            headers: {
              "Content-type": "application/json"
            }
          }).then(res => {
              console.log(res.data)
              console.log("1키로당 기록 전송" + data.accDistance +" " + data.accTime)
            })
            .catch(err => console.log(err.response))
      },
      endLocationUpdates() {
        this.startTime = ""
        this.stopLocationUpdates()
        this.running = false;
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.clock = "00:00:00";
        this.checkSecond=0
        this.checkOneKm=0
        this.endTime = new Date()
        this.endTime = this.$moment(this.endTime).format('YYYY-MM-DDTHH:mm:ss')
        
        console.log(this.endTime)
        let runningData = {
            userId:this.userInfo.userId,
            polyline:this.encode_polyline,
            startTime:this.startTime,
            endTime:this.endTime,
            accDistance:this.accumulated_distance,
            accTime:this.accumulated_time
        }
        http.post(`runnings/`,runningData)
       
      },
      clockRunning() {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime - this.timeBegan-this.stoppedDuration);
        var hour = timeElapsed.getUTCHours();
        var min = timeElapsed.getUTCMinutes();
        var sec = timeElapsed.getUTCSeconds();
        this.accumulated_time+=1

        this.clock =
          this.zeroPrefix(hour, 2) +
          ":" +
          this.zeroPrefix(min, 2) +
          ":" +
          this.zeroPrefix(sec, 2)
      },
      zeroPrefix(num, digit) {
        var zero = "";
        for (var i = 0; i < digit; i++) {
          zero += "0";
        }
        return (zero + num).slice(-digit);
      },
     
      drawLines(positions) {
        var runningPathCoordinates = [];

        for(var i=0; i<positions.length; i++){
          // console.log(positions[i].lat);
          runningPathCoordinates.push(new google.maps.LatLng(positions[i].lat, positions[i].lng));
        }

        const runningPath = new google.maps.Polyline({
          // path: runningPathCoordinates,
          path: this.linePath,
          geodesic: true,
          strokeColor: "#ff0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        console.log("linepath" + this.linePath);
        runningPath.setMap(this.map);
        
      },
      computeDistance(startCoords, destCoords) {
        var startLatRads = this.degreesToRadians(startCoords.lat);
        var startLongRads = this.degreesToRadians(startCoords.lng);
        var destLatRads = this.degreesToRadians(destCoords.lat);
        var destLongRads = this.degreesToRadians(destCoords.lng);

        var Radius = 6371; //지구의 반경(km)
        var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                        Math.cos(startLatRads) * Math.cos(destLatRads) *
                        Math.cos(startLongRads - destLongRads)) * Radius;

        return distance;
      },
      degreesToRadians(degrees) {
          var radians = (degrees * Math.PI)/180;
          return radians;
      },
      make_encode_polyline(latLng, poly) {
        var path = poly.getPath();
        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear
        path.push(latLng);
        // Update the text field to display the polyline encodings
        this.encode_polyline = new google.maps.geometry.encoding.encodePath(path);
        document.getElementById("encoded-polyline").value = this.encode_polyline;
      },
  }
}
</script>

<style>
.driver-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.top-bar {
  height: 100px;
  text-align: center;
  background: white;
}
.map {
  flex-grow: 1;
  width:100%;
  height:400px;
  border:1px solid red;
}
.bottom-bar {
  height: 100px;
  text-align: center;
  background: white;
}
/* 스톱워치 디자인 */
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");
#clock {
  order: 0;
  flex: 0 1 auto;
  align-self: center;

  color: rgb(200, 200, 200);
}
#time {
  font-size: 6.5em;
}
.btn-container {
  display: flex;
  margin-top: 15px;
}
.running button {
  text-align: center;
  font-family: "Share Tech Mono", sans-serif;
  background: transparent;
  border: none;
  color: rgb(200, 200, 200);
  padding: 10px 15px;
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 2em;
  cursor: pointer;

  flex-grow: 1;

  transition: color 0.1s ease-out;
}
</style>
