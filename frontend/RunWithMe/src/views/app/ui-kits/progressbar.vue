<template>
  <div class="main-content">
    <breadcumb :page="'Progress Bar'" :folder="'UI Kits'" />

    <b-row class=" mb-30">
      <!-- left-side -->
      <b-col md="6">
        <b-row>
          <!-- start::basic-progressbar -->
          <b-col md="12" class=" mb-30">
            <b-card title="Basic Progress Bar">
              <h5>Default width</h5>
              <b-progress :value="value" class="mb-3"></b-progress>

              <h5>Custom widths</h5>
              <b-progress :value="value" class="w-75 mb-2"></b-progress>
              <b-progress :value="value" class="w-50 mb-2"></b-progress>
              <b-progress :value="value" class="w-25"></b-progress>
            </b-card>
          </b-col>
          <b-col md="12" class=" mb-30">
            <b-card title="Basic Progress Bar With diff. Background">
              <b-progress
                variant="success"
                :value="value"
                class="mb-3"
              ></b-progress>
              <b-progress
                variant="primary"
                :value="value"
                class="w-75 mb-2"
              ></b-progress>
              <b-progress
                variant="danger"
                :value="value"
                class="w-50 mb-2"
              ></b-progress>
              <b-progress
                variant="warning"
                :value="value"
                class="w-25"
              ></b-progress>
            </b-card>
          </b-col>

          <b-col md="12" class=" mb-30">
            <b-card title="Custom progress label">
              <h6>Custom label via default slot</h6>
              <b-progress :max="max" height="2rem">
                <b-progress-bar variant="danger" :value="value">
                  Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong>
                </b-progress-bar>
              </b-progress>

              <h6 class="mt-3">Custom label via property</h6>
              <b-progress :max="max">
                <b-progress-bar
                  variant="success"
                  :value="value"
                  :label="`${((value / max) * 100).toFixed(2)}%`"
                ></b-progress-bar>
              </b-progress>

              <h6 class="mt-3">Custom label via property (HTML support)</h6>
              <b-progress :max="max">
                <b-progress-bar
                  :value="value"
                  :label-html="`<del>${value}</del>`"
                ></b-progress-bar>
              </b-progress>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" class=" mb-30">
            <b-card title="Progres Bar Animated">
              <b-progress
                :value="changeValue"
                :max="max"
                show-progress
                animated
              ></b-progress>
              <b-progress class="mt-2" :max="changeMax" show-value>
                <b-progress-bar
                  :value="changeValue * (6 / 10)"
                  variant="success"
                ></b-progress-bar>
                <b-progress-bar
                  :value="changeValue * (2.5 / 10)"
                  variant="warning"
                ></b-progress-bar>
                <b-progress-bar
                  :value="changeValue * (1.5 / 10)"
                  variant="danger"
                ></b-progress-bar>
              </b-progress>

              <b-button class="mt-3" @click="rendomValue">Click me</b-button>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" class=" mb-30">
            <b-card title="Animated backgrounds">
             

              <b-progress
                :value="animatedValue"
                variant="success"
                striped
                :animated="animate"
              ></b-progress>
              <b-progress
                :value="animatedValue"
                variant="info"
                striped
                :animated="animate"
                class="mt-2"
              ></b-progress>
              <b-progress
                :value="animatedValue"
                variant="warning"
                striped
                :animated="animate"
                class="mt-2"
              ></b-progress>
              <b-progress
                :value="animatedValue"
                variant="danger"
                :animated="animate"
                class="mt-3"
              ></b-progress>

              <b-button
                variant="secondary"
                @click="animate = !animate"
                class="mt-3"
              >
                {{ animate ? "Stop" : "Start" }} Animation
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <!-- right-side -->
      <b-col md="6">
        <b-row>
          <b-col md="12" class=" mb-30">
            <b-card title="Basic Progress Bar With Labels">
              

              <h6>No label</h6>
              <b-progress :value="value" :max="max" class="mb-3"></b-progress>

              <h6>Value label</h6>
              <b-progress
                :value="value"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>

              <h6>Progress label</h6>
              <b-progress
                :value="value"
                :max="max"
                show-progress
                class="mb-3"
              ></b-progress>

              <h6>Value label with precision</h6>
              <b-progress
                :value="value"
                :max="max"
                :precision="2"
                show-value
                class="mb-3"
              ></b-progress>

              <h6>Progress label with precision</h6>
              <b-progress
                :value="value"
                :max="max"
                :precision="2"
                show-progress
                class="mb-3"
              ></b-progress>
            </b-card>
          </b-col>

          <b-col md="12" class=" mb-30">
            <b-card title="Solid background variants">
              <div v-for="(bar, key) in bars" :key="key" class="row mb-1">
                <div class="col-sm-3">{{ bar.variant }}:</div>
                <div class="col-sm-9 pt-1">
                  <b-progress
                    :value="bar.value"
                    :variant="bar.variant"
                    :key="bar.variant"
                  ></b-progress>
                </div>
              </div>
            </b-card>
          </b-col>

          <b-col md="12" class=" mb-30">
            <b-card title="Multiple bars">
              <b-progress :max="multipleMax" class="mb-3">
                <b-progress-bar
                  variant="primary"
                  :value="multipleValues[0]"
                ></b-progress-bar>
                <b-progress-bar
                  variant="danger"
                  :value="multipleValues[1]"
                ></b-progress-bar>
                <b-progress-bar
                  variant="warning"
                  :value="multipleValues[2]"
                ></b-progress-bar>
              </b-progress>

              <b-progress show-progress :max="multipleMax" class="mb-3">
                <b-progress-bar
                  variant="danger"
                  :value="multipleValues[0]"
                ></b-progress-bar>
                <b-progress-bar
                  variant="success"
                  :value="multipleValues[1]"
                ></b-progress-bar>
                <b-progress-bar
                  variant="dark"
                  :value="multipleValues[2]"
                ></b-progress-bar>
              </b-progress>

              <b-progress show-value striped :max="multipleMax" class="mb-3">
                <b-progress-bar
                  variant="info"
                  :value="multipleValues[0]"
                ></b-progress-bar>
                <b-progress-bar
                  variant="success"
                  :value="multipleValues[1]"
                ></b-progress-bar>
                <b-progress-bar
                  variant="danger"
                  :value="multipleValues[2]"
                ></b-progress-bar>
              </b-progress>

              <b-progress :max="multipleMax">
                <b-progress-bar
                  variant="primary"
                  :value="multipleValues[0]"
                  show-progress
                ></b-progress-bar>
                <b-progress-bar
                  variant="warning"
                  :value="multipleValues[1]"
                  animated
                  show-progress
                ></b-progress-bar>
                <b-progress-bar
                  variant="info"
                  :value="multipleValues[2]"
                  striped
                  show-progress
                ></b-progress-bar>
              </b-progress>
            </b-card>
          </b-col>
          <b-col md="12" class=" mb-30">
            <b-card title="Progressbar Height">
            
              <div>
                <h5>Default height</h5>
                <b-progress
                  :value="value"
                  show-progress
                  class="mb-3"
                ></b-progress>

                <h5>Custom heights</h5>
                <b-progress
                  variant="success"
                  striped
                  height="2rem"
                  :value="value"
                  show-progress
                  class="mb-2"
                ></b-progress>
                <b-progress
                  variant="danger"
                  animated
                  height="20px"
                  :value="value"
                  show-progress
                  class="mb-2"
                ></b-progress>
                <b-progress
                  variant="warning"
                  height="2px"
                  :value="value"
                ></b-progress>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "ProgressBar"
  },
  data() {
    return {
      animatedValue: 75,
      //   animated-background
      animate: true,
      //   basic-progressbar value
      value: 75,

      // custom-progress-label
      value: 33.333333333,
      max: 50,

      // solid-background-variants
      key: 1,
      bars: [
        { variant: "success", value: 75 },
        { variant: "info", value: 75 },
        { variant: "warning", value: 75 },
        { variant: "danger", value: 75 },
        { variant: "primary", value: 75 },
        { variant: "secondary", value: 75 },
        { variant: "dark", value: 75 }
      ],
      timer: null,

      // progressbar animated
      changeValue: 45,
      changeMax: 100,

      // multiple-bar
      multipleValues: [15, 30, 20],
      multipleMax: 100
    };
  },
  methods: {
    rendomValue() {
      this.changeValue = Math.random() * this.max;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>