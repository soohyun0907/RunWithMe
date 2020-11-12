<template>
  <div class="main-content">
    <section class="top-bar">
      <breadcumb :page="'Record Running'" :folder="'Runnings'" />
      <h4 style="margin-top:5px;">Run With Me?</h4>
    </section>

  <splide
      :options="options"
      >
        <splide-slide>
        <div style="text-align:center; margin-top:40px;">
          <div class="myRecord"  >
              <div id="run_desc distance">누적 거리</div>
            <span id="acc_dis" > {{ accumulated_distance.toFixed(2) }}km </span>
          </div>
          <div class="myRecord" >
              <div id="run_desc speed">현재 속도</div>
              <span id="acc_time">{{ speed.toFixed(2) }}m/s</span>
          </div>
          <div class="myRecord">
                <div id="run_desc time">누적 시간</div>
                <span id="time">{{ clock }}</span>
          </div>
        </div>
        <div style="text-align:center">
          <section style="display:inline-block" ref="map" class="map"></section>
        </div>
        <div class="btn_container">
          <div v-if="!running">
            <section class="bottom-bar">
              <div v-if="!isPause">
                <button type="button" @click="startLocationUpdates" class="btn round btn btn-success btn-icon rounded-circle m-1">
                <span class="ul-btn__icon"> <i style="font-size:2em; margin-left: 10px;" class="i-Start-2"></i></span>
                </button>
              </div>
              <div v-if="isPause">
                <button type="button" @click="watchLocationUpdates" class="btn round btn btn-warning btn-icon rounded-circle m-1">
                <span class="ul-btn__icon"> <i style="font-size:2em; margin-left: 10px;" class="i-Start-2"></i></span>
                </button>
                  <button type="button" @click="endLocationUpdates" class="btn round btn btn-dark btn-icon rounded-circle m-1">
                <span class="ul-btn__icon"> <i style="font-size:2em;" class="i-Stop-2"></i></span>
              </button>

              </div>
            </section>
          </div>
          <div v-if="running">
            <section class="bottom-bar">

              <button type="button" @click="stopLocationUpdates" class="btn round btn btn-danger btn-icon rounded-circle m-1">
                <span class="ul-btn__icon"> <i style="font-size:2em;" class="i-Pause"></i></span>
              </button>

              <button type="button" @click="endLocationUpdates" class="btn round btn btn-dark btn-icon rounded-circle m-1">
                <span class="ul-btn__icon"> <i style="font-size:2em;" class="i-Stop-2"></i></span>
              </button>

            </section>
          </div>
        </div>
    
        </splide-slide>
        <splide-slide>
          <div class="card mb-30">
          <div class="card-body p-0">
            <div class="card-title  d-flex align-items-center mb-2 pb-0 p-3">
              <span>구간별 기록</span>
            </div>
            <div class="d-flex border-bottom justify-content-between  p-3 ">
              <div class="flex-grow-1">
                <h5 class="m-0">구간</h5>
              </div>
              <div class="flex-grow-1">
                <h5 class="m-0">도달 시간</h5>
              </div>
            </div>
            <div v-if="tempRecords.length==0">
              <h4>임시저장된 기록이 없네요.</h4>
            </div>
              <div v-for="(record,index) in tempRecords" :key="index" class="d-flex border-bottom justify-content-between p-3">
                <div class="flex-grow-1">
                  <h5 class="m-0">{{record.accDistance}} km</h5>
                </div>
                <div class="flex-grow-1">
                  <h5 class="m-0">{{convertToTime(record.accTime.toFixed(2))}}</h5>
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
        </splide-slide>
     </splide>
  </div>
