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
                    <h3>{{result.accDistance.toFixed(2)}} km</h3>
                </div>
                <div class="col">
                    총 런닝 시간
                    <h3>{{convertToTime(result.accTime)}}</h3>
                </div>
            </div> 
            <div class="row">
                <div class="col">
                    평균 속도
                    <h3>{{avgSpeed.toFixed(2)}} m/s</h3>
                </div>
            </div>
        </div>
    </div>

    <img :src="result.thumbnail" style="width:100%;height:45vh"/>
    <br>
    <h4 style="margin-top:5vh; text-align:center">구간</h4>
    <div class="card mb-30">
          <div class="card-body p-0">
            <div style="text-align:center;" class="d-flex border-bottom justify-content-between  p-3 ">
              <div class="flex-grow-1">
                <h5 style="text-align:center" class="m-0">구간</h5>
              </div>
              <div class="flex-grow-1">
                <h5 class="m-0">도달 시간</h5>
              </div>
            </div>
            <div v-if="records.length==0">
              <h4 style="text-align:center; margin-top:3vh">구간별 기록이 없네요.</h4>
            </div>
              <div v-else v-for="(record,index) in records" :key="index" class="d-flex border-bottom justify-content-between p-3">
                <div class="flex-grow-1">
                  <h5 style="padding-left:5vw;" class="m-0">{{record.accDistance}}</h5>
                </div>
                <div class="flex-grow-1">
                  <h5 style="padding-left:2vw;" class="m-0">{{convertToTime(record.accTime)}}</h5>
                </div>
            </div>
          </div>
        </div>
         <b-card class="h-100">
          <h4 class="card-title m-0">시간대별 속도</h4>
          <div class="chart-wrapper" style="height: 300px ; width:100%">
            <v-chart :options="echart4" :autoresize="true"></v-chart>
          </div>
        </b-card>
    <br>
  </div>
</template>
<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "런닝 결과",
  },
  data() {
    return {
        date: new Date(),
        result: {},
        avgSpeed:0,
        records:[],
        echart4 : {
        tooltip: {
          show: true,
          // trigger: 'axis',
          axisPointer: {
            type: "line",
            animation: true
          }
        },
        grid: {
          top: "10%",
          left: "0",
          right: "0",
          bottom: "0"
        },
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            show: true
          },
          axisLabel: {
            show: true
          },
          axisTick: {
            show: true
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true
          }
        },
        label: {show: true, color: "#212121"},
        series: [
          {
            data: [],
            type: "line",
            showSymbol: true,
            smooth: true,
            color: "#639",
            lineStyle: {
              opacity: 1,
              width: 2
            }
          }
        ]
     }
    }
  },
  mounted() {
    this.$store.commit('closeSidebar')
    this.result = this.myRunning
    this.result['parseTimeE'] = this.result.endTime.split('T')
    this.result['parseTimeS'] = this.result.startTime.split('T')

    this.avgSpeed = (this.result.accDistance*1000)/parseInt(this.result.accTime)
    setTimeout(() => {
      this.getTempRuns()
    }, 100);
  },
  computed: {
    ...mapGetters(["myRunning"]),
  },
  methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar"]),
    getTempRuns(){
      // this.records=this.result.records
      // console.log("this.records")
      // console.log(this.records)
      for(var i=0; i<this.result.records.length; i++){
          if(i!=this.result.records.length-1 && this.result.records[i].accDistance<0.1) continue;
          this.records.push(this.result.records[i])
      }


      if(this.records.length!=0){
        for(var i=0; i<this.records.length; i++){
            if(i!=this.records.length-1)  {
                this.records[i].accDistance= Math.floor(this.records[i].accDistance)
            }else{
                this.records[i].accDistance= parseFloat(this.records[i].accDistance).toFixed(2)
            }
            this.records[i].accDistance+=" km"
            this.echart4.series[0].data.push((this.records[i].accTime/60).toFixed(2))
            this.echart4.xAxis.data.push(this.records[i].accDistance)
        }
      }
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