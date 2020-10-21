<template>
  <div class="main-content">
    <section class="top-bar">
      <breadcumb :page="'Record Running'" :folder="'Runnings'" />
      <h4>Run With Me?</h4>
    </section>

    <section ref="map" class="map"></section>

    <div class="btn_container">
      <div align="center">
        <div class="latLngLabel">{{ lat }}, {{ lng }}</div>
        <div class="accumulatedDistanceLabel">{{ accumulated_distance }}</div>
      </div>
      <div v-if="!running">
        <section class="bottom-bar">
          <div v-if="!isPause">
            <button class="running button green" @click="startLocationUpdates">
              <i class="i-Start-2"></i>
              Start
            </button>
          </div>
          <div v-if="isPause">
            <button class="running button yellow" @click="startLocationUpdates">
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
    <div>
    <textarea id="encoded-polyline"></textarea>
    </div>
  </div>
</template>
<script>
import SERVER from "@/api/api";
import axios from "axios";

export default {

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running"
  },
  data() {
      return {
          lat: 0,
          lng: 0,
          timestamp: 0,
          watchPositionId: null,
          map: null,
          previous: {lat: 0, lng: 0},
          accumulated_distance: 0,
          linePath: [],
          poly: null,
          encoded_polyline: "",

          //스톱워치 변수
          clock: "00:00:00.000",
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
  methods: {
      initMap(){
        var map = new google.maps.Map(this.$refs["map"], {
              zoom: 18,
              center: new google.maps.LatLng(37.331777, 127.129347),
              mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        this.map = map;
      },
      startLocationUpdates() {
          // stopwatch
          if (this.running) return;

          if (this.timeBegan === null) {
            this.endLocationUpdates();
            this.timeBegan = new Date();
          }

          if (this.timeStopped !== null) {
            this.stoppedDuration += new Date() - this.timeStopped;
          }

          this.started = setInterval(this.clockRunning, 10);
          this.running = true;
          this.isPause = false;

          // map
          var map = new google.maps.Map(this.$refs["map"], {
              zoom: 18,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          });
          var marker = new google.maps.Marker({
              map: map
          });
          this.map = map;

          this.watchPositionId = navigator.geolocation.watchPosition(
              position => {
                  this.lat = position.coords.latitude;
                  this.lng = position.coords.longitude;
                  console.log(position);
                  map.setCenter(new google.maps.LatLng(this.lat, this.lng)); 
                  marker.setPosition(new google.maps.LatLng(this.lat, this.lng));

                  if(this.previous.lat==0){
                    this.previous.lat = this.lat;
                    this.previous.lng = this.lng;
                    this.savePosition(position);

                    // init linePath, poly
                    // this.linePath.push(new google.maps.LatLng(this.lat, this.lng));
                    this.poly = new google.maps.Polyline({
                      strokeColor: "#000000",
                      strokeOpacity: 1,
                      strokeWeight: 3,
                      map: this.map
                    });
                    var currentLatLng = new google.maps.LatLng(this.lat, this.lng);
                    this.linePath.push(currentLatLng);
                    this.encode_polyline(currentLatLng, this.poly);

                  }else{
                    var current = {
                      lat: this.lat,
                      lng: this.lng
                    };
                    var distance = this.computeDistance(this.previous, current);
                    console.log(distance);
                    var threshold = 0.01;
                    if(distance > threshold){
                      this.previous.lat = this.lat;
                      this.previous.lng = this.lng;
                      this.accumulated_distance += distance;
                      // this.savePosition(position);

                      var currentLatLng = new google.maps.LatLng(this.lat, this.lng);
                      this.linePath.push(currentLatLng);
                      this.encode_polyline(currentLatLng, this.poly);
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
          
      },
      endLocationUpdates() {
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.clock = "00:00:00.000";
      },
      clockRunning() {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime - this.timeBegan);
        var hour = timeElapsed.getUTCHours();
        var min = timeElapsed.getUTCMinutes();
        var sec = timeElapsed.getUTCSeconds();
        var ms = timeElapsed.getUTCMilliseconds();

        this.clock =
          this.zeroPrefix(hour, 2) +
          ":" +
          this.zeroPrefix(min, 2) +
          ":" +
          this.zeroPrefix(sec, 2) +
          "." +
          this.zeroPrefix(ms, 3);
      },
      zeroPrefix(num, digit) {
        var zero = "";
        for (var i = 0; i < digit; i++) {
          zero += "0";
        }
        return (zero + num).slice(-digit);
      },
      stopLocationUpdates() {
        this.isPause = true;
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
        
        navigator.geolocation.clearWatch(this.watchPositionId);
        this.drawLines(this.linePath);
        var userId = 1;
        axios.get(SERVER.URL+"gps/" + userId)
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
            userId: 1,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: position.timestamp
          };
          axios.post(SERVER.URL+"gps", data, {
            headers: {
              "Content-type": "application/json"
            }
          })
            .then(res => {
              console.log("response")
              console.log(res.data)
            })
            .catch(err => console.log(err.response))
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

        // console.log(runningPath);
        console.log(this.linePath);
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
      encode_polyline(latLng, poly) {
        var path = poly.getPath();
        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear
        path.push(latLng);
        // Update the text field to display the polyline encodings
        this.encode_polyline = google.maps.geometry.encoding.encodePath(path);
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
</style>
