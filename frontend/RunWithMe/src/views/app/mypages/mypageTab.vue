<template>
  <div class="main-content">
    <breadcumb :page="'User Profile'" :folder="'Pages'" />

    <div class="card user-profile o-hidden mb-30">
    <div class="header-cover" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    </div>
      <div class="user-info">
        <div v-if="userInfo.profile!=null">
          <img
            class="profile-picture avatar-lg mb-2"
            :src="userInfo.profile"
            alt=""/>
        </div>

        <div v-else>
          <img
            class="profile-picture avatar-lg mb-2"
            :src="defaultProfile"
            alt=""/>
        </div>

        <p class="m-0 text-24">{{ userInfo.username }}</p>
        <p class="text-muted m-0">{{ userInfo.userEmail }}</p>
        <p class="text-muted m-0">{{userInfo.gugunId.sidoId.sidoName}} {{ userInfo.gugunId.gugunName }}</p>
      </div>
      <div class="card-body">
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="전체 런닝" active>


            <h3 class="heading text-primary">모든 지역에서의 런닝</h3>
              <section ref="map2" class="map"></section>

              <ul class="timeline clearfix">
                <b-card title="최근 런닝 기록" class="heading text-primary mb-30">
                  <div role="tablist">
                    <div v-if="allRunning.length>0">
                      <div v-for="(running,i) in allRunning" :index="i" :key="running.id">
                        <b-card no-body class="ul-card__border-radius">
                          <!-- 접혀있을때 보이는 부분 -->
                          <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                            <b-button @click="decodePolyline(running.polyline)" class="card-title mb-0" block href="#" v-b-toggle="'accordion-'+i" variant="transparent" style="text-align:center; font-size:1.1em">
                                <img class="rounded mb-2" :src="running.thumbnail" @error="defaultImage" alt="썸넬" width=40px height=40px style="margin-left:-12px;"/>
                                {{running.end[0]}}일 런닝
                            </b-button>
                            <b-button @click="deleteRunning(running)" style="right:0px padding:0 !important" class="card-title mb-0"  block href="#"  variant="transparent">
                              <i class ="i-Close"/>
                            </b-button>
                          </b-card-header>
                          <b-collapse v-bind:id="'accordion-'+i" accordion="my-accordion" role="tabpanel">
                            <router-link :to="{name:'runningFriends', query:{friendName:userInfo.username, runningId:running.runningId}}">
                              <b-card-body>
                                <img class="rounded mb-2" :src="running.thumbnail" alt="running Path" width=100% height=150px/>
                                <b-card-text>
                                  <h5><code>{{running.end[0]}}</code>일 런닝 기록.</h5>
                                </b-card-text>
                                <b-card-text>총 런닝 시간 : <strong>{{ parseInt(running.minute) }}분 {{running.second}}초</strong></b-card-text>
                                <b-card-text>총 런닝 거리 : <strong>{{running.accDistance}} km</strong></b-card-text>
                                <b-card-text>시작 시간 : <strong>{{running.start[1]}}</strong> </b-card-text>
                                <b-card-text>종료 시간 : <strong>{{running.end[1]}}</strong> </b-card-text>
                              </b-card-body>
                            </router-link>
                          </b-collapse>
                        </b-card>
                      </div>
                    </div>
                    <div v-else>
                      <code> {{userInfo.username}}님의 런닝기록이 없어요. </code>
                    </div>
                  </div>
                </b-card>
              </ul>
            </b-tab>
            <b-tab title="지역별 런닝">


            <h3 class="heading text-primary">[{{userInfo.gugunId.gugunName}}]에서의 런닝</h3>
              <section ref="map" class="map"></section>

              <ul class="timeline clearfix">
                <b-card title="최근 런닝 기록" class="heading text-primary mb-30">
                  <div role="tablist">
                    <div v-if="areaRunning.length>0">
                      <div v-for="(running,i) in areaRunning" :index="i" :key="running.id">
                        <b-card no-body class="ul-card__border-radius">
                          <!-- 접혀있을때 보이는 부분 -->
                          <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                            <b-button @click="decodePolyline2(running.polyline)" class="card-title mb-0" block href="#" v-b-toggle="'accordion-'+i" variant="transparent" style="font-size:1em; font-size:1.1em">
                              <span>
                                <img class="rounded mb-2" :src="running.thumbnail" @error="defaultImage" alt="썸넬" width=40px height=40px style="margin-left:-10px;"/>
                              </span>
                              {{running.end[0]}}일 런닝
                            </b-button>
                            <b-button @click="deleteRunning(running)" style="right:0px padding:0 !important" class="card-title mb-0"  block href="#"  variant="transparent">
                              <i class ="i-Close"/>
                            </b-button>
                          </b-card-header>
                          
                          <b-collapse v-bind:id="'accordion-'+i" accordion="my-accordion" role="tabpanel">
                            <router-link :to="{name:'runningFriends', query:{friendName:userInfo.username, runningId:running.runningId}}">
                            <b-card-body>
                              <img class="rounded mb-2" :src="running.thumbnail" alt="running Path" width=100% height=150px/>
                              <b-card-text>
                                <h5><code>{{running.end[0]}}</code>일 런닝 기록.</h5>
                              </b-card-text>
                              <b-card-text>총 런닝 시간 : <strong>{{running.minute}}분 {{running.second}}초</strong></b-card-text>
                              <b-card-text>총 런닝 거리 : <strong>{{running.accDistance}} km</strong></b-card-text>
                              <b-card-text>시작 시간 : <strong>{{running.start[1]}}</strong> </b-card-text>
                              <b-card-text>종료 시간 : <strong>{{running.end[1]}}</strong> </b-card-text>
                            </b-card-body>
                            </router-link>
                          </b-collapse>
                        </b-card>
                      </div>
                    </div>
                    <div v-else>
                      <code> 해당 지역에서의 런닝이 없습니다. </code>
                    </div>
                  </div>
                </b-card>
              </ul>

            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";
