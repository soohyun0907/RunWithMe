<template>
    <b-row>
         <b-col md="6">
              <b-card title="Basic line chart(Product Trends by Month)" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=line height=350 :options="basicLineChart.chartOptions" :series="basicLineChart.series" />
                  </div>
              </b-card>             
          </b-col>
          <b-col md="6">
                <b-card title="Line with data Label(Average High & Low Temperature)" class=" mb-30">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart type=line height=350 :options="lineChartWIthDataLabel.chartOptions" :series="lineChartWIthDataLabel.series" />
                    </div>
                </b-card>
          </b-col>
          <b-col md="6">
                <b-card title="Zoomable timeseries chart(Stock Price Movement)" class=" mb-30">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <!-- <apexchart type=line height=350 :options="zoomableLineChart.chartOptions" :series="zoomableLineChart.series" /> -->
                    </div>
                </b-card>
          </b-col>
          <b-col md="6">
                <b-card title="Gradient Line Chart(Social Media)" class=" mb-30">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart type=line height=350 :options="gradientLineChart.chartOptions" :series="gradientLineChart.series" />
                    </div>
                </b-card>
          </b-col>
          <b-col md="6">
                <b-card title="Real time Line chart(Dynamic Updating Chart)" class=" mb-30">
                    <div id="basicArea-chart" style="min-height: 365px">
                       
                    </div>
                </b-card>
          </b-col>
          <b-col md="6">
                <b-card title="Dashed Line Chart(Page Statistics)" class=" mb-30">
                    <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=line height=350 :options="dashedLineChart.chartOptions" :series="dashedLineChart.series" />
                    </div>
                </b-card>
          </b-col>
          <b-col md="6">
                <b-card title="Brush Line chart" class=" mb-30">
                    <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=line height=350 :options="brushLineChart.chartOptions" :series="brushLineChart.series" />
                    </div>
                </b-card>
          </b-col>
          
    </b-row>
</template>
<script>
import {
    basicLineChart,
    lineChartWIthDataLabel,
    zoomableLineChart,
    gradientLineChart,
    dashedLineChart,
    brushLineChart
} from '@/data/apexChart'


export default {
    data(){
        return{
            basicLineChart,
            lineChartWIthDataLabel,
            zoomableLineChart,
            gradientLineChart,
            dashedLineChart,
            brushLineChart,
            
        }
    },
    methods:{
         
    }
}
</script>
