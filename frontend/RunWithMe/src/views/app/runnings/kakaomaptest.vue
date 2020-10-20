<template>
  <div class="main-content">
    <section class="top-bar">
      <breadcumb :page="'Record Running'" :folder="'Runnings'" />
      <h4>dy_test?</h4>
    </section>

    <section ref="map" class="map"></section>

    <div class="btn_container">
      <div v-if="!running">
        <section class="bottom-bar">
          <div class="latLngLabel">{{ lat }}, {{ lng }}</div>
          <button class="running button green" @click="startLocationUpdates">
            <i class="i-Start-2"></i>
            Start
          </button>
        </section>
      </div>
      <div v-if="running">
        <section class="bottom-bar">
          <button class="running button red" @click="stopLocationUpdates">
            <i class="i-Stop-2"></i>
            Stop
          </button>
          <button class="running button yellow" @click="startLocationUpdates">
            <i class="i-Start-2"></i>
            Resume
          </button>
          <button class="running button blue" @click="endLocationUpdates">
            <i class="i-Start-2"></i>
            End Running
          </button>
        </section>
      </div>
    </div>
    <div id="clock">
      <span id="time">{{ clock }}</span>
    </div>
  </div>
</template>
<script>
import SERVER from "@/api/api";
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running",
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      timestamp: 0,
      watchPositionId: null,
      map: null,
      previous: [],
      runningPathCoordinates: [],
      gpsIdCnts: 0,

      //스톱워치 변수
      clock: "00:00:00.000",
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false,
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
  methods: {
    initMap() {
      var map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(37.331777, 127.129347),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      this.map = map;
    },
    startLocationUpdates() {
      //스톱워치 부분
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

      //맵에 기록
      var map = this.map;
      var marker = new google.maps.Marker({
        map: map,
      });

      this.watchPositionId = navigator.geolocation.watchPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log("watchpositionID");
          console.log(position);
          map.setCenter(new google.maps.LatLng(this.lat, this.lng));
          marker.setPosition(new google.maps.LatLng(this.lat, this.lng));

          this.runningPathCoordinates.push(
            new google.maps.LatLng(this.lat, this.lng)
          );
          this.savePosition(position);
        },
        (error) => {
          console.log(error.message);
        },
        {
          timeout: 5000,
          maximumAge: 0,
          distanceFilter: 1,
        }
      );
      this.map = map
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
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);

      navigator.geolocation.clearWatch(this.watchPositionId);
      var paths = [
        {
          gpsId: 5,
          userId: 1,
          lat: 37.323855,
          lng: 127.13657,
          timestamp: 1603106842854,
        },
        {
          gpsId: 6,
          userId: 1,
          lat: 37.323855,
          lng: 127.13657,
          timestamp: 1603107211013,
        },
      ];
      for (var i = 0; i < paths.length; i++) {
        this.runningPathCoordinates.push(
          new google.maps.LatLng(paths[i].lat, paths[i].lng)
        );
      }
      this.drawLines();
      axios
        .get(SERVER.URL + "gps/" + 1)
        .then((res) => {
          // console.log(res.data);
          // this.paths = res.data.data
          // this.drawLines(res.data.data);
        })
        .catch((err) => console.log(err.response));
    },
    savePosition(position) {
      let data = {
        userId: 1,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        timestamp: position.timestamp,
      };
      axios
        .post(SERVER.URL + "gps", data, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          console.log("response");
          console.log(res.data);
        })
        .catch((err) => console.log(err.response));
    },
    drawLines() {
      for (var i = 0; i < this.runningPathCoordinates.length; i++) {
        console.log("drawLines = " + i + this.runningPathCoordinates[i]);
      }

      const runningPath = new google.maps.Polyline({
        path: this.runningPathCoordinates,
        geodesic: true,
        strokeColor: "#ff0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      runningPath.setMap(this.map);
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
  border: 1px solid red;
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
