<template>
   <div>
      <b-row>
        <!-- <b-col col md="6">
          <b-card title="Basic Area" class=" mb-30">
            <div id="basicArea-chart" style="min-height: 365px">
               <apexchart width="100%" height="300px" type="bar" :options="apexDemo.chartOptions" :series="apexDemo.series"></apexchart>
            </div>
          </b-card>
        </b-col> -->
          <b-col  md="6">
              <b-card title="Basic Area chart(Fundamental Analysis of Stocks)" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                      <apexchart type=area height=350 :options="basicArea.chartOptions" :series="basicArea.chartOptions.series" />
                  </div>
              </b-card>
          </b-col>
          <b-col  md="6">
              <b-card title="Spline Area" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                      <apexchart type=area height=350 :options="splineArea.chartOptions" :series="splineArea.series" />
                  </div>
              </b-card>
          </b-col>
          <b-col  md="6">
              <b-card title="Datetime X-Axis" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                      <apexchart type=area height=350 :options="dateTimeXaxis.chartOptions" :series="dateTimeXaxis.series" />
                  </div>
              </b-card>
          </b-col>
          <b-col  md="6">
              <b-card title="Area with Negative Values" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=area height=350 width="100%" :options="negativeArea.chartOptions" :series="negativeArea.series" />
                  </div>
              </b-card>
          </b-col>
          <b-col  md="6">
              <b-card title="Stacked Area" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=area height=350 :options="stackedArea.chartOptions" :series="stackedArea.chartOptions.series" />
                  </div>
              </b-card>
          </b-col>
          <b-col  md="6">
              <b-card title="Missing / Null values Area Chart(Network Monitoring)" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=area height=350 :options="nullAreaChart.chartOptions" :series="nullAreaChart.series" />
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
         nullAreaChart,
         series
         

        } from '@/data/apexChart'

export default {
  data(){
   
    return{
      
      apexDemo,
      basicArea,
      splineArea,
      dateTimeXaxis,
      negativeArea,
      stackedArea,
      nullAreaChart,
      series
      
      
    }
    
  },
  methods:{
 
  }
}
</script>

