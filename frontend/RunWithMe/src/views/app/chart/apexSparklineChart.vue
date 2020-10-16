<template>
  <div class="main-content">
    <breadcumb :page="'ApexSparkline'" :folder="'Chart'" />
    <b-row>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="area"
              height="160"
              :options="spark1.chartOptions"
              :series="spark1.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="area"
              height="160"
              :options="spark2.chartOptions"
              :series="spark2.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="area"
              height="160"
              :options="spark3.chartOptions"
              :series="spark3.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="line"
              height="160"
              :options="spark4.chartOptions"
              :series="spark4.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30 o-hidden">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="line"
              height="160"
              :options="spark5.chartOptions"
              :series="spark5.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="line"
              height="160"
              :options="spark6.chartOptions"
              :series="spark6.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="line"
              height="160"
              :options="spark7.chartOptions"
              :series="spark7.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="bar"
              height="160"
              :options="spark7.chartOptions"
              :series="spark7.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="bar"
              height="160"
              :options="spark8.chartOptions"
              :series="spark8.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="bar"
              height="160"
              :options="spark9.chartOptions"
              :series="spark9.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="3">
        <b-card no-body title="" class=" mb-30">
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="bar"
              height="160"
              :options="spark10.chartOptions"
              :series="spark10.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  spark1,
  spark2,
  spark3,
  spark4,
  spark5,
  spark6,
  spark7,
  spark8,
  spark9,
  spark10
} from "@/data/apexChart";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Sparkline Charts"
  },
  data() {
    return {
      spark1,
      spark2,
      spark3,
      spark4,
      spark5,
      spark6,
      spark7,
      spark8,
      spark9,
      spark10
    };
  },
  methods: {}
};
</script>
