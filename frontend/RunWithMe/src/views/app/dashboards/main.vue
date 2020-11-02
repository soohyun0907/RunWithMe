<template>
  <div class="main-content">
    <h3>기부/이벤트</h3>
    <carousel-3d :width="180" :height="250">
      <slide v-for="(slide, i) in slides" :index="i" :key="i" style="border: 0px;">
        <div @click="toggleOverlay">
          <b-overlay 
          :show="slidesOverlayShow" 
          :variant="variant"
          :opacity="opacity"
          :blur="blur"
          rounded="sm">
            <img :src="slide.img" />
            <template #overlay>
              <div class="text-center">
                <h3>{{slide.title}}</h3>
                <h5>StartDate ~ EndDate</h5>
              </div>
            </template>
          </b-overlay>
          <h3 v-if="slidesOverlayShow">title</h3>
        </div>
      </slide>
    </carousel-3d>
    <!-- <vueper-slides
      class="no-shadow"
      :visible-slides="2.5"
      :arrows="false"
      :slide-ratio="1 / 4"
      :gap="3"
      :dragging-distance="0"
      fixedHeight="150px"
      prevent-y-scroll>
      <vueper-slide v-for="(slide, i) in slides" :index="i" :key="i"
        :image="slide.img" />
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
          <div class="ul-widget__item ul-widget4__users" v-for="ranker in rankList" :key="ranker.id">
            <!-- <div > -->
              <h5 style="margin-right:5px;">{{ ranker.id }} </h5>
              <div class="ul-widget4__img">
                <img
                  :src="ranker.imgUrl"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
              <div class="ul-widget2__info ul-widget4__users-info">
                <router-link :to="`/app/runnings/friendsDetail`">
                <!-- <a href="#" class="ul-widget2__title"> -->
                  {{ranker.nickname}}
                </router-link>
                <!-- </a> -->
              </div>
              <span class="ul-widget4__number t-font-boldest text-success">
                {{ranker.totalExp}} p
              </span>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </b-card>
    <hr>
    <h3>친구 피드 시작</h3>
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
        v-for="(item, index) in items"
        transition="list"
      >
        <router-link :to="`/app/runnings/runningResult`">
        <div
          class="card o-hidden mb-30 d-flex "
          :class="{ 'flex-column': isListView, 'flex-row': !isListView }"
        >
          <div class="list-thumb d-flex">
            <img :src="item.img" />
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
                  <b-avatar class="mr-2" variant="info" src="/img/2.jpg"></b-avatar>
                    {{ item.title }}
                </div>
              </a>
              <br>
              <!-- <p class="m-0 text-muted text-small w-15 w-sm-100">
                총 킬로미터 평균페이스 총 런닝 시간
              </p> -->
              <p class="m-0 text-muted text-small w-15 w-sm-100">
                {{ item.total_distance }}KM /
                {{convertToTime(item.running_avg_pace)}} /
                {{item.accumulcated_time}}
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
import { mapGetters } from "vuex";

export default {
  name: 'mainpage',
  components: {
    VueperSlides,
    VueperSlide,
    Carousel3d,
    Slide
  },
  data() {
    return {
      // items: items,
      isListView: false,
      // overlay data
      variant: 'white',
      opacity: 0.70,
      blur: '2px',
      slidesOverlayShow: false,
      slides: [],
      rankList : [],
      items: [],
    };
  },
  created() {
    this.getChallenges();
    this.getTopRankers();
    this.getFriendsRunning();
  },
  mounted() {

  },
  methods: {
    convertToTime(origin) {
        var time = "";
        time += parseInt(origin/60) + "\'";
        time += origin%60 + "\"";
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
        .get(`challenges/ing`, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(res => {
          console.log(res)
          console.log(res.data.data.length)
          let obj;
          for(var i=0; i<res.data.data.length; i++) {
            obj = new Object();
            obj.title = res.data.data[i].title;
            obj.img = res.data.data[i].challengeImg;
            this.slides.push(obj);
          }
          console.log(this.slides);
        });
    },
    getTopRankers() {
      http
        .get(`ranks/top/total`, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(res => {
          console.log(res)
          let obj;
          for(var i=0; i<res.data.data.length; i++) {
            obj = new Object();
            obj.id = i+1;
            obj.userId = res.data.data[i].userId.userId;
            obj.nickname = res.data.data[i].userId.userEmail;
            obj.imgUrl = res.data.data[i].userId.imgUrl;
            obj.totalExp = res.data.data[i].totalExp;
            this.rankList.push(obj);
          }
          console.log(this.rankList);

        });
    },
    getFriendsRunning() {
      http
        .get(`runnings/friends`, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(res => {
          console.log(res)
          let obj;
          for(var i=0; i<res.data.data.friends.length; i++) {
            obj = new Object();
            if(res.data.data.runnings[i] == null) {
              obj.total_distance = "기록이 없습니다";
            }else {
              obj.runningId = res.data.data.runnings[i].runningId;
              obj.total_distance = res.data.data.runnings[i].accDistance;
              obj.accumulcated_time = res.data.data.runnings[i].accTime;
              obj.running_avg_pace = obj.accumulcated_distance / obj.total_distance;
            }
            obj.userId = res.data.data.friends[i].userId;
            obj.img = res.data.data.friends[i].profile;
            obj.title = res.data.data.friends[i].username;
            this.items.push(obj);
          }
          console.log(this.items);
        });
    }
  }
};
</script>
<style  scoped>

</style>