<template>
    <div class="main-content">
        
        <breadcumb :page="'Widget Statistics'" :folder="'Widgets'" />
        <b-row>
            <b-col lg="3" md="6" sm="6">
                <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 o-hidden  text-center">
                    <i class="i-Car-Items"></i>
                    <div class="content">
                        <p class="text-muted mt-2 mb-0">New Leads</p>
                        <p class="text-primary text-24 line-height-1 mb-2">205</p>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="3" md="6" sm="6">
                <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 o-hidden  text-center">
                    <i class="i-Data-Upload"></i>
                    <div class="content">
                        <p class="text-muted mt-2 mb-0">Download</p>
                        <p class="text-primary text-24 line-height-1 mb-2">4021</p>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="3" md="6" sm="6">
                <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 o-hidden  text-center">
                    <i class="i-Feedburner"></i>
                    <div class="content">
                        <p class="text-muted mt-2 mb-0">Feedback</p>
                        <p class="text-primary text-24 line-height-1 mb-2">80</p>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="3" md="6" sm="6">
                <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 o-hidden  text-center">
                    <i class="i-File-Horizontal-Text"></i>
                    <div class="content">
                        <p class="text-muted mt-2 mb-0">Opinion</p>
                        <p class="text-primary text-24 line-height-1 mb-2">1200</p>
                    </div>
                </b-card>
            </b-col>
            
            <!-- widget-chart phase-1 -->
            <b-col  md="6" lg="3">
              <b-card no-body title="" class=" mb-30 o-hidden ">
                  <div class="ul-widget__chart-info">
                                        <h5 class="heading">INCOME</h5>
                                        <div class="ul-widget__chart-number">
                                            <h2 class="t-font-boldest">$1000</h2>
                                            <small class="text-muted">46% compared to last year</small>
                                        </div>
                                    </div>
                   <b-card-body class="ul-card__widget-chart">
                        <div id="basicArea-chart">
                            <apexchart type=area  height=150 :options="splineAreaWidget.chartOptions" :series="splineAreaWidget.series" />
                        </div>
                   </b-card-body>
              </b-card>
            </b-col>
            <b-col  md="6" lg="3">
              <b-card no-body title="" class=" mb-30 o-hidden ">
                  <div class="ul-widget__chart-info">
                                        <h5 class="heading">APPROVE</h5>
                                        <div class="ul-widget__chart-number">
                                            <h2 class="t-font-boldest">$500</h2>
                                            <small class="text-muted">46% compared to last year</small>
                                        </div>
                                    </div>
                   <b-card-body class="ul-card__widget-chart">
                        <div id="basicArea-chart">
                            <apexchart type=area  height=150 :options="splineAreaWidgetTwo.chartOptions" :series="splineAreaWidgetTwo.series" />
                        </div>
                   </b-card-body>
              </b-card>
            </b-col>
            <b-col  md="6" lg="3">
              <b-card no-body title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__chart-info">
                        <h5 class="heading">transaction</h5>
                            <div class="ul-widget__chart-number">
                                <h2 class="t-font-boldest">$44,909</h2>
                                <small class="text-muted">46% compared to last year</small>
                            </div>
                    </div>
                   <b-card-body class="ul-card__widget-chart">
                        <div id="basicArea-chart" >
                            <apexchart type=area  height=150 :options="splineAreaWidgetThree.chartOptions" :series="splineAreaWidgetThree.series" />
                        </div>
                   </b-card-body>
              </b-card>
            </b-col>
            <b-col  md="6" lg="3">
              <b-card no-body title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__chart-info">
                        <h5 class="heading">SALES</h5>
                            <div class="ul-widget__chart-number">
                                <h2 class="t-font-boldest">$500</h2>
                                <small class="text-muted">46% compared to last year</small>
                            </div>
                    </div>
                   <b-card-body class="ul-card__widget-chart">
                        <div id="basicArea-chart">
                            <apexchart type=area  height=150 :options="splineAreaWidgetFour.chartOptions" :series="splineAreaWidgetFour.series" />
                        </div>
                   </b-card-body>
              </b-card>
            </b-col>
            <b-col  md="6" lg="3">
              <b-card no-body title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__chart-info">
                        <h5 class="heading text-20  line-height-1 mb-3"><i class="i-Like-2"></i> Approve</h5>
                            <div class="ul-widget__chart-number">
                                <h6 class="">55,000</h6>
                            </div>
                    </div>
                   <b-card-body class="ul-card__widget-chart">
                        <div id="basicArea-chart" >
                            <apexchart type=area  height=150 :options="splineAreaWidgetFive.chartOptions" :series="splineAreaWidgetFive.series" />
                        </div>
                   </b-card-body>
              </b-card>
            </b-col>
            <b-col  md="6" lg="3">
              <b-card no-body title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__chart-info">
                        <h5 class="heading text-20  line-height-1 mb-3"><i class="i-File-Horizontal-Text"></i> Comments</h5>
                        <div class="ul-widget__chart-number">
                            <h6 class="">55,000</h6>
                        </div>
                    </div>
                   <b-card-body class="ul-card__widget-chart">
                        <div id="basicArea-chart" >
                            <apexchart type=area  height=150 :options="splineAreaWidgetSix.chartOptions" :series="splineAreaWidgetSix.series" />
                        </div>
                   </b-card-body>
              </b-card>
            </b-col>
            <b-col  md="6" lg="3">
                <b-card no-body title="" class=" mb-30 o-hidden ">
                        <div class="ul-widget__chart-info">
                            <h5 class="heading text-20  line-height-1 mb-3"><i class="i-Sharethis"></i> Contribution</h5>
                                <div class="ul-widget__chart-number">
                                    <h6 class="">45,000</h6>

                                </div>
                        </div>
                    <b-card-body class="ul-card__widget-chart">
                            <div id="basicArea-chart">
                                <apexchart type=area  height=150 :options="splineAreaWidgetSeven.chartOptions" :series="splineAreaWidgetSeven.series" />
                            </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col  md="6" lg="3">
                <b-card no-body title="" class=" mb-30 o-hidden ">
                        <div class="ul-widget__chart-info">
                            <h5 class="heading text-20  line-height-1 mb-3"><i class="i-Eye"></i> Watch</h5>
                            <div class="ul-widget__chart-number">
                                <h6 class="">70,000</h6>
                            </div>
                        </div>
                        <b-card-body class="ul-card__widget-chart">
                            <div id="basicArea-chart">
                                <apexchart type=area   height=150 :options="splineAreaWidgetEight.chartOptions" :series="splineAreaWidgetEight.series" />
                            </div>
                        </b-card-body>
                </b-card>
            </b-col>

            <!-- widget-chart--line--bar phase-2 -->
            <b-col  md="6" lg="3">
                <b-card title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__row">
                        <div id="widgetBarChart">
                         <apexchart type=bar height=150 :options="widgetBarChart.chartOptions" :series="widgetBarChart.series" />
                    </div>
                    <div class="ul-widget__content">
                        <p class=" text-mute m-0">
                            People
                        </p>
                        <h4 class="heading">2,750</h4>
                    </div>
                    </div>
                </b-card>
            </b-col>
            <b-col  md="6" lg="3">
                <b-card title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__row">
                        <div id="widgetBarChart">
                         <apexchart type=bar height=150 :options="widgetBarChartTwo.chartOptions" :series="widgetBarChartTwo.series" />
                    </div>
                    <div class="ul-widget__content">
                        <p class=" text-mute m-0">
                            Views
                        </p>
                        <h4 class="heading">2,750</h4>
                    </div>
                    </div>
                </b-card>
            </b-col>
            <b-col  md="6" lg="3">
                <b-card title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__row">
                        <div id="widgetBarChart">
                            <apexchart type=line height=150 :options="widgetLineChart.chartOptions" :series="widgetLineChart.series" />
                        </div>
                        <div class="ul-widget__content">
                            <p class=" text-mute m-0">
                                Growth
                            </p>
                            <h4 class="heading">6,760</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col  md="6" lg="3">
                <b-card title="" class=" mb-30 o-hidden ">
                    <div class="ul-widget__row">
                        <div id="widgetBarChart">
                            <apexchart type=line height=150 :options="widgetLineChart.chartOptions" :series="widgetLineChart.series" />
                        </div>
                        <div class="ul-widget__content">
                            <p class=" text-mute m-0">
                                Growth
                            </p>
                            <h4 class="heading">6,760</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            
            <!-- widget-chart--bar phase-3 -->
            <b-col md="6" lg="3" mt="3">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=bar  height=100 :options="widgetBarChartThree.chartOptions" :series="widgetBarChartThree.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">698 212</h4>
                                <small class=" text-muted m-0">
                                    50% Average
                                </small>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" mt="3">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=bar  height=100 :options="widgetBarChartFour.chartOptions" :series="widgetBarChartFour.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">369 212</h4>
                                <small class=" text-muted m-0">
                                    24% Average
                                </small>
                        </div>
                    </div>
                </b-card>
            </b-col> 
            <b-col md="6" lg="3" mt="3">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=bar  height=100 :options="widgetBarChartFive.chartOptions" :series="widgetBarChartFive.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">369 212</h4>
                                <small class=" text-muted m-0">
                                    24% Average
                                </small>
                        </div>
                    </div>
                </b-card>
            </b-col> 
            <b-col md="6" lg="3" mt="3">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=bar height=100 :options="widgetBarChartSix.chartOptions" :series="widgetBarChartSix.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">369 212</h4>
                                <small class=" text-muted m-0">
                                    24% Average
                                </small>
                        </div>
                    </div>
                </b-card>
            </b-col> 

            <!-- small-widget phase-4-->
            <b-col md="6" lg="3">
                <b-card class="mb-30">
                    <div class="ul-widget__row">
                        <div class="ul-widget-stat__font">
                            <i class="i-Hotel text-primary"></i>
                        </div>
                        <div class="ul-widget__content">
                            <p class=" m-0">
                                 Assets
                            </p>
                            <h4 class="heading">40,894</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class="mb-30">
                    <div class="ul-widget__row">
                        <div class="ul-widget-stat__font">
                            <i class="i-Bar-Chart text-danger"></i>
                        </div>
                        <div class="ul-widget__content">
                            <p class=" m-0">
                                 Progression
                            </p>
                            <h4 class="heading">80%</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class="mb-30">
                    <div class="ul-widget__row">
                        <div class="ul-widget-stat__font">
                            <i class="i-Full-Cart text-success"></i>
                        </div>
                        <div class="ul-widget__content">
                            <p class=" m-0">
                                Total Profit
                            </p>
                            <h4 class="heading">৳ 2000</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class="mb-30">
                    <div class="ul-widget__row">
                        <div class="ul-widget-stat__font">
                             <i class="i-Bookmark text-warning"></i>
                        </div>
                        <div class="ul-widget__content">
                            <p class=" m-0">
                                 Lease
                            </p>
                            <h4 class="heading"> 5,417</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>

            <!-- apex-pie--chart phase-5 -->
            <b-col md="6" lg="3"  class="">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=radialBar height=250 :options="radialBar.chartOptions" :series="radialBar.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">People Choice Rate</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3"  class="">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=radialBar height=250 :options="radialBarTwo.chartOptions" :series="radialBarTwo.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">Item Pending</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" class="">
                <b-card class=" mb-30 o-hidden ">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=radialBar height=250 :options="radialBarThree.chartOptions" :series="radialBarThree.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">Total Profit</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" class="">
                <b-card class="mb-30 o-hidden">
                    <div class="ul-widget__row-v2">
                        <div id="chart">
                            <apexchart type=radialBar height=250 :options="radialBarFour.chartOptions" :series="radialBarFour.series" />
                        </div>
                        <div class="ul-widget__content-v2">
                            <h4 class="heading mt-3">Total Revenue</h4>
                        </div>
                    </div>
                </b-card>
            </b-col>
            
            <!-- apex-bar--chart phase-6 -->
            <b-col md="4" lg="4" >
                <b-card no-body class="mb-30 o-hidden">
                    <div class="ul-widget__row-v2">
                        <div class="ul-widget__content-v2">
                            <h3 class="heading mt-3">698</h3>
                                <small class=" text-muted m-0">
                                        Orders Received
                                </small>
                                <div id="basicArea-chart">
                                    <apexchart type=area  height=150 :options="basicArea.chartOptions" :series="basicArea.series" />
                                </div>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="4" lg="4" >
                <b-card no-body class="mb-30 o-hidden">
                    <div class="ul-widget__row-v2">
                        <div class="ul-widget__content-v2">
                            <h3 class="heading mt-3">5,767</h3>
                                <small class=" text-muted m-0">
                                    Total Marketing
                                </small>
                                <div id="basicArea-chart">
                                    <apexchart type=area  height=150 :options="basicAreaTwo.chartOptions" :series="basicAreaTwo.series" />
                                </div>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="4" lg="4" >
                <b-card no-body class="mb-30 o-hidden">
                    <div class="ul-widget__row-v2">
                        <div class="ul-widget__content-v2">
                            <h3 class="heading mt-3">$5,767</h3>
                                <small class=" text-muted m-0">
                                    Total Earning
                                </small>
                                <div id="basicArea-chart">
                                    <apexchart type=area  height=150 :options="basicAreaThree.chartOptions" :series="basicAreaThree.series" />
                                </div>
                        </div>
                    </div>
                </b-card>
            </b-col>

            <!-- small-wizard_two phase-7 -->
            <b-col md="6" lg="3" >
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-3">Server status region 1</h6>
                    <p class="text-20 text-success line-height-1 mb-3"><i class="i-Arrow-Up-in-Circle"></i> Up</p>
                    <small class="text-muted">Last down 4 days ago</small>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" >
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-3">Server status region 2</h6>
                    <p class="text-20 text-success line-height-1 mb-3"><i class="i-Arrow-Up-in-Circle"></i> Up</p>
                    <small class="text-muted">Last down 4 days ago</small>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" >
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-3">Server status region 3</h6>
                    <p class="text-20 text-danger line-height-1 mb-3"><i class="i-Arrow-Down-in-Circle"></i> Down</p>
                    <small class="text-muted">Last down 4 days ago</small>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" >
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-3">Server status region 3</h6>
                    <p class="text-20 text-danger line-height-1 mb-3"><i class="i-Arrow-Down-in-Circle"></i> Down</p>
                    <small class="text-muted">Last down 4 days ago</small>
                </b-card>
            </b-col>

            <!-- echart-line-bar phase-6 -->
            <b-col md="6" lg="3" class="">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-1">Taffic in last 24h</h6>
                    <p class="text-22 text-success font-weight-light mb-1">13000</p>
                    <div class="chart-wrapper" style="height: 65px;">
                        <v-chart :options="widgetBasicLine" :autoresize="true"></v-chart>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" class="">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-1">Taffic in last week</h6>
                    <p class="text-22 text-danger font-weight-light mb-1">65058</p>
                    <div class="chart-wrapper" style="height: 65px;">
                        <v-chart :options="widgetBasicLineTwo" :autoresize="true"></v-chart>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" class="">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-1">Taffic in last 24h</h6>
                    <p class="text-22 text-success font-weight-light mb-1">13000</p>
                    <div class="chart-wrapper" style="height: 65px;">
                        <v-chart :options="widgetBasicLine" :autoresize="true"></v-chart>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="3" class="">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-1">Taffic in last week</h6>
                    <p class="text-22 text-danger font-weight-light mb-1">65058</p>
                    <div class="chart-wrapper" style="height: 65px;">
                        <v-chart :options="widgetBasicLineTwo" :autoresize="true"></v-chart>
                    </div>
                </b-card>
            </b-col>
            <!-- wizard-progressbar phase-9-->
            <b-col md="6" lg="3">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-2 text-muted">Storage Usage</h6>
                    <p class="mb-1 text-22 font-weight-light">50%</p>
                    
                    <b-progress variant="success" height="4px" :value="value"></b-progress>
                    <small class="text-muted">Most data used in last 3 days</small>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-2 text-muted">Bandwith Usage</h6>
                    <p class="mb-1 text-22 font-weight-light">90%</p>
                    
                    <b-progress variant="danger" height="4px" :value="valueTwo"></b-progress>
                    <small class="text-muted">Most data used in last 7 days</small>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-2 text-muted">Data Usage</h6>
                    <p class="mb-1 text-22 font-weight-light">60%</p>
                    
                    <b-progress variant="info" height="4px" :value="60"></b-progress>
                    <small class="text-muted">Most data used in last 5 days</small>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class=" mb-30 o-hidden ">
                    <h6 class="mb-2 text-muted">Data Usage</h6>
                    <p class="mb-1 text-22 font-weight-light">60%</p>
                    
                    <b-progress variant="warning" height="4px" :value="valueTwo"></b-progress>
                    <small class="text-muted">Most data used in last 5 days</small>
                </b-card>
            </b-col>

            <!-- small-wizard_three phase-12 -->
            <b-col md="6" lg="3">
                <b-card class="mb-30 0-hidden">
                    <b-row>
                        <b-col md="7">
                            <h5 class="t-font-bolder">Helpline</h5>
                            <small class="text-muted">26% higher than last year</small>
                        </b-col>
                        <b-col md="5" class="text-right">
                            <h3 class="t-font-boldest">62%</h3>
                            <small class="text-muted">30GB</small>
                        </b-col>
                        <b-col md="12" class="mt-3">
                            <b-progress variant="primary" height="1rem" :value="valueTwo"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class="mb-30 0-hidden">
                    <b-row>
                        <b-col md="7">
                            <h5 class="t-font-bolder">Service</h5>
                            <small class="text-muted">16% higher than last year</small>
                        </b-col>
                        <b-col md="5" class="text-right">
                            <h3 class="t-font-boldest">94</h3>
                            <small class="text-muted">30GB</small>
                        </b-col>
                        <b-col md="12" class="mt-3">
                            <b-progress variant="warning" height="1rem" :value="20"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class="mb-30 0-hidden">
                    <b-row>
                        <b-col md="7">
                            <h5 class="t-font-bolder">Email</h5>
                            <small class="text-muted">16% higher than last year</small>
                        </b-col>
                        <b-col md="5" class="text-right">
                            <h3 class="t-font-boldest">120</h3>
                            <small class="text-muted">out of 1K</small>
                        </b-col>
                        <b-col md="12" class="mt-3">
                            <b-progress variant="success" height="1rem" :value="50"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col md="6" lg="3">
                <b-card class="mb-30 0-hidden">
                    <b-row>
                        <b-col md="7">
                            <h5 class="t-font-bolder">Territory</h5>
                            <small class="text-muted">16% higher than last year</small>
                        </b-col>
                        <b-col md="5" class="text-right">
                            <h3 class="t-font-boldest">120</h3>
                            <small class="text-muted">out of 1K</small>
                        </b-col>
                        <b-col md="12" class="mt-3">
                            <b-progress variant="danger" height="1rem" :value="30"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <!-- invoice -->
                        <b-col md="12" class="">
                            <b-card no-body class="mb-30 o-hidden">
                                <b-card-header header-bg-variant="primary">
                                    <b-row style="align-items:center">
                                        <b-col md="6">
                                            <div class="ul-card-widget__head-label">     
                                                <h5 class="text-18 font-weight-700 text-white">
                                                    <i class="i-Folder-With-Document text-white mr-2"></i>
                                                    List Of Invoices
                                                </h5>
                                            </div>
                                        </b-col>
                                        <b-col md="6" class="text-right">
                                            <div class="ul-card-widget__head-toolbar">
                                                <b-dropdown  variant="danger" size="sm" text="Summary" class="m-2">
                                                    <b-dropdown-item-button>Action</b-dropdown-item-button>
                                                    <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                                    <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                                                </b-dropdown>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-header>
                                <b-card-body>
                                    <b-row>
                                        <b-col md="6">
                                            <h3 class="text-muted text-14 font-weight-500">Final Commission Revenue</h3>
                                            <span class="text-muted text-18 font-weight-600">$790,420</span>
                                        </b-col>
                                        <b-col md="6" class="">
                                            <h3 class="text-muted text-14 font-weight-500">Final Commission Revenue</h3>
                                            <span class="text-muted text-18 font-weight-600"> July 25,2019</span>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                                <div id="basicArea-chart" class="mt-2">
                                    <apexchart type=area height=160 :options="spark3.chartOptions" :series="spark3.series" />
                                </div>
                            </b-card>
                        </b-col>

            <!-- territory phase-13 -->
            <b-col md="12" lg="12" class="">
                <b-card>
                    <b-row>
                        <b-col md="6" lg="3">
                            <div class="ul-widget__content-v4 card-icon-bg">
                                <i class="i-Eye text-success"></i>
                                    <h3 class="t-font-boldest">4,377</h3>
                                    <span>Viewers</span>
                            </div>
                        </b-col>
                        <b-col md="6" lg="3">
                           
                            <div class="ul-widget__content-v4 card-icon-bg">
                                <i class="i-Like text-primary"></i>
                                <h3 class="t-font-boldest">456</h3>
                                <span>Likes</span>
                            </div>           
                        </b-col>
                        <b-col md="6" lg="3">
                            <div class="ul-widget__content-v4 card-icon-bg">
                                <i class="i-File-Horizontal-Text text-info"></i>
                                <h3 class="t-font-boldest">65</h3>
                                <span>Comments</span>
                            </div>                    
                        </b-col>

                        <b-col md="6" lg="3">
                            
                            <div class="ul-widget__content-v4 card-icon-bg">
                                <i class="i-Business-Man    text-warning"></i>
                                <h3 class="t-font-boldest">20K</h3>
                                <span>Views</span>
                            </div>
                                        
                        </b-col>

                        

                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { spark3  } from '@/data/apexChart'
 // import ECharts modules manually to reduce bundle size
    // import 'echarts/lib/chart/pie';
    // import 'echarts/lib/chart/bar';
    // import 'echarts/lib/component/tooltip';


    // import 'echarts/lib/component/title';
    // import 'echarts/lib/chart/line';
