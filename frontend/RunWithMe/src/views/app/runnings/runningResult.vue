<template>
  <div class="main-content">
    <breadcumbcustom :title="'Running Result'" :date=date.toLocaleString() />
    <div class="simpleResult">
        <h1>{{result.accumulcated_distance}} km</h1>
        <div class="col">
            <div class="row">
                <div class="col">
                    평균페이스
                    <h3>{{convertToTime(result.running_avg_pace)}}</h3>
                </div>
                <div class="col">
                    시간
                    <h3>{{result.accumulcated_time}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    최소페이스
                    <h3>{{convertToTime(result.running_min_pace)}}</h3>
                </div>
                <div class="col">
                    최대페이스
                    <h3>{{convertToTime(result.running_max_pace)}}</h3>
                </div>
            </div>
        </div>
    </div>
    <section ref="map" class="map"></section>
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
export default {
  name: 'runningResult',
  mounted() {
    if(window.google && window.google.maps) {
        this.initMap();
    } else {
        const script = document.createElement('script');
        script.onload = () => google.maps.load(this.initMap);
    }
  },
  data() {
    return {
        date: new Date(),
        map : null,
        result: {
            polyline : "invcFia`fWOdOdDKh@hANl@zA?t@r@lABBaBlACj@Yg@aCqAwDSeBSiAi@_C`CqA`CmAfCw@kC{@e@oAg@Fi@a@q@`@NjA}An@aALsAMuAKE~B",
            accumulcated_distance: 7.06,
            accumulcated_time: "38:11",
            running_avg_pace : 325,
            running_min_pace : 300,
            running_max_pace : 420,
            records : [
                {
                    accumulcated_distance: 1,
                    accumulcated_time : 300
                },
                {
                    accumulcated_distance: 2,
                    accumulcated_time : 300
                },
                {
                    accumulcated_distance: 3,
                    accumulcated_time : 300
                },
                {
                    accumulcated_distance: 4,
                    accumulcated_time : 300
                },
                {
                    accumulcated_distance: 5,
                    accumulcated_time : 300
                },
            ]
        },
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