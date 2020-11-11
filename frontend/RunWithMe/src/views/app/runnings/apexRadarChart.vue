<template>
   <b-row>
       <b-col  md="6" lg="4" sm="6">
            <b-card title="" class=" mb-30">
                <div class="example">
                <apexchart ref="heatmap" width="270" height="240" type="heatmap" :options="heatmap.chartOptions" :series="heatmap.series"></apexchart>
                </div>
                <hr>
                <div id="basicArea-chart">
                     <h6> <strong><i class="text-20 i-Clock-Back"></i> old  - </strong> {{oldDate}} </h6>
                     <h6> <strong><i class="text-20 i-Clock"></i> cur  - </strong> {{date}} </h6>
                     <button class="btn btn-primary updateRadar" style = "margin-left : 200px;" @click="refresh()"> refresh </button>
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
                            text: 'running analysis'
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
                heatmap : {
                    chartOptions: {
                        dataLabels: {
                          enabled: false
                        },
                        colors: ["#008FFB"],
                        xaxis: {
                        //    type: 'datetime',
                        },
                        title: {
                            text: "running plant"
                        },
                        labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
                    },
                    series: [{
                        name: '5th',
                        data: [0,0,10,0,0,0,0]
                        },
                        {
                        name: '4th',
                        data: [0,0,0,3,0,0,0]
                        },
                        {
                        name: '3rd',
                        data: [1,0,0,0,0,0,0]
                        },
                        {
                        name: '2nd',
                        data: [0,0,0,0,0,0,0]
                        },
                        {
                        name: '1st',
                        data: [0,0,0,0,0,0,0]
                        },
                        
                    ],
                },
            date : "",
            oldDate : "",
            uid : "",
            userInfo : {},
            interval : "",
            month : {"Jan":1, "Feb" : 2, "Mar": 3, "Apr":4, "May":5, "Jun":6 , "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11,"Dec":12},
        }
    },
    methods: {         
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
                    if(this.userInfo.userId.gender === 1)
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
            this.uid = this.userInfo.userId.userId;

            console.log(this.uid)
            http
                .get('/runnings/'+this.uid)
                .then(response => {
                    console.log(typeof(response.data.data));
                    console.log(response.data.data);

                    // 잔디심기
                    var now = new Date();
                    var curMonth = this.$moment(now).format("MMM");
                    console.log(curMonth)
                    var startDate = now.getFullYear() + "-" + ((now.getMonth()+1)%12) + "-1";
                    var startDay = this.$moment(startDate).day();
                    console.log("startDay:"+startDay)
                    for (const [key, value] of Object.entries(response.data.data)) {
                        var month = this.$moment(value.startTime).format("MMM")
                        var date = this.$moment(value.startTime).format("D")
                        var day = this.$moment(value.startTime).day()
                        
                        //console.log(day)
                        // console.log(this.month[curMonth])
                        // console.log(this.month[month])
                        if(this.month[curMonth] === this.month[month])
                        {
                            //console.log(this.$moment(value.startTime).format("D"))
                            var curDate = this.$moment(value.startTime).format("D");
                            var curDay = this.$moment(value.startTime).day();
                            var distance = value.accDistance;
                            //console.log(parseInt(curDate) + parseInt(startDay));
                            var result = parseInt((parseInt(curDate) + parseInt(startDay)) / 7);
                            console.log(curDay + "/" + result);
                            this.heatmap.series[4-result].data[curDay] += distance;
                        }
                    }

                    console.log(this.heatmap.series)
                    this.$refs.heatmap.updateOptions([{
                    }], false, true)


                    // 분석하기
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
