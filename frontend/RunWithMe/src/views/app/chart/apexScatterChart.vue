<template>
  <div class="main-content">
    <breadcumb :page="'Apexscatter'" :folder="'Chart'" />
    <b-row>
      <b-col md="12" lg="6" sm="6">
        <b-card title="Simple Scatter Chart" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="scatter"
              height="350"
              :options="simpleScatter.chartOptions"
              :series="simpleScatter.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="12" lg="6" sm="6">
        <b-card title="Scatter – Datetime Chart" class=" mb-30">
          <div id="basicArea-chart">
            <apexchart
              type="scatter"
              height="350"
              :options="scatterDatetime.chartOptions"
              :series="scatterDatetime.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { simpleScatter, scatterDatetime } from "@/data/apexChart.js";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Scatter Charts"
  },
  data() {
    return {
      simpleScatter,
      scatterDatetime
    };
  }
};
</script>
