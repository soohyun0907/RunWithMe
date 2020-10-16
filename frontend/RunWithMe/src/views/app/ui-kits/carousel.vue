    <template>
  <div class="main-content">
    <breadcumb :page="'Carousel'" :folder="'Ui-Kits'" />

    <b-row>
      <b-col md="6" class="mb-30">
        <b-card title="Basic Carousel With Control">
          <div class="carousel_wrap">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              >
              </b-carousel-slide>
              <!-- Text slides with image -->
              <b-carousel-slide
                :img-src="require('@/assets/images/products/headphone-1.jpg')"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              >
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" class="mb-30">
        <b-card title="Carousel With Indicators">
          <div class="carousel_wrap">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                :img-src="require('@/assets/images/products/headphone-1.jpg')"
              >
              </b-carousel-slide>

              <b-carousel-slide
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              >
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" class="mb-30">
        <b-card title="Carousel With Caption">
          <div class="carousel_wrap">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="2000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 0px 0px 2px #fff"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                caption="First slide"
                text="first slide to b-carousel-slide"
                :img-src="require('@/assets/images/products/headphone-1.jpg')"
              >
              </b-carousel-slide>

              <b-carousel-slide
                caption="Second slide"
                text="first slide to b-carousel-slide"
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              >
                <h2 class="text-white">Third Slide</h2>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" class="mb-30">
        <b-card title="Carousel With Crossfade animation">
          <div class="carousel_wrap">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              fade
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 0px 0px 2px #fff"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                text="first slide to b-carousel-slide"
                :img-src="require('@/assets/images/products/headphone-1.jpg')"
              >
              </b-carousel-slide>

              <b-carousel-slide
                text="first slide to b-carousel-slide"
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide
                :img-src="require('@/assets/images/products/iphone-1.jpg')"
              >
                <h2 class="text-white">Third Slide</h2>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
    <script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Carousel"
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>