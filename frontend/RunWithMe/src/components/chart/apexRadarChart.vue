<template>
   <b-row>
       <b-col  md="6" lg="4" sm="6">
            <b-card title="Basic Radar Chart" class=" mb-30">
                <div id="basicArea-chart">
                   
                    <apexchart type=radar height=365 :options="basicRadar.chartOptions" :series="basicRadar.series" />
                </div>
            </b-card>
        </b-col>
       <b-col  md="6" lg="4" sm="6">
            <b-card title="Basic Radar Chart" class=" mb-30">
                <div id="basicArea-chart">
                     <button class="btn btn-primary updateRadar">Update</button>
                    <apexchart type=radar height=335 :options="radarMultiSeries.chartOptions" :series="radarMultiSeries.series" />
                </div>
            </b-card>
        </b-col>
        <b-col  md="6" lg="4" sm="6">
            <b-card title="Basic Radar Chart" class=" mb-30">
                <div id="basicArea-chart">
                   
                    <apexchart type=radialBar height=365 :options="radarwithPolygonFill.chartOptions" :series="radarwithPolygonFill.series" />
                </div>
            </b-card>
        </b-col>
   </b-row>
</template>
<script>
import {
    basicRadar,
    radarMultiSeries,
    radarwithPolygonFill
} from '@/data/apexChart.js'

export default {
    data(){
        return{
            basicRadar,
            radarMultiSeries,
            radarwithPolygonFill
        }
    }
}
</script>
