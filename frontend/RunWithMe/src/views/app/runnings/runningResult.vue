<template>
  <div class="main-content">
     <div style="text-align:center">
      <p style="font-size:1.5em;margin-bottom:5px">
         <h4> {{result.parseTimeE[0]}}일 런닝기록</h4>
    </div>
    <div class="simpleResult">
        <div class="col">
            <div class="row">
                <div class="col">
                    런닝 시작 시간
                    <h3>{{result.parseTimeS[1]}}</h3>
                </div>
                <div class="col">
                    런닝 종료 시간
                    <h3>{{result.parseTimeE[1]}}</h3>
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
                    <h3>{{avgSpeed}} m/s</h3>
                </div>
                <div class="col">
                    최대 속력
                    <h3>{{avgSpeed}} m/s</h3>
                </div>
            </div>
        </div>
    </div>

    <img :src="result.thumbnail" style="width:100%;height:45vh"/>
    <br>
    <h4 style="text-align:center">구간</h4>
    <div class = "col" >
        <div class="row">
            <div class = "col">
                <h5>구간</h5>
            </div>
            <div class = "col">
                <h4>평균 페이스</h4>
            </div>
        </div>
        <div v-if="records.length==0">
            <h4>저장된 구간이 없어요!</h4>
        </div>
        <div class="row" v-for="(record,index) in records" :key="index">
            <div class = "col">
                <h4>{{record.accDistance}}</h4>
            </div>
            <div class = "col">
                <h4>{{convertToTime(record.accTime)}}</h4>
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
        result: {},
        avgSpeed:0,
        records:[
        ],
    }
  },
  mounted() {
    this.$store.commit('closeSidebar')
    this.result = this.myRunning
    this.result['parseTimeE'] = this.result.endTime.split('T')
    this.result['parseTimeS'] = this.result.startTime.split('T')

    this.result.accDistance=parseFloat(parseFloat(this.myRunning.accDistance).toFixed(2))
    if(this.result.accDistance!=0.00 ||this.result.accTime!=0.00 ||this.result.accDistance!=0 || this.result.accTime!=0){
        this.avgSpeed=0;
    }else {
        this.avgSpeed = this.avgSpeed.toFixed(2)
    }

    console.log(this.result)

    this.getTempRuns()
    for(var i=0; i<this.records.length; i++){
        if(i!=this.records.length-1)  {
            this.records[i].accDistance= parseFloat(this.records[i].accDistance).toFixed(0)
        }
            this.records[i].accDistance+=" km"
    }

    

  },
  computed: {
    ...mapGetters(["myRunning"]),
  },
  methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar"]),
    getTempRuns(){
        http.get(`runnings/temp/`)
            .then((res) => {
                console.log("Running Result 에서 구간별 런닝 조회")
                console.log(res.data);
                this.records=res.data
            })
            .catch((err) => {
                console.log("1Km이상 뛰지 않았어요")
                console.log(this.records)
            });
    },

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