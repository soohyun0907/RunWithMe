<template>
    <b-row>
        <b-col  md="6" lg="6" sm="6">
            <b-card title="Simple Scatter Chart" class=" mb-30">
                <div id="basicArea-chart">
                    <apexchart type=scatter height=350 :options="simpleScatter.chartOptions" :series="simpleScatter.series" />
                </div>
            </b-card>
        </b-col>
        <b-col  md="6" lg="6" sm="6">
            <b-card title="Scatter – Datetime Chart" class=" mb-30">
                <div id="basicArea-chart">
                    <apexchart type=scatter height=350 :options="scatterDatetime.chartOptions" :series="scatterDatetime.series" />
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>
<script>
import {
    simpleScatter,
    scatterDatetime
} from '@/data/apexChart.js'

export default {
    data(){
       return{
            simpleScatter,
            scatterDatetime
       }
    }
}
</script>
