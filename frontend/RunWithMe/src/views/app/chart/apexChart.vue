<template>
  <div class="main-content">
    <breadcumb :page="'Apexchart'" :folder="'Chart'" />
    <b-row>
      <b-col md="6">
        <b-card
          title="Basic Area chart(Fundamental Analysis of Stocks)"
          class=" mb-30"
        >
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="area"
              height="350"
              :options="basicArea.chartOptions"
              :series="basicArea.chartOptions.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Spline Area" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="area"
              height="350"
              :options="splineArea.chartOptions"
              :series="splineArea.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Datetime X-Axis" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="area"
              height="350"
              :options="dateTimeXaxis.chartOptions"
              :series="dateTimeXaxis.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Area with Negative Values" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="area"
              height="350"
              width="100%"
              :options="negativeArea.chartOptions"
              :series="negativeArea.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Stacked Area" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="area"
              height="350"
              :options="stackedArea.chartOptions"
              :series="stackedArea.chartOptions.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          title="Missing / Null values Area Chart(Network Monitoring)"
          class=" mb-30"
        >
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="area"
              height="350"
              :options="nullAreaChart.chartOptions"
              :series="nullAreaChart.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  apexDemo,
  basicArea,
  splineArea,
  dateTimeXaxis,
  negativeArea,
  stackedArea,
  nullAreaChart
} from "@/data/apexChart";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Area Charts"
  },
  data() {
    return {
      name: "apexChart",
      apexDemo,
      basicArea,
      splineArea,
      dateTimeXaxis,
      negativeArea,
      stackedArea,
      nullAreaChart
    };
  },
  methods: {}
};
</script>