//sweet alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  metaInfo: {
    title: "byArea",
  },
  data() {
    return {
      current: { lat: 0, lng: 0 },
      previous: { lat: 0, lng: 0 },
      watchPositionId: null,
      map: null,
      map2:null,
      areaRunning:[],
      allRunning:[],
      defaultImage:require('@/assets/images/runnings/runningEx1.png'),
      bgImage: require("@/assets/images/signin/loginpage4.jpg"),
    };
  },

  computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo","defaultProfile"]),
  },

  mounted() {
    this.$store.commit('closeSidebar')
    this.getRunnings()
    this.getRunningsbyArea()
    //console.log(this.userInfo)
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => google.maps.load(this.initMap);
    }
    //console.log(this.userInfo);
  },
  methods: {
    ...mapMutations(["closeSidebar"]),
    deleteRunning(deleteRun) {
      console.log(deleteRun)
      http.delete(`/runnings/${deleteRun.runningId}`)
      .then(data =>{
        console.log(data)
        Swal.fire({
          icon:'success',
          text:'런닝이 삭제되었습니다.',
          showConfirmButton:false,
          timer:500,
        })
        this.getRunningsbyArea()
        this.getRunnings()
      })

    },
    getRunningsbyArea(){
      http.get(`runnings/areas`)
      .then(data => {
        this.areaRunning=data.data.data
        for(var i=0;i<this.areaRunning.length;i++){
        if(this.areaRunning[i].accTime>=60){
          this.areaRunning[i]['minute']= parseInt(this.areaRunning[i].accTime/60)
        }else{
          this.areaRunning[i]['minute']=0
        }
          this.areaRunning[i].accDistance = this.areaRunning[i].accDistance.toFixed(2)
          this.areaRunning[i]['second']=this.areaRunning[i].accTime%60
          this.areaRunning[i]['start'] = this.areaRunning[i].startTime.split("T")
          this.areaRunning[i]['end'] = this.areaRunning[i].endTime.split("T")
        }
      })
    },
    getRunnings(){
      http.get(`runnings/${this.userInfo.userId}`)
      .then(data => {
        this.allRunning=data.data.data
        for(var i=0;i<this.allRunning.length;i++){
        if(this.allRunning[i].accTime>=60){
          this.allRunning[i]['minute']=this.allRunning[i].accTime/60
        }else{
          this.allRunning[i]['minute']=0
        }
          this.allRunning[i].accDistance = this.allRunning[i].accDistance.toFixed(2)
          this.allRunning[i]['second']=this.allRunning[i].accTime%60
          this.allRunning[i]['start'] = this.allRunning[i].startTime.split("T")
          this.allRunning[i]['end'] = this.allRunning[i].endTime.split("T")
        }
        //console.log(this.allRunning)
      })
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
        var map2 = new google.maps.Map(this.$refs["map2"], {
          zoom: 16,
          center: startLoc,
        });
        this.map = map;
        this.map2 = map2;
      });
    },
    decodePolyline(polyline) {
        const decodePolylines = require('decode-google-map-polyline');
        this.drawLines(decodePolylines(polyline));
    },
    drawLines(polyline) {

        var runningPathCoordinates = [];
        var polycenter_lat=0
        var polycenter_lng=0

        for(var i=0; i<polyline.length; i++){
          // //console.log(positions[i].lat);
          runningPathCoordinates.push(new google.maps.LatLng(polyline[i].lat, polyline[i].lng));
          polycenter_lat+=polyline[i].lat 
          polycenter_lng+=polyline[i].lng
       
       }
        //console.log("runningPathCoordinates")
        //console.log(runningPathCoordinates)

        const runningPath = new google.maps.Polyline({
          path: runningPathCoordinates,
          geodesic: true,
          strokeColor: "#ff0000",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        this.map2.setZoom(14)
        this.map2.setCenter(new google.maps.LatLng(polycenter_lat/polyline.length,polycenter_lng/polyline.length))
        runningPath.setMap(this.map2);
    },

    decodePolyline2(polyline) {
        const decodePolylines = require('decode-google-map-polyline');
        this.drawLines2(decodePolylines(polyline));
    },
    drawLines2(polyline) {

        var runningPathCoordinates = [];
        var polycenter_lat=0
        var polycenter_lng=0

        for(var i=0; i<polyline.length; i++){
          // //console.log(positions[i].lat);
          runningPathCoordinates.push(new google.maps.LatLng(polyline[i].lat, polyline[i].lng));
          polycenter_lat+=polyline[i].lat 
          polycenter_lng+=polyline[i].lng
        }
        //console.log("runningPathCoordinates")
        //console.log(runningPathCoordinates)

        const runningPath = new google.maps.Polyline({
          path: runningPathCoordinates,
          geodesic: true,
          strokeColor: "#ff0000",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        this.map.setZoom(14)
        this.map.setCenter(new google.maps.LatLng(polycenter_lat/polyline.length,polycenter_lng/polyline.length))
        runningPath.setMap(this.map);
    },
  },
};
</script>

<style scoped>
.map {
  flex-grow: 1;
  width: 100%;
  height: 200px;
}
.card-body{
  padding:1em !important;
}
.card-title{
  text-align:center;
  margin-bottom:0.5;
}
</style>