</template>
<script src="path-to-the-file/splide.min.js"></script>
<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running",
  },
  components:{
    Splide,
    SplideSlide,
  },
  data() {
    return {
      current: { lat: 0, lng: 0 },
      previous: { lat: 0, lng: 0 },
      watchPositionId: null,
      map: null,
      accumulated_distance: 0, // 총 누적거리
      accumulated_time: 0, // 총 누적 시간
      speed: 0, // 현재 속력
      show_speed:0, // 현재 속력 - 보여주기
      checkOneKm: 0, //1 km마다 초기화
      checkSecond: 0, // 1 km마다 초기화
      avgSpeed:0, //전체 평균 속력
      linePath: [],
      poly: null,
      encoded_polyline: "",
      cur_marker: null,
      startTime: "",
      endTime: "",
      gugun: [],
      currentCity: "",
      thumbnail:"",
      tempRecords:[],
      stringTempRecords:[],
      //스톱워치 변수
      clock: "00:00:00",
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false,
      isPause: false,
      //splide options
      options: {
        rewind : true,
        perPage:1,
        width  : 400,
        gap    : '1rem',
      },

      //chart
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
    };
  },
  mounted() {
    this.$store.commit('closeSidebar')
    if(localStorage.getItem("newdaeyong@naver.com")){
      console.log(localStorage.getItem("newdaeyong@naver.com"))
    }else{
      console.log("업써요")
    }
    
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => google.maps.load(this.initMap);
    }
    this.resetLocations()
    this.accumulated_distance=0
    this.accumulated_time=0
    this.checkSecond=0
    this.checkOneKm=0

  },
  computed: {
    ...mapGetters(["userInfo","defaultProfile"]),
  },
  methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar"]),
    
     convertToTime(origin){
        var time = "";
        time += parseInt(origin/60) + "\'";
        time += origin%60 + "\"";
        return time;
    },
    initMap() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.current.lat = position.coords.latitude;
        this.current.lng = position.coords.longitude;

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
      this.endTime = "";
      this.clock = "00:00:00";
      this.timeBegan = null;
      this.timeStopped = null;
      this.stoppedDuration = 0;
      this.started = null;
      this.checkSecond = 0;
      this.checkOneKm = 0;
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
            
            this.previous.lat = this.current.lat;
            this.previous.lng = this.current.lng;
            
            //이제 런닝 시작이면
            var currentLatLng = new google.maps.LatLng(
              this.current.lat,
              this.current.lng
            );
            this.linePath.push(currentLatLng);

            //라인 그리기 테스트용
            //  this.linePath.push(new google.maps.LatLng(
            //   this.current.lat+0.001,
            //   this.current.lng+0.001
            // ));

          } else {
            var distance = this.computeDistance(this.previous, this.current);
            
            console.log("watchposition 이동거리" + distance);
            console.log("watchposition 걸린시간" + this.checkSecond);
            var threshold = 0.001;
            this.previous.lat = this.current.lat;
            this.previous.lng = this.current.lng;
            
            if (distance > threshold) {
              // 일정속도 이상으로 뛸때만 기록.
              this.accumulated_distance += distance;
              this.checkOneKm += distance;

              var currentLatLng = new google.maps.LatLng(
                this.current.lat,
                this.current.lng
              );
              this.linePath.push(currentLatLng);
              this.speed = (this.checkOneKm * 1000) / this.checkSecond;
            }
            if (this.checkOneKm >= 1) {
              //1km 도달시 마다
              console.log("최근 1km당 스피드 = " + this.speed);
              this.savePosition();
              setTimeout(() => {
                this.checkOneKm -= 1;
                this.checkSecond = 0;
              }, 100);

            }
          }
        },
        (error) => {
          console.log(error.message);
        },
        {
          timeout: 5000,
          maximumAge: 0,
          enableHighAccuracy:true,
          distanceFilter:40,          
        }
      );
      this.map = map;
      this.cur_marker = marker;
    },
    getScreenShot() {
      //google static map url
      var staticM_URL = "https://maps.googleapis.com/maps/api/staticmap?";
      staticM_URL += "size=520x650&zoom=16&maptype=roadmap&";
      staticM_URL +=
        "key=AIzaSyAUd76NMwTSUKUHpuocMhah5P8cocpFgKI&format=png&"; //Set the Google Map Type.
      
      console.log("getScreenShot")
      console.log(this.encoded_polyline)
      console.log(this.encoded_polyline.length)
      if(this.encoded_polyline.length>4){
        staticM_URL +="path=color:red|weight:3|enc:"
        staticM_URL += this.encoded_polyline
      }else{
        staticM_URL += "center="+this.current.lat+","+this.current.lng
      }


      // staticM_URL +="path=color:orange|weight:3"
      // for(var i=0; i<this.linePath.length; i++){
      //   staticM_URL +="|"+this.linePath[i].lat()+","+this.linePath[i].lng()
      // }

      this.thumbnail = staticM_URL
      // window.open(this.thumbnail)
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
      if(this.checkOneKm==0 || this.checkSecond==0){
        var speed = 0.01
      }else{
        var speed = this.speed+0.01
      }

      let tempRecord = {
        accDistance:this.checkOneKm+0.01,
        accTime: this.accumulated_time,
        speed: speed,
      };
      this.tempRecords.push(tempRecord)
      this.echart4.series[0].data.push((tempRecord.accTime/60).toFixed(2))
      this.echart4.xAxis.data.push(tempRecord.accDistance)
                
      console.log("savePosition - tempRecords")
      console.log(this.tempRecords)
      
      let stringTempRecord = {
        accDistance:(this.checkOneKm+0.01).toString(),
        accTime: this.accumulated_time.toString(),
        speed: speed.toString(),
      };
      this.stringTempRecords.push(stringTempRecord)
       console.log("savePosition - stringtempRecords")
     
      console.log(this.stringTempRecords)
      

      // //래디스에 저장
      // http
      //   .post(`runnings/temp`, JSON.stringify(data), {
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //     console.log(
      //       "1키로당 기록 전송" + data.accDistance + " " + data.accTime
      //     );
      //   })
      //   .catch((err) => {
      //     console.log("savePosition Error")
      //     console.log(err)
      //   });
    },

    endLocationUpdates() {
      this.stopLocationUpdates();
      this.getScreenShot();
      this.speed = (this.accumulated_distance * 1000) / this.accumulated_time;
           
      this.savePosition();
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

      ////////////////////////// 

      this.gugun.length.length==0 ? this.gugun : this.gugun.push("강남구")
      let runningData = {
        polyline: this.encoded_polyline.toString(),
        startTime: this.startTime,
        endTime: this.endTime,
        accDistance: (this.accumulated_distance+0.01).toString(),
        accTime: this.accumulated_time.toString(),
        gugun:this.gugun,
        thumbnail:this.thumbnail,
        records:this.stringTempRecords,
      };
        let myRunningData = {
        polyline: this.encoded_polyline,
        startTime: this.startTime,
        endTime: this.endTime,
        accDistance: (this.accumulated_distance+0.01),
        accTime: this.accumulated_time,
        gugun:this.gugun,
        thumbnail:this.thumbnail,
        records:this.tempRecords,
      };
      console.log("myRunningData")
      console.log(myRunningData)

      this.accumulated_distance=0
      this.accumulated_time=0
      this.checkSecond=0
      this.checkOneKm=0

      http.post(`runnings/`, JSON.stringify(runningData), {
          headers: {
            "Content-type": "application/json",
          },
      })
      .then(data => {
        console.log("런닝 기록 저장 완료.")
        console.log(runningData)
        this.$store.commit('mutateMyRunning',myRunningData)
        this.$router.push('/app/runnings/runningResult')
      }).catch(err => {
        console.log("runnings/ 저장 오류")
        console.log(err)
      })
    },
    clockRunning() {
      var currentTime = new Date();
      var timeElapsed = new Date(
        currentTime - this.timeBegan - this.stoppedDuration
      );

      var hour = timeElapsed.getUTCHours();
      var min = timeElapsed.getUTCMinutes();
      var sec = timeElapsed.getUTCSeconds();
      
      this.clock =
        this.zeroPrefix(hour, 2) +
        ":" +
        this.zeroPrefix(min, 2) +
        ":" +
        this.zeroPrefix(sec, 2);
        
      var realTime = ((currentTime- this.timeBegan-this.stoppedDuration)/1000).toFixed(0)
      
      console.log("실제 시간 " + realTime)

      
      // this.accumulated_time += 1;
      // this.checkSecond += 1;
      this.accumulated_time = realTime;
      this.checkSecond = realTime;
      console.log(this.clock)
    },
    zeroPrefix(num, digit) {
      
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    drawLines() {
      // var runningPathCoordinates = [];
      // for (var i = 0; i < this.linePath.length; i++) {
      //   runningPathCoordinates.push(
      //     new google.maps.LatLng(this.linePath[i].lat,this.linePath[i].lng)
      //   );
      // }
      console.log("drawLines - this.linePath")
      console.log(this.linePath)
      this.poly = new google.maps.Polyline({
        // path: runningPathCoordinates,
        path: this.linePath,
        geodesic: true,
        strokeColor: "#ff0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map:this.map
      });
      console.log("drawLines - this.poly")
      console.log(this.poly)
      this.encode_polyline(this.poly)
    },
    // encode_polyline(latLng, poly) {
    encode_polyline(poly) {
      var path = poly.getPath();
      this.encoded_polyline = google.maps.geometry.encoding.encodePath(path);
      console.log("this.encoded_polyline")
      console.log(this.encoded_polyline)
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

<style scoped>
.flex-grow-1{
  width:30vw;
  text-align:center;
}
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
  width: 95%;
  height: 47vh;
}
.bottom-bar {
  height: 100px;
  text-align: center;
  background: white;
}
/* 스톱워치 디자인 */
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");
#time {
  font-size: 1.5em;
}
#acc_time {
  font-size: 1.5em;
}
#acc_dis {
  font-size: 1.5em;
}
.btn-container {
  display: flex;
  margin-top: 15px;
}
.myRecord {
  width:30vw; 
  float:left;
}
.btn-icon{
  width:60px !important;
  height:60px !important;
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
