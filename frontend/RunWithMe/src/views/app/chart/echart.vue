<template>
  <div class="main-content">
    <breadcumb :page="'echart'" :folder="'Chart'" />
    <b-row>
      <b-col lg="8" md="12" sm="12">
        <b-card title="This Year Sales" class="mb-30">
          <div class="chart-wrapper" style="height: 300px ; width:100% ">
            <v-chart
              id="echartbar"
              :options="echartBar"
              :autoresize="true"
            ></v-chart>
          </div>
        </b-card>
      </b-col>

      <b-col lg="4" md="12" sm="12">
        <b-card title="Sales by Countries" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px ; width:100%">
            <v-chart :options="echartPie" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6" md="12">
        <b-card title="Basic Line" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px ; width:100%">
            <v-chart :options="basicLine" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6" md="12">
        <b-card title="Multi Line" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px ; width:100%">
            <v-chart :options="multiLine" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6" md="12">
        <b-card title="Basic Bar Chart" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="basicBar" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6" md="12">
        <b-card title="Multiple Bar chart" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="multipleBar" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6" md="12">
        <b-card title="Multiple Bar chart 2" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="multipleBar2" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>

      <b-col lg="6" md="12">
        <b-card title="Basic Area" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="basicArea" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <!-- <b-col lg="6" md="12">
        <b-card title="gauge Start" class=" mb-30">
          <div class="chart-wrapper" style="height: 400px">
            <v-chart :options="gaugeStart" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col> -->
      <b-col lg="6" md="12">
        <b-card title="Basic Doughnut" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="basicDoughnut" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>

      <b-col lg="6" md="12">
        <b-card title="Stacked Area Chart" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="stackedArea" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <!-- <b-col lg="6" md="12">
        <b-card title="Stacked Area Chart with Pointer" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="stackedPointerArea" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col> -->
      <b-col lg="6" md="12">
        <b-card title="Solid Area" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="solidArea" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <b-col lg="6" md="12">
        <b-card title="Basic Pie Chart" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="basicPie" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
      <!-- <b-col lg="6" md="12">
        <b-card title="Stacked Pie Chart" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="stackedPie" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col> -->
      <!-- <b-col lg="12" md="12">
        <b-card title="Bubble Chart" class=" mb-30">
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="bubbleChart" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col> -->
    </b-row>
  </div>
</template>

<script>
import {
  echartPie,
  echartBar,
  basicLine,
  multiLine,
  basicBar,
  multipleBar,
  multipleBar2,
  zoomBar,
  basicDoughnut,
  gaugeStart,
  basicArea,
  stackedArea,
  stackedPointerArea,
  solidArea,
  basicPie,
  stackedPie,
  bubbleChart
} from "@/data/echarts";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "E-Charts"
  },
  data: () => ({
    echartPie,
    echartBar,
    basicLine,
    multiLine,
    basicBar,
    multipleBar,
    multipleBar2,
    zoomBar,
    basicDoughnut,
    gaugeStart,
    basicArea,
    stackedArea,
    stackedPointerArea,
    solidArea,
    basicPie,
    stackedPie,
    bubbleChart
  }),
  methods: {}
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
// .card-title {
//   margin-bottom: 0px !important;
// }
</style>