import { 
        splineAreaWidget,
        splineAreaWidgetTwo,
        splineAreaWidgetThree,
        splineAreaWidgetFour,
        splineAreaWidgetFive,
        splineAreaWidgetSix,
        splineAreaWidgetSeven,
        splineAreaWidgetEight,
        widgetBarChart,
        widgetBarChartTwo,
        widgetLineChart,
        widgetBarChartThree,
        widgetBarChartFour,
        widgetBarChartFive,
        widgetBarChartSix,
        radialBar,
        radialBarTwo,
        radialBarThree,
        radialBarFour,
        basicArea,
        basicAreaTwo,
        basicAreaThree,
        widgetBasicLine,
        widgetBasicLineTwo,

    } from '@/data/widgetStatistics'

   
    

export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Statistics Widgets"
  },
  data(){
   
    return{
      splineAreaWidget,
      splineAreaWidgetTwo,
      splineAreaWidgetThree,
      splineAreaWidgetFour,
      splineAreaWidgetFive,
      splineAreaWidgetSix,
      splineAreaWidgetSeven,
      splineAreaWidgetEight,
      widgetBarChart,
      widgetBarChartTwo,
      widgetLineChart,
      widgetBarChartThree,
      widgetBarChartFour,
      widgetBarChartFive,
      widgetBarChartSix,
      radialBar,
      radialBarTwo,
      radialBarThree,
      radialBarFour,
      basicArea,
      basicAreaTwo,
      basicAreaThree,
      widgetBasicLine,
      widgetBasicLineTwo,
      spark3,
      value:75,
      valueTwo:90

    }
    
  },
  methods:{
 
  }
}
</script>
<style lang="scss">

.echarts {
    width: 100%;
    height: 100%;
      
  }
</style>
