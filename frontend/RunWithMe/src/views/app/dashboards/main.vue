<template>
  <div class="main-content">
    <h3>기부/이벤트</h3>

    <div v-if="slides.length==0">
        <h3 class="mt-5" style="text-align: center;">현재 진행중인 이벤트가 없어요!</h3>
    </div>

  <div v-else> 
    <!-- <carousel-3d :width="180" :height="250"> -->
    <carousel-3d :width="150" :height="150"
     :controls-visible="true" >
      <!-- <slide v-for="(slide,index) in slides" :key="index" style="border: 0px;"> -->
      <slide v-for="(slide,i) in slides" :index="i" :key="slide.id" style="border: 0px;">
        <div @click="toggleOverlay">
          <b-overlay 
          :show="slidesOverlayShow" 
          :variant="variant"
          :opacity="opacity"
          :blur="blur"
          rounded="sm">
            <img :src="slide.challengeImg" />
            <template #overlay>
              <div class="text-center">
                <h5 style="overflow:hidden;">{{slide.title}}</h5>
                <h6>{{slide.startTime.substring(0,10)}} ~ {{slide.endTime.substring(0,10)}}</h6>
              </div>
            </template>
          </b-overlay>
        </div>
      </slide>
    </carousel-3d>
  </div>
    <!-- <vueper-slides
      class="no-shadow"
      :visible-slides="1.7"
      :arrows="false"
      :slide-ratio="1 / 4"
      :gap="3"
      :dragging-distance="70"
      fixedHeight="250px"
      prevent-y-scroll>
      <vueper-slide v-for="(slide, i) in slides" :index="i" :key="i"
        :image="slide.challengeImg" >
        <div @click="toggleOverlay">
          <b-overlay 
          :show="slidesOverlayShow" 
          :variant="variant"
          :opacity="opacity"
          :blur="blur"
          rounded="sm">
            <template #overlay>
              <div class="text-center">
                <h3>{{slide.title}}</h3>
                <h5>{{slide.startTime.substring(0,10)}} ~ {{slide.endTime.substring(0,10)}}</h5>
              </div>
            </template>
          </b-overlay>
        </div>
      </vueper-slide>
    </vueper-slides> -->
    <hr>
    <b-card style="margin-bottom:15px;">
      <div class="d-flex justify-content-between">
        <h3 class="ul-widget__head-title">
          TOP RANK
        </h3>
      </div>
      <div class="ul-widget__body">
        <div class="ul-widget1">
          <div class="ul-widget__item ul-widget4__users" v-for="(ranker,index) in rankList" :index="index" :key="ranker.rankerId">
            <div>
            <h5 style="width:5vh;">{{ index+1 }} </h5>
            </div>
              <div v-if="ranker.userId.profile!=null" class="ul-widget4__img">
                <img
                  :src="ranker.userId.profile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  height="40px"
                />
              </div>
               <div v-else class="ul-widget4__img">
                <img
                  :src="defaultProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
              <div class="ul-widget2__info ul-widget4__users-info">
                 <router-link :to="{name:'friendsDetail', query:{friendId:ranker.userId.userId}}">
                  {{ranker.userId.username}}
                </router-link>
              </div>
              <span class="ul-widget4__number t-font-boldest text-success">
                {{ranker.totalExp}} P
              </span>
          </div>
        </div>
      </div>
    </b-card>
    <hr>
    <h3>친구 피드 시작</h3>
    <div v-if="!haveFriends">
      <br>
      <span>아직 친구가 없어요. 친구를 등록해주세요!</span>
      <router-link tag="a" class to="/app/runnings/neighborhoodList">
        <b-button variant="outline-dark m-1">주변에 사는 러너들 구경하러 가기</b-button>
      </router-link>
      <br>
    </div>
    <div
      ref="rowView"
      class="row "
      :class="{ 'list-grid': isListView, 'list-horizontal': !isListView }"
    >
      <div
        :class="{
          'col-md-6  col-lg-4 col-xl-3': isListView,
          'col-md-12': !isListView
        }"
        class="list-item "
        :key="index"
        v-for="(item, index) in friendsFeed"
        transition="list"
      >
        <router-link :to="{name:'runningResult', query:{friendId:item.userId.userId}}">
        <div
          class="card o-hidden mb-30 d-flex "
          :class="{ 'flex-column': isListView, 'flex-row': !isListView }"
        >
          <div class="list-thumb d-flex">
            <img :src="item.mapImg" />
          </div>
          <div
            class="flex-grow-1 "
            :class="{ 'd-bock': isListView, 'pl-2 d-flex': !isListView }"
          >
            <div
              class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"
              :class="{ 'flex-lg-row': !isListView }"
            >
              <a class="w-40 w-sm-100" href="">
                <div class="item-title">
                  <b-avatar class="mr-2" variant="info" :src="item.profileImg"></b-avatar>
                    {{ item.title }}
                </div>
              </a>
              <br>
              <!-- <p class="m-0 text-muted text-small w-15 w-sm-100">
                총 킬로미터 평균페이스 총 런닝 시간
              </p> -->
              <p class="m-0 text-muted text-small w-15 w-sm-100">
                {{ item.total_distance }}KM /
                {{ convertToTime(item.running_avg_pace) }} /
                {{ convertToTime(item.accumulcated_time) }}
              </p>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import http from "@/utils/http-common";
import { mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "Mainpage",
  },
  components: {
    VueperSlides,
    VueperSlide,
    Carousel3d,
    Slide
  },
  data() {
    return {
      isListView: false,
      // overlay data
      variant: 'white',
      opacity: 0.70,
      blur: '2px',
      slidesOverlayShow: false,
      slides: [],
      tmp1: [],
      tmp2 : [],
      rankList : [],
      friendsFeed: [],
      haveFriends: true,
    };
  },
  computed: {
    ...mapGetters(["defaultProfile"])
  },
  created() {
    this.getChallenges();
    this.getTopRankers();
    this.getFriendsRunning();
  },
  mounted() {
    this.$store.commit('closeSidebar')
  },
  methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar"]),
    convertToTime(origin) {
        var time = "";
        time += parseInt(origin/60) + "\'";
        time += (origin%60).toFixed() + "\"";
        return time;
    },
    toggleOverlay() {
      if(this.slidesOverlayShow)
        this.slidesOverlayShow = false;
      else
        this.slidesOverlayShow = true;
    },
    getChallenges() {
      http
        .get("challenges")
        .then(({data}) => {
          if(data.status==200){
            this.slides = data.data;
            console.log(this.slides);
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        });
      
    },
    getTopRankers() {
      http
        .get(`ranks/top/total`)
        .then(({data}) => {
          if(data.status == 200){
            this.rankList = data.data;
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        })
    },
    getFriendsRunning() {
      http
        .get(`runnings/friends`)
        .then(({data}) => {
          if(data.status == 200){
            let obj;
            // console.log(data.data);
            for(var i=0; i<data.data.friends.length; i++) {
              obj = new Object();
              if(data.data.runnings[i] == null) {
                obj.total_distance = 0;
                obj.running_avg_pace = 0;
                obj.accumulcated_time = 0;
                obj.mapImg = "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png";
              }else {
                obj.runningId = data.data.runnings[i].runningId;
                obj.total_distance = data.data.runnings[i].accDistance.toFixed(2);
                obj.accumulcated_time = data.data.runnings[i].accTime;
                obj.running_avg_pace = data.data.runnings[i].accTime / data.data.runnings[i].accDistance;
                obj.mapImg = data.data.runnings[i].thumbnail;
              }
              obj.userId = data.data.friends[i].userId;
              if(data.data.friends[i].profile==null){
                obj.profileImg = this.defaultProfile
              }else {
                obj.profileImg = data.data.friends[i].profile;
              }
              obj.title = data.data.friends[i].username;
              this.friendsFeed.push(obj);
            }
            if(this.friendsFeed.length == 0)
              this.haveFriends = false;
            
            // console.log(this.friendsFeed);
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        })
    }
  }
};
</script>
<style  scoped>

</style>
