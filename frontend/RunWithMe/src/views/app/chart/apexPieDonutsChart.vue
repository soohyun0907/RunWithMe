<template>
  <div class="main-content">
    <breadcumb :page="'Apexpiedonutschart'" :folder="'Chart'" />
    <b-row>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Simple Pie" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="pie"
              width="100%"
              :options="simplePie.chartOptions"
              :series="simplePie.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Simple Donut" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="donut"
              width="100%"
              :options="simpleDonut.chartOptions"
              :series="simpleDonut.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Monochrome Pie(Number of leads)" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="pie"
              width="100%"
              :options="monochromePie.chartOptions"
              :series="monochromePie.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Gradient Donut" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="donut"
              width="100%"
              :options="gradientDonut.chartOptions"
              :series="gradientDonut.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" sm="6">
        <b-card title="Donut with Pattern(Favourite Movie Type)" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="donut"
              width="100%"
              :options="donutwithPattern.chartOptions"
              :series="donutwithPattern.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  simplePie,
  simpleDonut,
  monochromePie,
  gradientDonut,
  donutwithPattern
} from "@/data/apexChart.js";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Pie/Donut Charts"
  },
  data() {
    return {
      simplePie,
      simpleDonut,
      monochromePie,
      gradientDonut,
      donutwithPattern
    };
  }
};
</script>
