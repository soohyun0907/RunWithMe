<template>
   <b-row>
       <b-col  md="6" lg="4" sm="6">
            <b-card title="Running 분석" class=" mb-30">
                <div id="chart">
                    <apexchart ref="Chart" type="line" height="200" :options="lineGraph.chartOptions" :series="lineGraph.series" />
                </div>
                <div id="basicArea-chart">
                     <button   class="btn btn-primary updateRadar" @click="refresh()"> refresh </button>
                     <p></p>
                     <h6> old time - {{oldDate}} </h6>
                     <h6> cur time - {{date}} </h6>
                     <apexchart ref="realtimeChart" type=radar height=335 :options= chartOptions :series=  series  />
                </div>
            </b-card>
        </b-col>
   </b-row>
</template>
<script>

import http from "@/utils/http-common";
import authData from "@/store/modules/authData";
import { mapGetters, mapActions, mapMutations } from "vuex";


export default {
    data(){
        return{
                //radarMultiSeries: {
                    series: [
                    {
                        name: '이전 기록',
                        data: [],
                    }, 
                    {
                        name: '최근 기록',
                        data: [],
                    }, 
                    {
                        name: '평균 러너 기록',
                        data: [],
                    }],
                    chartOptions: {
                        chart: {
                            dropShadow: {
                                enabled: true,
                                blur: 1,
                                left: 1,
                                top: 1
                            }
                        },
                        title: 
                        {
                            text: ''
                        },
                        stroke: 
                        {
                            width: 0
                        },
                        fill: 
                        {
                            opacity: 0.4
                        },
                        markers: 
                        {
                            size: 0
                        },
                        labels: ['평균속도', '평균거리', '누적거리', '최대시간', '성장률']
                    },
                lineGraph:{
                    series: [{
                        name: 'Desktops',
                        data: [15,15,15,15,15,15]
                    }],
                    chartOptions: {
                        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
                        chart: {
                            height: 550,
                            type: 'line',
                            animations: {
                                enabled: true,
                                easing: 'linear',
                                dynamicAnimation: {
                                speed: 10000
                                }
                            },
                        },
                        grid: {
                            show: true,
                            strokeDashArray: 0,
                            xaxis: {
                                lines: {
                                    show: true
                                }
                            }
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 5
                        },
                        dropShadow: {
                            enabled: true,
                            opacity: 0.3,
                            blur: 5,
                            left: -7,
                            top: 22
                        },

                        title: {
                            text: 'Line',
                            align: 'left',
                            style: {
                                color: '#FFF'
                            }
                        },
                        xaxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                            labels: {
                                style: {
                                colors: '#fff'
                                },
                                
                            }
                        },
                        yaxis: {
                            max: 12,
                            labels: {
                                style: {
                                color: '#fff'
                                }
                            }
                        },
                        legend: {
                            show: false
                        },
                    }
                }
            ,
            date : "",
            oldDate : "",
            uid : "",
            userInfo : {},
            interval : "",
        }
    },
    mounted: function () {
        this.setDataLineChart()
    },
    beforeDestroy: function (){
        clearInterval(this.interval); 
    },
    methods: {
        getRandomArbitrary (min, max) {
            return Math.floor(Math.random() * 10)
        },
        setDataLineChart () {
            this.interval = setInterval(() => {
                this.lineGraph.series[0].data.splice(0, 1)
                this.lineGraph.series[0].data.push(this.getRandomArbitrary(0, 99))
                this.updateSeriesLine()
            }, 500)
        },
        updateSeriesLine () {
            this.$refs.Chart.updateSeries([{
                data: this.lineGraph.series[0].data
            }], false, true)
        },   
        refresh: function(){
            
            this.oldDate = this.date;
            this.date = new Date();
            this.date = this.$moment(this.date).format('MMMM Do YYYY, h:mm:ss a');
            localStorage.setItem("oldDate", this.oldDate);
            
            http
                .get('/runnings/'+this.uid)
                .then(response => {
                    console.log(response.data);
                    var totalTime = 0;
                    var totalDis = 0;
                    var length = response.data.data.length;
                    var maxTime = 0;
                    for (const [key, value] of Object.entries(response.data.data)) {
                        console.log(`${key}: ${value}`);
                        totalTime += value.accTime;
                        if(maxTime < value.accTime)
                            maxTime = value.accTime;
                        totalDis += value.accDistance;
                    }

                    // 현시점 전 기록 (1,2)
                    this.series[0].data[0] = this.series[1].data[0];
                    this.series[1].data[0] = totalDis / (totalTime/(60*60));

                    this.series[0].data[1] = this.series[1].data[1];
                    this.series[1].data[1] = totalDis / length ;

                    this.series[0].data[2] = this.series[1].data[2];
                    this.series[1].data[2] = totalDis;

                    this.series[0].data[3] = this.series[1].data[3];
                    this.series[1].data[3] = maxTime / (60);


                    this.series[0].data[4] = this.series[1].data[4];

                    this.series[1].data[4] = 
                    (((this.series[1].data[0]) * 
                    (this.series[1].data[1])) / 
                    ((this.series[0].data[0]) * 
                    (this.series[0].data[1])));

                    var gender = "";
                    if(this.userInfo.gender === 1)
                        gender = "male";
                    else
                        gender = "female";
 
                    var idList = [];
                    http
                        .get("/friends/analysis/"+gender)
                        .then((data) =>{
                            console.log(data);
                            var length =  data.data.data.length;
                            console.log("size:" + length)

                            var totalTime = 0;
                            var totalDis = 0;
                            var size = 0;
                            var maxTime = 0;
                            var endCheck = 0;
                            for(var i = 0; i < length; i++){
                               var uid = data.data.data[i].userId;

                               http
                                .get('/runnings/'+ uid)
                                    .then(response => {
                                        console.log("상대 데이터")
                                        console.log(response.data);
                                        size += response.data.data.length;

                                        for (const [key, value] of Object.entries(response.data.data)) {
                                            console.log(`${key}: ${value}`);
                                            totalTime += value.accTime;
                                            if(maxTime < value.accTime)
                                                maxTime = value.accTime;
                                            totalDis += value.accDistance;
                                        }
                                        endCheck++;
                                        if(endCheck == length)
                                        {
                                            this.seriesUpdate(totalDis, totalTime, size, maxTime);
                                        }
                                        
                                });             
                            }
                    });
            });
        },
        seriesUpdate: function(totalDis, totalTime, size, maxTime){
            console.log("비교")
            console.log("totalDis")
            console.log(totalDis)
            
            console.log("totalTime")
            console.log(totalTime)
            // 비교 유저 기록 
            this.series[2].data[0] = totalDis / (totalTime/(60*60));

            this.series[2].data[1] = totalDis / size;

            this.series[2].data[2] = totalDis;

            this.series[2].data[3] = maxTime / 60;

            this.series[2].data[4] = 0
                
            console.log(this.series)
            this.$refs.realtimeChart.updateOptions([{
            }], false, true)
            localStorage.setItem("series", JSON.stringify(this.series));
        }
    },
    created(){
        this.date = localStorage.getItem("oldDate");
        this.oldDate = this.date;

        if(!this.date)
        {
            this.date = new Date();
            this.oldDate = this.date;
            this.oldDate = this.$moment(this.oldDate).format('MMMM Do YYYY, h:mm:ss a');
            this.date = this.$moment(this.date).format('MMMM Do YYYY, h:mm:ss a');
            localStorage.setItem("oldDate", this.date);
        }

        {
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            this.uid = this.userInfo.userId;

            http
                .get('/runnings/'+this.uid)
                .then(response => {
                    console.log(typeof(response.data.data));
                    console.log(response.data.data);
                    var totalTime = 0;
                    var totalDis = 0;
                    var length = response.data.data.length;
                    var maxTime = 0;
                    console.log("totalDis")
                    console.log(totalDis)
                    for (const [key, value] of Object.entries(response.data.data)) {
                        // console.log(`${key}: ${value}`);
                        totalTime += value.accTime;
                        if(maxTime < value.accTime)
                            maxTime = value.accTime;
                        totalDis += value.accDistance;
                    }

                    console.log("totalDis")
                    console.log(totalDis)
                    
                    console.log("totalTime")
                    console.log(totalTime)

                    if(!localStorage.getItem("series")) // 기록이 하나도 없다면,
                    {
                        console.log("여기들어오니?")
                        // 현시점 전 기록 (1,2)
                        this.series[0].data[0] = totalDis / (totalTime/(60*60));
                        this.series[1].data[0] = totalDis / (totalTime/(60*60));

                        this.series[0].data[1] = totalDis / length ;
                        this.series[1].data[1] = totalDis / length ;

                        this.series[0].data[2] = totalDis ;
                        this.series[1].data[2] = totalDis ;

                        this.series[0].data[3] = maxTime / (60);
                        this.series[1].data[3] = maxTime / (60);

                        this.series[0].data[4] = 0 // 이전 평균속도 * 평균거리 대비 성장률

                        this.series[1].data[4] = 0

                        console.log(this.series)
                        localStorage.setItem("series", JSON.stringify(this.series));
                    }    
                    else // 기록측정을 한적이 있다면,
                    {
                        this.series = JSON.parse(localStorage.getItem("series"));
                    }
                });

            }
    }

}
</script>
