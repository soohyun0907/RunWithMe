<template>
  <div class="main-content">
    <breadcumb :page="'User Profile'" :folder="'Pages'" />

    <div class="card user-profile o-hidden mb-30">
      <div
        class="header-cover"
        style="
          background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg;;
        "
      ></div>
      <div class="user-info">
        <div v-if="userInfo.profile!=null || userInfo.profile!=''">
          <img
            class="profile-picture avatar-lg mb-2"
            :src="userInfo.profile"
            alt=""/>
        </div>

        <div v-else>
          <img
            class="profile-picture avatar-lg mb-2"
            :src="defaultImage"
            alt=""/>
        </div>

        <p class="m-0 text-24">{{ userInfo.username }}</p>
        <p class="text-muted m-0">{{ userInfo.userEmail }}</p>
        <p class="text-muted m-0">{{userInfo.gugunId.sidoId.sidoName}} {{ userInfo.gugunId.gugunName }}</p>
      </div>
      <div class="card-body">
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="지역별 런닝" active>


            <h3 class="heading text-primary">[{{userInfo.gugunId.gugunName}}]에서의 런닝</h3>
              <section ref="map" class="map"></section>

              <ul class="timeline clearfix">
                <b-card title="최근 런닝 기록" class="heading text-primary mb-30">
                  <div role="tablist">
                    <div v-for="(running,i) in areaRunning" :index="i">
                      <b-card no-body class="ul-card__border-radius">
                        <!-- 접혀있을때 보이는 부분 -->
                        <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                          <b-button class="card-title mb-0" block href="#" v-b-toggle="'accordion-'+i" variant="transparent" style="font-size:1em">
                            <span>
                              <img class="rounded mb-2" :src="running.thumbnail" @error="defaultImage" alt="썸넬" width=30px height=30px style="margin-left:-10px;"/>
                            </span>
                            {{running.endTime}} 런닝
                            
                          </b-button>
                        </b-card-header>
                        
                        <b-collapse v-bind:id="'accordion-'+i" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <img class="rounded mb-2" :src="running.thumbnail" alt="running Path" width=100% height=150px/>
                            <b-card-text>
                              <h5><code>{{running.endTime}}</code> 런닝 기록.</h5>
                            </b-card-text>
                            <b-card-text>총 런닝 시간 : <strong>{{running.accTime}}초</strong></b-card-text>
                            <b-card-text>총 런닝 거리 : <strong>{{running.accDistance}} km</strong></b-card-text>
                            <b-card-text>시작 시간 : <strong>{{running.startTime}}</strong> </b-card-text>
                            <b-card-text>종료 시간 : <strong>{{running.endTime}}</strong> </b-card-text>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>
                  </div>
                </b-card>
              </ul>

            </b-tab>

            <b-tab title="전체 런닝">


            <h3 class="heading text-primary">모든 지역에서의 런닝</h3>
              <section ref="map2" class="map"></section>

              <ul class="timeline clearfix">
                <b-card title="최근 런닝 기록" class="heading text-primary mb-30">
                  <div role="tablist">
                    <div v-for="(running,i) in allRunning" :index="i">
                      <b-card no-body class="ul-card__border-radius">
                        <!-- 접혀있을때 보이는 부분 -->
                        <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                          <b-button class="card-title mb-0" block href="#" v-b-toggle="'accordion-'+i" variant="transparent" style="font-size:1em">
                            <span>
                              <img class="rounded mb-2" :src="running.thumbnail" @error="defaultImage" alt="썸넬" width=30px height=30px style="margin-left:-10px;"/>
                            </span>
                            {{running.endTime}} 런닝
                            
                          </b-button>
                        </b-card-header>
                        
                        <b-collapse v-bind:id="'accordion-'+i" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <img class="rounded mb-2" :src="running.thumbnail" alt="running Path" width=100% height=150px/>
                            <b-card-text>
                              <h5><code>{{running.endTime}}</code> 런닝 기록.</h5>
                            </b-card-text>
                            <b-card-text>총 런닝 시간 : <strong>{{running.accTime}}초</strong></b-card-text>
                            <b-card-text>총 런닝 거리 : <strong>{{running.accDistance}} km</strong></b-card-text>
                            <b-card-text>시작 시간 : <strong>{{running.startTime}}</strong> </b-card-text>
                            <b-card-text>종료 시간 : <strong>{{running.endTime}}</strong> </b-card-text>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
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
import { mapGetters } from "vuex";

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
      defaultImage:require('@/assets/images/runnings/runningEx1.png')
    };
  },

  computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo","defaultProfile"]),
  },

  mounted() {
    this.getRunningsbyArea()
    this.getRunnings()
    console.log(this.userInfo)
    console.log("머하냐고"+ this.userInfo.profile)
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => google.maps.load(this.initMap);
    }
    console.log(this.userInfo);
  },
  methods: {
    getRunningsbyArea(){
      http.get(`runnings/areas`)
      .then(data => {
        this.areaRunning=data.data.data
        console.log(this.areaRunning)
      })
    },
    getRunnings(){
      http.get(`runnings/${this.userInfo.userId}`)
      .then(data => {
        this.allRunning=data.data.data
        console.log(this.allRunning)
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
  },
};
</script>

<style scoped>
.map {
  flex-grow: 1;
  width: 100%;
  height: 200px;
}
</style>
