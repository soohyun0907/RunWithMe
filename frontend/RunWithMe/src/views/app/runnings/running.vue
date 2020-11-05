<template>
  <div class="main-content">
    <section class="top-bar">
      <breadcumb :page="'Record Running'" :folder="'Runnings'" />
      <h4>Run With Me?</h4>
    </section>

<div >
    <span id="acc_dis" > {{ show_distance }}</span>
    <div id="run_desc distance">누적 거리</div>
</div>
<div>
    <span id="acc_time">{{ speed }}</span>
    <div id="run_desc speed">현재 속도</div>
</div>
<div>
      <span id="time">{{ clock }}</span>
      <div id="run_desc time">누적 시간</div>
</div>
    <section ref="map" class="map"></section>

    <div class="btn_container">
      <div v-if="!running">
        <section class="bottom-bar">
          <div v-if="!isPause">
            <button type="button" @click="startLocationUpdates" class="btn round btn btn-success btn-icon rounded-circle m-1">
             <span class="ul-btn__icon"> <i style="font-size:3em; margin-left: 10px;" class="i-Start-2"></i></span>
            </button>
          </div>
          <div v-if="isPause">
             <button type="button" @click="watchLocationUpdates" class="btn round btn btn-warning btn-icon rounded-circle m-1">
             <span class="ul-btn__icon"> <i style="font-size:3em; margin-left: 10px;" class="i-Start-2"></i></span>
            </button>

          </div>
        </section>
      </div>
      <div v-if="running">
        <section class="bottom-bar">

          <button type="button" @click="stopLocationUpdates" class="btn round btn btn-danger btn-icon rounded-circle m-1">
             <span class="ul-btn__icon"> <i style="font-size:3em;" class="i-Pause"></i></span>
          </button>

          <button type="button" @click="endLocationUpdates" class="btn round btn btn-dark btn-icon rounded-circle m-1">
             <span class="ul-btn__icon"> <i style="font-size:3em;" class="i-Stop-2"></i></span>
          </button>

        </section>
      </div>
    </div>
    
    <textarea id="encoded-polyline"></textarea>
  </div>
