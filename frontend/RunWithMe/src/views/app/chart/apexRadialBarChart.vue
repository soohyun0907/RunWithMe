<template>
  <div class="main-content">
    <breadcumb :page="'Apexradialbarchart'" :folder="'Chart'" />
    <b-row>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Simple Radial Bar" class=" mb-30">
          <div id="basicArea-chart">
            <!-- <apexchart type=radar height=365 :options="simpleRadialBar.chartOptions" :series="simpleRadialBar.series" /> -->
            <apexchart
              type="radialBar"
              height="350"
              :options="simpleRadialBar.chartOptions"
              :series="simpleRadialBar.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Multiple Radial Bar" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="multipleRadialBar.chartOptions"
              :series="multipleRadialBar.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Custom Angle Circle Chart" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="customAngleCircleChart.chartOptions"
              :series="customAngleCircleChart.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Gradient Radial Bar" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="gradientRadial.chartOptions"
              :series="gradientRadial.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Stroked Angular Gauge" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="415"
              :options="strokedangularGauge.chartOptions"
              :series="strokedangularGauge.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Stroked Angular Gauge" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="semiCircleGauge.chartOptions"
              :series="semiCircleGauge.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  simpleRadialBar,
  multipleRadialBar,
  customAngleCircleChart,
  gradientRadial,
  strokedangularGauge,
  semiCircleGauge
} from "@/data/apexChart.js";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Radial Bar Charts"
  },
  data() {
    return {
      simpleRadialBar,
      multipleRadialBar,
      customAngleCircleChart,
      gradientRadial,
      strokedangularGauge,
      semiCircleGauge
    };
  }
};
</script>
