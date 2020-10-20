<template>
  <div class="main-content">
    <breadcumb :page="'No ui SLider'" :folder="'UI Kits'" />
    <b-row>
      <b-col md="6">
        <b-card title="Single Slider">
          <b-card-text class="text-muted">Basic</b-card-text>
          <vue-slider class="gull-slider"></vue-slider>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Custom Slider">
          <b-card-text class="text-muted">Custom Slider With Slots</b-card-text>

          <vue-slider
            v-model="value"
            :tooltip="'none'"
            :process-style="{ backgroundColor: '#639' }"
            :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }"
          >
            <template v-slot:dot="{ value, focus }">
              <div :class="['custom-dot', { focus }]" class="noUi-handle"></div>
            </template>
          </vue-slider>
        </b-card>
      </b-col>
      <!-- <b-col md="6" class="mt-4">
                <b-card title="Multiple Sliders">
                    <div>
                        <div class=" mb-30">
                            <vue-slider v-model="value_2"
                                :process-style="{ backgroundColor: '#639' }">

                            </vue-slider>
                        </div>
                        <div class=" mb-30">
                            <vue-slider v-model="value_3"></vue-slider>
                        </div>
                        <div class=" mb-30">
                            <vue-slider v-model="value_4"></vue-slider>
                        </div>
                    </div>
                </b-card>
            </b-col> -->
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Sliders"
  },
  data() {
    return {
      value: 0,
      value_2: [0, 50],
      value_3: [0, 50, 80],
      value_4: [0, 50, 80, 100]
    };
  }
};
</script>

<style>
.custom-dot {
  width: 15px !important;
  height: 15px !important;
  left: -5px !important;
  top: -5px !important;
  border-radius: 50%;
  border: 5px solid #639;
  box-shadow: none;
  cursor: pointer;
  background: #fff;
}
.custom-dot:hover {
  transform: rotateZ(45deg);
}
.custom-dot.focus {
  border-radius: 50%;
}
</style>