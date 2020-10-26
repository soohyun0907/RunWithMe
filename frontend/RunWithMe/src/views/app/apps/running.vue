<template>
  <div class="main-content">
    <section class="top-bar">
    <breadcumb :page="'Record Running'" :folder="'Runnings'" />
    <h4>Run With Me?</h4>
     </section>

    <section ref="map" class="map"></section>

    <section class="bottom-bar">
        <div class="latLngLabel">{{lat}}, {{lng}}</div>
        <button class="ui button green" @click="startLocationUpdates">
            <i class="i-Start-2"></i>
            Start
        </button>
        <button class="ui button red" @click="stopLocationUpdates">
            <i class="i-Stop-2"></i>
            Stop
        </button>
    </section>
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
          lat:0,
          lng:0,
          timestamp: 0,
          watchPositionId: null,
          map: null,
          previous: {lat:0, lng:0},
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
              zoom: 15,
              center: new google.maps.LatLng(37.331777, 127.129347),
              mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        this.map = map;
      },
      startLocationUpdates() {
          var map = new google.maps.Map(this.$refs["map"], {
              zoom: 15,
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
                  }else{
                    var current = {
                      lat: this.lat,
                      lng: this.lng
                    };
                    var distance = this.computeDistance(this.previous, current);
                    console.log(distance);
                    if(distance>0.1){
                      this.previous.lat = this.lat;
                      this.previous.lng = this.lng;
                      this.savePosition(position);
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
      stopLocationUpdates() {
          navigator.geolocation.clearWatch(this.watchPositionId);

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
          path: runningPathCoordinates,
          geodesic: true,
          strokeColor: "#ff0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        console.log(runningPath);
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
