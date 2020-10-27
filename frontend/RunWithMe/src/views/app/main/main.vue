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
      <vueper-slide v-for="i in 5" :key="i" :title="i.toString()"
        :image="require('@/assets/images/photo-long-1.jpg')" />
    </vueper-slides>

    <carousel-3d :width="150" :height="200">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <img src="@/assets/images/photo-long-1.jpg" />
        <span class="title">You know</span>
        <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
      </slide>
    </carousel-3d>
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
      slides: 7
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