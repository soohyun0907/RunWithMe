<template>
    <b-row>
        <b-col md="6">
            <b-card title="Basic Column chart" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=bar height=350 :options="basicColumnChart.chartOptions" :series="basicColumnChart.series" />
                </div>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card title="Column with Data Labels" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=bar height=350 :options="columnDataLabels.chartOptions" :series="columnDataLabels.series" />
                </div>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card title="Stacked Columns" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=bar height=350 :options="stackedColumn.chartOptions" :series="stackedColumn.series" />
                </div>
            </b-card>
        </b-col>
        <b-col  md="6">
              <b-card title="Column with Negative Values" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=bar height=350 :options="negativeColumn.chartOptions" :series="negativeColumn.series" />
                  </div>
              </b-card>
          </b-col>
        <b-col  md="6">
              <b-card title="Distributed Columns" class=" mb-30">
                  <div id="basicArea-chart" style="min-height: 365px">
                       <apexchart type=bar height=350 :options="distributedColumnChart.chartOptions" :series="distributedColumnChart.series" />
                  </div>
              </b-card>
          </b-col>
       
    </b-row>
</template>
<script>
import {
        basicColumnChart,
        columnDataLabels,
        stackedColumn,
        negativeColumn,
        distributedColumnChart
        
    } from '@/data/apexChart'


export default {
    data(){
        return{
            basicColumnChart,
            columnDataLabels,
            stackedColumn,
            negativeColumn,
            distributedColumnChart
            
        }
    }
}
</script>
