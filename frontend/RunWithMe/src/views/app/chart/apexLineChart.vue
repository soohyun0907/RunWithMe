<template>
  <div class="main-content">
    <breadcumb :page="'Apexlinechart'" :folder="'Forms'" />
    <b-row>
      <b-col md="12" lg="6">
        <b-card title="Basic line chart(Product Trends by Month)" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="line"
              height="350"
              :options="basicLineChart.chartOptions"
              :series="basicLineChart.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="12" lg="6">
        <b-card
          title="Line with data Label(Average High & Low Temperature)"
          class=" mb-30"
        >
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="line"
              height="350"
              :options="lineChartWIthDataLabel.chartOptions"
              :series="lineChartWIthDataLabel.series"
            />
          </div>
        </b-card>
      </b-col>

      <b-col md="12" lg="6">
        <b-card title="Gradient Line Chart(Social Media)" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="line"
              height="350"
              :options="gradientLineChart.chartOptions"
              :series="gradientLineChart.series"
            />
          </div>
        </b-card>
      </b-col>

      <b-col md="12" lg="6">
        <b-card title="Dashed Line Chart(Page Statistics)" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="line"
              height="350"
              :options="dashedLineChart.chartOptions"
              :series="dashedLineChart.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="12" lg="6">
        <b-card title="Brush Line chart" class=" mb-30">
          <div id="chart1">
            <apexchart
              type="line"
              height="230"
              :options="brushLineChart.chartOptionsArea"
              :series="brushLineChart.series"
            />
          </div>
          <div id="chart2">
            <apexchart
              type="area"
              height="130"
              :options="brushLineChart.chartOptionsBrush"
              :series="brushLineChart.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  basicLineChart,
  lineChartWIthDataLabel,
  gradientLineChart,
  dashedLineChart,
  brushLineChart
} from "@/data/apexChart";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Line Charts"
  },
  data() {
    return {
      basicLineChart,
      lineChartWIthDataLabel,

      gradientLineChart,
      dashedLineChart,
      brushLineChart
    };
  }
};
</script>
