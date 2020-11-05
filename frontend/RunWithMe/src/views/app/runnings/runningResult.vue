<template>
  <div class="main-content">
    <breadcumbcustom :title="'Running Result'"/>
    <div class="simpleResult">
        <div class="col">
            <div class="row">
                <div class="col">
                    런닝 종료 시간
                    <h3>{{result.endTime}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    총 런닝 거리
                    <h3>{{result.accDistance}} km</h3>
                </div>
                <div class="col">
                    총 런닝 시간
                    <h3>{{result.accTime}}초</h3>
                </div>
            </div> 
            <div class="row">
                <div class="col">
                    평균 속도
                    <h3>{{result.accDistance/result.accTime}} m/s</h3>
                </div>
                <div class="col">
                    최대 속력
                    <h3>{{result.accDistance/result.accTime}}</h3>
                </div>
            </div>
        </div>
    </div>

    <img :src="result.thumbnail" width="100%" height="300px"/>
    <!-- <section ref="map" class="map"> </section> -->
    <br>
    <h3>구간</h3>
    <div class = "col">
        <div class="row">
            <div class = "col">
                <h4>Km</h4>
            </div>
            <div class = "col">
                <h4>평균페이스</h4>
            </div>
        </div>
        <div class="row" v-for="(record,index) in result.records" :key="index">
            <div class = "col">
                <h4>{{record.accumulcated_distance}}</h4>
            </div>
            <div class = "col">
                <h4>{{convertToTime(record.accumulcated_time)}}</h4>
            </div>
        </div>
    </div>
    <br>
  </div>
</template>
<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
  name: 'runningResult',
  data() {
    return {
        date: new Date(),
        map : null,
        result: {},
    }
  },
  mounted() {
    console.log("result")
    this.result = this.myRunning
    console.log(this.result)
    this.$store.commit('closeSidebar')

    if(window.google && window.google.maps) {
        this.initMap();
    } else {
        const script = document.createElement('script');
        script.onload = () => google.maps.load(this.initMap);
    }
  },
  computed: {
    ...mapGetters(["myRunning"]),
  },
  methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar"]),
    initMap(){
        var map = new google.maps.Map(this.$refs["map"], {
              zoom: 15,
              center: new google.maps.LatLng(37.331777, 127.129347),
              mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        this.map = map;
        this.decodePolyline();
    },
    decodePolyline() {
        const decodePolylines = require('decode-google-map-polyline');
        this.drawLines(decodePolylines(this.result.polyline));
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
        this.map.setCenter(new google.maps.LatLng(positions[0].lat, positions[0].lng))
        runningPath.setMap(this.map);
    },
    convertToTime(origin){
        var time = "";
        time += parseInt(origin/60) + "\'";
        time += origin%60 + "\"";
        return time;
    }
  }
};
</script>
<style scoped>
.map {
  flex-grow: 1;
  width:100%;
  height:400px;
  border:1px solid red;
}
</style>