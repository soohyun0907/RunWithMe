<template>
    <b-row>
        <b-col md="6">
            <b-card title="Line Column (Traffic Sources)" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=line height=350 :options="lineColumn.chartOptions" :series="lineColumn.series" />
                </div>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card title="Multiple Y-Axis(XYZ - Stock Analysis (2009 - 2016))" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=line height=350 :options="multipleYxis.chartOptions" :series="multipleYxis.series" />
                </div>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card title="Line & Area(Team A VS Team B)" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=line height=350 :options="lineArea.chartOptions" :series="lineArea.series" />
                </div>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card title="Line Column Area" class=" mb-30">
                <div id="basicArea-chart" style="min-height: 365px">
                    <apexchart type=line height=350 :options="lineColumnArea.chartOptions" :series="lineColumnArea.series" />
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>
<script>
import{

    lineColumn,
    multipleYxis,
    lineArea,
    lineColumnArea

} from '@/data/apexChart.js'

export default {
    data(){
        return{
            lineColumn,
            multipleYxis,
            lineArea,
            lineColumnArea
        }
    }
}
</script>
