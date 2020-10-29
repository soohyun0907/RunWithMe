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
                {{ranker.accumulcated_distance}} KM
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

const items = [
  {
    img: "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png",
    title: "Nickname",
    total_distance: "8",
    running_avg_pace : 325,
    accumulcated_time: "38:11"
  },
  {
    img: "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png",
    title: "Nickname",
    total_distance: "10",
    running_avg_pace : 325,
    accumulcated_time: "38:11"
  },
  {
    img: "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png",
    title: "Nickname",
    total_distance: "5",
    running_avg_pace : 325,
    accumulcated_time: "38:11"
  },
];

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
      items: items,
      isListView: false,
      // overlay data
      variant: 'white',
      opacity: 0.70,
      blur: '2px',
      slidesOverlayShow: false,
      slides: [
        {
          title : "challenge 1",
          img : require('@/assets/images/photo-long-1.jpg'),
        },
        {
          title : "challenge 2",
          img : require('@/assets/images/photo-long-2.jpg'),
        },
        {
          title : "challenge 3",
          img : require('@/assets/images/photo-long-3.jpg'),
        },
        {
          title : "challenge 4",
          img : require('@/assets/images/photo-long-4.jpg'),
        },
        {
          title : "challenge 5",
          img : require('@/assets/images/photo-long-1.jpg'),
        },
        {
          title : "challenge 6",
          img : require('@/assets/images/photo-long-2.jpg'),
        },
        {
          title : "challenge 7",
          img : require('@/assets/images/photo-long-3.jpg'),
        },
        {
          title : "challenge 8",
          img : require('@/assets/images/photo-long-4.jpg'),
        },
      ],
      rankList : [
        {
          id: 1,
          nickname: "Timothy Carlson",
          imgUrl: "/img/1.jpg",
          accumulcated_distance: 120,
        },
        {
          id: 2,
          nickname: "Jaret Leto",
          imgUrl: "/img/2.jpg",
          accumulcated_distance: 100,
        },
        {
          id: 3,
          nickname: "Kim",
          imgUrl: "/img/3.jpg",
          accumulcated_distance: 95,
        },
        {
          id: 4,
          nickname: "Lee",
          imgUrl: "/img/4.jpg",
          accumulcated_distance: 80,
        },
        {
          id: 5,
          nickname: "Lee",
          imgUrl: "/img/4.jpg",
          accumulcated_distance: 80,
        },
      ]
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    convertToTime(origin){
        var time = "";
        time += parseInt(origin/60) + "\'";
        time += origin%60 + "\"";
        return time;
    },
    toggleOverlay(){
      if(this.slidesOverlayShow)
        this.slidesOverlayShow = false;
      else
        this.slidesOverlayShow = true;
    }
  }
};
</script>
<style  scoped>

</style>