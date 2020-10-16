<template>
  <div class="main-content">
    <breadcumb :page="'Apexbarchart'" :folder="'Chart'" />

    <b-row>
      <b-col md="6">
        <b-card title="Basic Bar chart" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="basicBarChart.chartOptions"
              :series="basicBarChart.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Grouped Bar" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="groupedBar.chartOptions"
              :series="groupedBar.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Stacked Bars(Fiction Books Sales)" class=" mb-30">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="stackedbar.chartOptions"
              :series="stackedbar.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          title="Bar with Negative Values(Mauritius population pyramid 2011)"
          class=" mb-30"
        >
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="negativeBar.chartOptions"
              :series="negativeBar.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          title="Bar with Negative Values(Mauritius population pyramid 2011)"
          class=" mb-30"
        >
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="customDataLabelBar.chartOptions"
              :series="customDataLabelBar.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          title="Bar with Negative Values(Mauritius population pyramid 2011)"
          class=" mb-30"
        >
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="patternedBar.chartOptions"
              :series="patternedBar.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  basicBarChart,
  groupedBar,
  stackedbar,
  negativeBar,
  customDataLabelBar,
  patternedBar
} from "@/data/apexChart";
export default {
            metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Apex- Bar Charts"
    },
  data() {
    return {
      name: "apexBarChart",
      basicBarChart,
      groupedBar,
      stackedbar,
      negativeBar,
      customDataLabelBar,
      patternedBar
    };
  }
};
</script>
