<template>
  <div class="main-content">
    <h3>기부/이벤트</h3>
    <vueper-slides
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
    </vueper-slides>
    <h3>TOP RANK</h3>
    <carousel-3d :width="150" :height="200">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <img :src="slide.img" />
        <!-- <span class="title">You know</span>
        <p>You know, being a test pilot isn't always the healthiest business in the world.</p> -->
      </slide>
    </carousel-3d>
    <b-col lg="6" xl="6" md="12" class="mb-30">
      <b-card class>
        <div class="card-title">Top Authors</div>
        <div
          class="d-flex flex-column flex-md-row text-center text-md-left text-lg-left flex-lg-row align-items-center border-bottom-dotted-dim pb-3 mb-3"
        >
          <img class="avatar-md rounded mr-md-3 mb-2" src="@/assets/images/faces/2.jpg" alt />
            <div class="flex-grow-1">
              <h6 class="m-0">David Hopkins</h6>
              <p class="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-rounded btn-sm mt-md-0 mt-2">Follow</button>
            </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row text-center text-md-left text-lg-left flex-lg-row align-items-center border-bottom-dotted-dim pb-3 mb-3"
        >
          <img class="avatar-md rounded mr-md-3 mb-2" src="@/assets/images/faces/3.jpg" alt />
            <div class="flex-grow-1">
              <h6 class="m-0">James Mitchell</h6>
              <p class="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-rounded btn-sm mt-md-0 mt-2">Follow</button>
            </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row text-center text-md-left text-lg-left flex-lg-row align-items-center border-bottom-dotted-dim mb-3"
        >
          <img class="avatar-md rounded mr-md-3 mb-2" src="@/assets/images/faces/4.jpg" alt />
            <div class="flex-grow-1">
              <h6 class="m-0">Jessica Mitchell</h6>
              <p class="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button class="btn btn-outline-primary btn-rounded btn-sm mt-md-0 mt-2">Follow</button>
            </div>
        </div>
      </b-card>
    </b-col>
    <b-col xl="8" lg="8" class="mb-30">
        <b-card
          border-variant="primary"
          header="Developers"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <div class="ul-widget5">
            <div class="ul-widget-s5__item mb-5">
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__pic">
                  <img
                    src="@/assets/images/faces/1.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget-s5__section">
                  <a href="#" class="ul-widget4__title ">
                    Great Logo Designn
                  </a>
                  <p class="ul-widget-s5__desc">
                    UI LIb admin themes.
                  </p>
                </div>
              </div>
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__progress">
                  <div class="ul-widget-s5__stats">
                    <span>50%</span>
                    <span>London</span>
                  </div>
                  <b-progress
                    :value="25"
                    show-value
                    variant="success"
                    striped
                    animated
                  ></b-progress>
                </div>
                <b-button variant="outline-primary">
                  Follow
                </b-button>
              </div>
            </div>
            <div class="ul-widget-s5__item mb-5">
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__pic">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget-s5__section">
                  <a href="#" class="ul-widget4__title ">
                    Great Logo Designn
                  </a>
                  <p class="ul-widget-s5__desc">
                    UI LIb admin themes.
                  </p>
                </div>
              </div>
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__progress">
                  <div class="ul-widget-s5__stats">
                    <span>75%</span>
                    <span>U.S</span>
                  </div>
                  <b-progress
                    :value="75"
                    show-value
                    variant="danger"
                    striped
                    animated
                  ></b-progress>
                </div>
                <b-button variant="outline-success">
                  Follow
                </b-button>
              </div>
            </div>
            <div class="ul-widget-s5__item mb-5">
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__pic">
                  <img
                    src="@/assets/images/faces/3.jpg"
                    id="userDropdown"
                    alt=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                </div>
                <div class="ul-widget-s5__section">
                  <a href="#" class="ul-widget4__title ">
                    Frontend Developer
                  </a>
                  <p class="ul-widget-s5__desc">
                    UI LIb admin themes.
                  </p>
                </div>
              </div>
              <div class="ul-widget-s5__content">
                <div class="ul-widget-s5__progress">
                  <div class="ul-widget-s5__stats">
                    <span>30%</span>
                    <span>Finland</span>
                  </div>
                  <b-progress
                    :value="30"
                    show-value
                    variant="warning"
                    striped
                    animated
                  ></b-progress>
                </div>

                <b-button variant="outline-danger">
                  Follow
                </b-button>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    <h3>친구 피드 시작</h3>
    <!-- <b-col xl="3" md="6" sm="6"> -->
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <img src="https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png"
            style="height:100%; width:50%;" />
          <div class="content">
            <b-avatar class="mr-2" variant="primary" text="BV"></b-avatar>
            <p class="text-muted mt-2 mb-0">New Leads</p>
            <p class="text-primary text-24 line-height-1 mb-2">205</p>
          </div>
        </b-card>
      <!-- </b-col> -->
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

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
      slides: [
        {
          img : require('@/assets/images/photo-long-1.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-2.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-3.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-4.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-1.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-2.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-3.jpg'),
        },
        {
          img : require('@/assets/images/photo-long-4.jpg'),
        },
      ],
    };
  },
  created() {

  },
  mounted() {
    
  },
  methods: {

  }
};
</script>
<style  scoped>

</style>