</template>
<script>
import http from "@/utils/http-common";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running",
  },
  data() {
    return {
      current: { lat: 0, lng: 0 },
      previous: { lat: 0, lng: 0 },
      watchPositionId: null,
      map: null,
      accumulated_distance: 0.949595,
      accumulated_time: 0,
      show_distance:0,
      show_speed:0,
      checkOneKm: 0,
      checkSecond: 0,
      linePath: [],
      poly: null,
      encoded_polyline: "",
      cur_marker: null,
      startTime: "",
      endTime: "",
      speed: 0,
      avgSpeed:0,
      gugun: ["광명시"],
      currentCity: "",

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
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => google.maps.load(this.initMap);
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    initMap() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.current.lat = position.coords.latitude;
        this.current.lng = position.coords.longitude;
        this.show_distance = Math.round(this.accumulated_distance * 100) /100

        var startLoc = new google.maps.LatLng(
          this.current.lat,
          this.current.lng
        );

        var map = new google.maps.Map(this.$refs["map"], {
          zoom: 16,
          center: startLoc,
        });

        //Map 현재위치 마커
        var runningMarkerSrc = require("../../../assets/images/running_marker.png");
        var runningMarkerSize = new google.maps.Size(35, 50);
        var runningMarker = new google.maps.MarkerImage(
          runningMarkerSrc,
          null,
          null,
          null,
          runningMarkerSize
        );
        var runningMarkerPosition =
          this.current.lat != 0
            ? new google.maps.LatLng(this.current.lat, this.current.lng)
            : startLoc;

        var marker = new google.maps.Marker({
          map: map,
          title: "현재위치",
          position: runningMarkerPosition,
          icon: runningMarker,
        });

        this.linePath.push(new google.maps.LatLng(37.331777, 127.129347));
        this.map = map;
        this.marker = marker;
      });
    },
    startLocationUpdates() {
      this.startTime = new Date();
      this.startTime = this.$moment(this.startTime).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      this.watchLocationUpdates();
    },

    resetLocations() {
      this.startTime = "";
      this.endTime = "";
      this.clock = "00:00:00";
      this.timeBegan = null;
      this.timeStopped = null;
      this.stoppedDuration = 0;
      this.started = null;
      this.checkSecond = 0;
      this.checkOneKm = 0;
      this.speed = 0;
      this.current.lat = 0;
      this.current.lng = 0;
      this.previous.lat = 0;
      this.previous.lng = 0;
    },
    watchLocationUpdates() {
      // stopwatch
      if (this.running) return;

      if (this.timeBegan === null) {
        this.resetLocations();
        this.timeBegan = new Date();
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
      }

      this.started = setInterval(this.clockRunning, 1000);
      this.running = true;
      this.isPause = false;

      //Map 시작
      var map = this.map;
      var marker = this.marker;

      var geocoder = new google.maps.Geocoder();

      this.watchPositionId = navigator.geolocation.watchPosition(
        (position) => {
          this.current.lat = position.coords.latitude;
          this.current.lng = position.coords.longitude;
          var now = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          var gugun = this.gugun
          var currentCity = this.currentCity

          //현재 위도 경도를 주소로 변환
          geocoder.geocode(
            {
              latLng: now,
            },
            function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var split_address = results[0].formatted_address.split(" ");
                currentCity = split_address[2].trim();
                var cityDuplicate = false
                for (var i = 0; i < gugun.length; i++) {
                  if (gugun[i] == currentCity) {
                    console.log("이미 존재해요");
                    cityDuplicate = true
                  }
                }
                if (currentCity != "" && !cityDuplicate) {
                  gugun.push(currentCity);
                }
              } else {
                console.log(status);
              }
            }
          );
          this.gugun = gugun

          map.setCenter(now);
          marker.setPosition(now);

          
          if (this.previous.lat == 0) {
            //이제 런닝 시작이면
            this.previous.lat = this.current.lat;
            this.previous.lng = this.current.lng;
            this.savePosition(position);

            this.poly = new google.maps.Polyline({
              strokeColor: "#000000",
              strokeOpacity: 1,
              strokeWeight: 3,
              map: this.map,
            });

            var currentLatLng = new google.maps.LatLng(
              this.current.lat,
              this.current.lng
            );
            this.linePath.push(currentLatLng);
            
            this.encode_polyline(currentLatLng, this.poly);
          } else {
            var distance = this.computeDistance(this.previous, this.current);
            console.log("watchposition 이동거리" + distance);
            console.log("watchposition 걸린시간" + this.accumulated_time);
            var threshold = 0.01;
            if (distance > threshold) {
              // 일정속도 이상으로 뛸때만 기록.
              this.previous.lat = this.current.lat;
              this.previous.lng = this.current.lng;
              this.accumulated_distance += distance;
              this.show_distance = Math.round(this.accumulated_distance * 100) /100
              this.checkOneKm = this.accumulated_distance;
              this.checkSecond = this.accumulated_time;


              var currentLatLng = new google.maps.LatLng(
                this.current.lat,
                this.current.lng
              );
              this.linePath.push(currentLatLng);
              this.encode_polyline(currentLatLng, this.poly);
            }
            if (this.checkOneKm >= 1) {
              //1km 도달시 마다
              this.speed = (this.checkOneKm * 1000) / this.checkSecond;
              this.show_speed = this.speed
              this.checkSecond = 0;
              this.checkOneKm -= 1;

              this.savePosition();
              console.log("최근 1km당 스피드 = " + this.speed);
            }
          }
        },
        (error) => {
          console.log(error.message);
        },
        {
          timeout: 5000,
          maximumAge: 0,
          // enableHighAccuracy:true,
          // distanceFilter:40,          
        }
      );
      this.map = map;
      this.cur_marker = marker;
    },
    getScreenShot() {
      console.log(this.linePath)

      //google static map url
      var staticM_URL = "https://maps.googleapis.com/maps/api/staticmap?";
      staticM_URL += "&size=520x650"; //Set the Google Map Size.
      staticM_URL += "&zoom=11"; //Set the Google Map Zoom.
      staticM_URL +=
        "&maptype=roadmap&key=AIzaSyAUd76NMwTSUKUHpuocMhah5P8cocpFgKI&format=png&"; //Set the Google Map Type.
      staticM_URL +="path=color:0xff0000ff|weight:3"
      
      for(var i=0; i<this.linePath.length; i++){
        staticM_URL +="|"+this.linePath[i].lat()+","+this.linePath[i].lng()
      }


      window.open(staticM_URL);
    },
    stopLocationUpdates() {
      this.isPause = true;
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);

      navigator.geolocation.clearWatch(this.watchPositionId);
      this.drawLines();

    },
    savePosition(position) {
      let data = {
        userId: this.userInfo.userId,
        accDistance: this.accumulated_distance,
        accTime: this.accumulated_time,
        speed: this.speed,
      };
      http
        .post(`runnings/temp`, JSON.stringify(data), {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(
            "1키로당 기록 전송" + data.accDistance + " " + data.accTime
          );
        })
        .catch((err) => {
          console.log("savePosition Error")
          console.log(err);
        });
    },

    endLocationUpdates() {
     this.stopLocationUpdates();
      this.getScreenShot();
      this.isPause=false;
      this.running = false;
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.clock = "00:00:00";
      this.checkSecond = 0;
      this.checkOneKm = 0;
      this.endTime = new Date();
      this.endTime = this.$moment(this.endTime).format("YYYY-MM-DDTHH:mm:ss");

      console.log(this.endTime);
      let runningData = {
        userId: this.userInfo.userId,
        polyline: this.encode_polyline,
        startTime: this.startTime,
        endTime: this.endTime,
        accDistance: this.accumulated_distance,
        accTime: this.accumulated_time,
        gugun:this.gugun,
      };
      http.post(`runnings/`, runningData);
    },
    clockRunning() {
      var currentTime = new Date();
      var timeElapsed = new Date(
        currentTime - this.timeBegan - this.stoppedDuration
      );
      var hour = timeElapsed.getUTCHours();
      var min = timeElapsed.getUTCMinutes();
      var sec = timeElapsed.getUTCSeconds();
      this.accumulated_time += 1;

      this.clock =
        this.zeroPrefix(hour, 2) +
        ":" +
        this.zeroPrefix(min, 2) +
        ":" +
        this.zeroPrefix(sec, 2);
    },
    zeroPrefix(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    drawLines() {
      var runningPathCoordinates = [];

      for (var i = 0; i < this.linePath.length; i++) {
        runningPathCoordinates.push(
          new google.maps.LatLng(this.linePath[i].lat,this.linePath[i].lng)
        );
      }
      this.poly = new google.maps.Polyline({
        // path: runningPathCoordinates,
        path: this.linePath,
        geodesic: true,
        strokeColor: "#ff0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map:this.map
      });
      console.log(this.poly)
    },
    encode_polyline(latLng, poly) {
       var path = poly.getPath();
       path.push(latLng)
      this.encode_polyline = google.maps.geometry.encoding.encodePath(path);
      console.log("here!!!")
      console.log(path)
      console.log(this.encode_polyline)
      document.getElementById("encoded-polyline").value = this.encode_polyline;
 
    },
    
    computeDistance(startCoords, destCoords) {
      var startLatRads = this.degreesToRadians(startCoords.lat);
      var startLongRads = this.degreesToRadians(startCoords.lng);
      var destLatRads = this.degreesToRadians(destCoords.lat);
      var destLongRads = this.degreesToRadians(destCoords.lng);

      var Radius = 6371; //지구의 반경(km)
      var distance =
        Math.acos(
          Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) *
              Math.cos(destLatRads) *
              Math.cos(startLongRads - destLongRads)
        ) * Radius;

      return distance;
    },
    degreesToRadians(degrees) {
      var radians = (degrees * Math.PI) / 180;
      return radians;
    },
           
  },
};
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
  width: 100%;
  height: 400px;
}
.bottom-bar {
  height: 100px;
  text-align: center;
  background: white;
}
/* 스톱워치 디자인 */
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");
#time {
  font-size: 2em;
}
#acc_time {
  font-size: 2em;
}
#acc_dis {
  font-size: 2em;
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
  /* padding: 20px 15px; */
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 2em;
  cursor: pointer;

  flex-grow: 1;

  transition: color 0.1s ease-out;
}
</style>
