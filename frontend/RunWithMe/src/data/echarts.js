var dark_heading = "#c2c6dc";

import { zoomBarData } from '@/data/echartSeries'

  
// start::echartPie
export const echartPie = {

  color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
   tooltip: {
       show: true,
       backgroundColor: 'rgba(0, 0, 0, .8)'
   },
   series:[{
     name: 'Sales by Country',
     type: 'pie',
     radius: '50%',
     center: '50%',
     data: [
         { value: 535, name: 'USA' },
         { value: 310, name: 'Brazil' },
         { value: 234, name: 'France' },
         { value: 155, name: 'BD' },
         { value: 130, name: 'UK' },
         { value: 348, name: 'India' }
     ],
     itemStyle: {
         emphasis: {
             shadowBlur: 10,
             shadowOffsetX: 0,
             shadowColor: 'rgba(0, 0, 0, 0.5)'
         }
     }
 }

]
}
// start::echartBar
export const echartBar = {
        legend: {
            borderRadius: 0,
            orient: 'horizontal',
            x: 'right',
            data: ['Online', 'Offline']
        },
        grid: {
            left: '8px',
            right: '8px',
            bottom: '0',
            containLabel: true
        },
        tooltip: {
            show: true,
            
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        
        xAxis: [{
            type: 'category',
          
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            axisTick: {
                alignWithLabel: true,
               
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: dark_heading,
            },
            axisLine: {
                show:true,
                color: dark_heading,
                
                lineStyle: {
                color: dark_heading,
                
                }
            }
        }],
        yAxis: [{
          type: 'value',
          
        
          axisLabel: {
            color: dark_heading, 
            formatter: '${value}'
        },
        axisLine: {
            show:false,
            color: dark_heading,
            
            lineStyle: {
            color: dark_heading,
            
            }
        },
          min: 0,
          max: 100000,
          interval: 25000,
      
          splitLine: {
              show: true,
              interval: 'auto'
          }
      }],
 

  series: [{
          name: 'Online',
          data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
          label: { show: false, color: '#0168c1' },
          type: 'bar',
          barGap: 0,
          color: '#bcbbdd',
          smooth: true,
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowOffsetY: -2,
                  shadowColor: 'rgba(0, 0, 0, 0.3)'
              }
          }
      },
      {
          name: 'Offline',
          data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
          label: { show: false, color: '#639' },
          type: 'bar',
          color: '#7569b3',
          smooth: true,
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowOffsetY: -2,
                  shadowColor: 'rgba(0, 0, 0, 0.3)'
              }
          }
      }

  ]
}
// start::basicLine
export const basicLine = {
         tooltip: {
           show: true,
           // trigger: 'axis',
           axisPointer: {
             type: "line",
             animation: true
           }
         },
         grid: {
           top: "10%",
           left: "40",
           right: "40",
           bottom: "40"
         },
         xAxis: {
           type: "category",
           data: [
             "1/11/2018",
             "2/11/2018",
             "3/11/2018",
             "4/11/2018",
             "5/11/2018",
             "6/11/2018",
             "7/11/2018",
             "8/11/2018",
             "9/11/2018",
             "10/11/2018",
             "11/11/2018",
             "12/11/2018",
             "13/11/2018",
             "14/11/2018",
             "15/11/2018",
             "16/11/2018",
             "17/11/2018",
             "18/11/2018",
             "19/11/2018",
             "20/11/2018",
             "21/11/2018",
             "22/11/2018",
             "23/11/2018",
             "24/11/2018",
             "25/11/2018",
             "26/11/2018",
             "27/11/2018",
             "28/11/2018",
             "29/11/2018",
             "30/11/2018"
           ],
           axisLabel: {
             color: dark_heading
           },
           axisLine: {
             color: dark_heading,

             lineStyle: {
               color: dark_heading
             }
           },
           axisTick: {
             show: false
           }
         },
         yAxis: {
           type: "value",
           axisLine: {
             show: false
           },
           axisLabel: {
             show: true,
             color: dark_heading
           },
           axisTick: {
             show: false
           },
           splitLine: {
             show: true
           }
         },
         label: {show: false},
         series: [
           {
             data: [
               400,
               800,
               325,
               900,
               700,
               800,
               400,
               900,
               800,
               800,
               300,
               405,
               500,
               1100,
               900,
               1450,
               1200,
               1350,
               1200,
               1400,
               1000,
               800,
               950,
               705,
               690,
               921,
               1020,
               903,
               852,
               630
             ],
             type: "line",
             showSymbol: true,
             smooth: true,
             color: "#639",
             lineStyle: {
               opacity: 1,
               width: 2
             }
           }
         ]
       };
// start::multiLine
export const multiLine = {
        tooltip: {
          trigger: 'axis'
      },
      grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisLabel: {
              color: dark_heading,
          },
          axisLine: {
              color: dark_heading,
              
              lineStyle: {
              color: dark_heading,
              
              }
          }
      },
      yAxis: {
          type: 'value',
          min: 65,
          max: 110,

          axisLabel: {
            color: dark_heading,
        },
        axisLine: {
            show:false,
            color: dark_heading,
            
            lineStyle: {
            color: dark_heading,
            
            }
        }
      },
      series: [{
              name: 'Alpha',
              data: [70, 65, 85, 75, 95, 86, 93],
              type: 'line',
              smooth: true,
              symbolSize: 8,
              lineStyle: {
                  color: '#ff5721',
                  opacity: 1,
                  width: 1.5,
              },
              itemStyle: {
                  color: '#fff',
                  borderColor: '#ff5721',
                  borderWidth: 1.5
              }
          },
          {
              name: 'Beta',
              data: [80, 90, 75, 104, 75, 80, 70],
              type: 'line',
              smooth: true,
              symbolSize: 8,
              lineStyle: {
                  color: '#5f6cc1',
                  opacity: 1,
                  width: 1.5,
              },
              itemStyle: {
                  color: '#fff',
                  borderColor: '#5f6cc1',
                  borderWidth: 1.5
              }
          },
          {
              name: 'Gama',
              data: [110, 95, 102, 90, 105, 95, 108],
              type: 'line',
              smooth: true,
              symbolSize: 10,
              lineStyle: {
                  color: '#4cae50',
                  opacity: 1,
                  width: 1.5,
              },
              itemStyle: {
                  color: '#fff',
                  borderColor: '#4cae50',
                  borderWidth: 1.5
              }
          }
      ]
}
// start::basicBar
export const basicBar = {
          grid: {
            show: false,
            top: 5,
            left: 0,
            right: 0,
            bottom: 0
        },
        color: ['#5f6bc2'],
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },
        xAxis: [{
            type: 'category',

            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            label: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
            label: {
                show: false,
                color: '#0168c1'
            },
            type: 'bar',
            barWidth: '70%',
            smooth: true
        }]
}
// start::multipleBar
export const multipleBar = {
          grid: {
            show: false,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            borderRadius: 0,
            orient: 'horizontal',
            x: 'right',
            data: ['Online', 'Offline']
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                color: dark_heading
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: dark_heading
                },
                color: '#eee'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: dark_heading
                }
            }
        }],
        yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '${value}',
                    color:dark_heading
                },
                min: 0,
                max: 100000,
                interval: 25000,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    interval: 'auto'
                },
                axisTick: {
                    show: false,
                    color: dark_heading
                },
            }

        ],

        series: [{
                name: 'Series 1',
                data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                label: {
                    show: false,
                    color: '#0168c1'
                },
                type: 'bar',
                barGap: 0,
                smooth: true
            },
            {
                name: 'Series 2',
                data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                label: {
                    show: false,
                    color: '#0168c1'
                },
                type: 'bar',
                smooth: true
            }
        ]
}
// start::multipleBar2
export const multipleBar2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '8%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 500,
            interval: 100,
            axisLabel: {
                formatter: '{value}k',
                color: dark_heading,
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 400
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 1,
                    opacity: 0.5
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: [
                'Dec, 1', 'Dec, 2', 'Dec, 3', 'Dec, 4', 'Dec, 5', 'Dec, 6', 'Dec, 7'
            ],
            axisLabel: {
                formatter: '{value}',
                color: dark_heading,
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 400,

            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            }
        },
        series: [{
                color: '#3182bd',
                name: 'Campaign',
                type: 'bar',
                barGap: 0,
                label: {
                    normal: {
                        show: false,
                        position: 'insideBottom',
                        distance: 5,
                        align: 'left',
                        verticalAlign: 'middle',
                        rotate: 90,
                        formatter: '{c}  {name|{a}}',
                        fontSize: 14,
                        fontWeight: 'bold',
                        rich: {
                            name: {
                                color: '#fff',

                            }
                        }
                    }
                },
                data: [320, 332, 301, 334, 390, 350, 215]
            },
            {
                color: '#74c475',
                name: 'Steppe',
                type: 'bar',
                label: {
                    normal: {
                        show: false,
                        position: 'insideBottom',
                        distance: 5,
                        align: 'left',
                        verticalAlign: 'middle',
                        rotate: 90,
                        formatter: '{c}  {name|{a}}',
                        fontSize: 14,
                        fontWeight: 'bold',
                        rich: {
                            name: {
                                color: '#fff',

                            }
                        }
                    }
                },
                data: [220, 182, 191, 234, 290, 190, 210]
            },
            {
                color: '#e6550d',
                name: 'Desert',
                type: 'bar',
                label: {
                    normal: {
                        show: false,
                        position: 'insideBottom',
                        distance: 5,
                        align: 'left',
                        verticalAlign: 'middle',
                        rotate: 90,
                        formatter: '{c}  {name|{a}}',
                        fontSize: 14,
                        fontWeight: 'bold',
                        rich: {
                            name: {
                                color: '#fff',

                            }
                        }
                    }
                },
                data: [150, 232, 201, 154, 190, 150, 130]
            },
            {
                color: '#756bb1',
                name: 'Wetland',
                type: 'bar',
                label: {
                    normal: {
                        show: false,
                        position: 'insideBottom',
                        distance: 5,
                        align: 'left',
                        verticalAlign: 'middle',
                        rotate: 90,
                        formatter: '{c}  {name|{a}}',
                        fontSize: 14,
                        fontWeight: 'bold',
                        rich: {
                            name: {
                                color: '#fff',

                            }
                        }
                    }
                },
                data: [98, 77, 101, 99, 40, 30, 50]
            }

        ]
}
// start::zoomBar

export const zoomBar = {
    title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
        data: ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'],
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: zoomBarData.dataShadow,
            animation: false
        },
        {
            type: 'bar',
           
            data: data
        }
    ]
}
// start::basicDoughnut
export const basicDoughnut = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      color: ['#c13018', '#f36e12', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'],
      tooltip: {
          show: false,
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      xAxis: [{

              axisLine: {
                  show: false
              },
              splitLine: {
                  show: false
              }
          }

      ],
      yAxis: [{

              axisLine: {
                  show: false
              },
              splitLine: {
                  show: false
              }
          }

      ],

      series: [{
              name: 'Sessions',
              type: 'pie',
              radius: ['80%', '50%'],
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              hoverOffset: 5,
              label: {
                  normal: {
                      show: false,
                      position: 'center',
                      textStyle: {
                          fontSize: '13',
                          fontWeight: 'normal'
                      },
                      formatter: "{a}",
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '15',
                          fontWeight: 'bold'
                      },
                      formatter: "{b} \n{c} ({d}%)",
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  { value: 335, name: 'Organic' },
                  { value: 310, name: 'Search Eng.' },
                  { value: 234, name: 'Email' },
                  { value: 135, name: 'Referal' },
                  { value: 148, name: 'Social' },
                  { value: 548, name: 'Others' }
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }

      ]
}
// start::gaugeStart
export const gaugeStart = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]

}
// setInterval(function () {
//     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     myChart.setOption(option, true);
// },2000);
// start::basicArea
export const basicArea = {
          tooltip: {
            trigger: 'axis',

            axisPointer: {
                animation: true
            }
        },
        grid: {
            left: '4%',
            top: '4%',
            right: '3%',
            bottom: '10%'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
                'Nov', 'Dec'
            ],
            axisLabel: {
                formatter: '{value}',
                color: dark_heading,
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 400,

            },
            axisLine: {
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value}k',
                color: dark_heading,
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 400,

            },
            axisLine: {
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: dark_heading,
                    width: 1
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 1,
                    opacity: 0.5
                }
            }
        },
        series: [{
            name: 'Visit',
            type: 'line',
            smooth: true,
            data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95
            ],
            symbolSize: 8,
            showSymbol: false,
            lineStyle: {
                color: 'rgb(255, 87, 33)',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                show: false,
                color: '#ff5721',
                borderColor: '#ff5721',
                borderWidth: 1.5
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 87, 33, 1)'
                        }, {
                            offset: 0.3,
                            color: 'rgba(255, 87, 33, 0.7)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 87, 33, 0)'
                        }]
                    }
                }
            }
        }]
}
// start::stackedArea
export const stackedArea = {
                  tooltip: {
                    trigger: 'axis',

                    axisPointer: {
                        animation: true
                    }
                },
                grid: {
                    left: '4%',
                    top: '4%',
                    right: '3%',
                    bottom: '10%'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
                        'Nov', 'Dec'
                    ],
                    axisLabel: {
                        formatter: '{value}',
                        color: dark_heading,
                        fontSize: 12,
                        fontStyle: 'normal',
                        fontWeight: 400,

                    },
                    axisLine: {
                        lineStyle: {
                            color: dark_heading,
                            width: 1
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: dark_heading,
                            width: 1
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: dark_heading,
                            width: 1
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 200,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}k',
                        color: dark_heading,
                        fontSize: 12,
                        fontStyle: 'normal',
                        fontWeight: 400,

                    },
                    axisLine: {
                        lineStyle: {
                            color: dark_heading,
                            width: 1
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: dark_heading,
                            width: 1
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#ddd',
                            width: 1,
                            opacity: 0.5
                        }
                    }
                },
                series: [{
                        name: 'Visit',
                        type: 'line',
                        smooth: true,
                        data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                            140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                            135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95
                        ],
                        symbolSize: 8,
                        showSymbol: false,
                        lineStyle: {
                            color: 'rgb(255, 87, 33)',
                            opacity: 1,
                            width: 1.5,
                        },
                        itemStyle: {
                            show: false,
                            color: '#ff5721',
                            borderColor: '#ff5721',
                            borderWidth: 1.5
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(255, 87, 33, 1)'
                                    }, {
                                        offset: 0.3,
                                        color: 'rgba(255, 87, 33, 0.7)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(255, 87, 33, 0)'
                                    }]
                                }
                            }
                        }
                    },
                    {
                        name: 'Sales',
                        type: 'line',
                        smooth: true,
                        data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
                            104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
                            70, 65, 86, 75, 80, 70, 50, 70
                        ],
                        symbolSize: 8,
                        showSymbol: false,
                        lineStyle: {
                            color: 'rgb(95, 107, 194)',
                            opacity: 1,
                            width: 1.5,
                        },
                        itemStyle: {
                            color: '#5f6cc1',
                            borderColor: '#5f6cc1',
                            borderWidth: 1.5
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(95, 107, 194, 1)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(95, 107, 194, 0.7)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(95, 107, 194, 0)'
                                    }]
                                }
                            }
                        }
                    },
                ]
}
 // start::stackedPointerArea
export const stackedPointerArea = {
        tooltip: {
          trigger: 'axis',

          axisPointer: {
              animation: true
          }
      },
      grid: {
          left: '4%',
          top: '4%',
          right: '3%',
          bottom: '10%'
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
              '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
              '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
              '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
          ],
          axisLabel: {
              formatter: '{value}',
              color: dark_heading,
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 400,

          },
          axisLine: {
              lineStyle: {
                  color: dark_heading,
                  width: 1
              }
          },
          axisTick: {
              lineStyle: {
                  color: dark_heading,
                  width: 1
              }
          },
          splitLine: {
              show: false,
              lineStyle: {
                  color: dark_heading,
                  width: 1
              }
          }
      },
      yAxis: {
          type: 'value',
          min: 0,
          max: 200,
          interval: 50,
          axisLabel: {
              formatter: '{value}k',
              color: dark_heading,
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 400,

          },
          axisLine: {
              lineStyle: {
                  color: dark_heading,
                  width: 1
              }
          },
          axisTick: {
              lineStyle: {
                  color: dark_heading,
                  width: 1
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#ddd',
                  width: 1,
                  opacity: 0.5
              }
          }
      },
      series: [{
              name: 'Impression',
              type: 'line',
              smooth: true,
              data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                  140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                  135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95
              ],
              symbolSize: 8,
              lineStyle: {
                  color: 'rgb(255, 87, 33)',
                  opacity: 1,
                  width: 1.5,
              },
              itemStyle: {
                  color: '#ff5721',
                  borderColor: '#ff5721',
                  borderWidth: 1.5
              },
              areaStyle: {
                  normal: {
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(255, 87, 33, 1)'
                          }, {
                              offset: 0.3,
                              color: 'rgba(255, 87, 33, 0.7)'
                          }, {
                              offset: 1,
                              color: 'rgba(255, 87, 33, 0)'
                          }]
                      }
                  }
              }
          },
          {
              name: 'Clicks',
              type: 'line',
              smooth: true,
              data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
                  104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
                  70, 65, 86, 75, 80, 70, 50, 70
              ],
              symbolSize: 8,
              lineStyle: {
                  color: 'rgb(95, 107, 194)',
                  opacity: 1,
                  width: 1.5,
              },
              itemStyle: {
                  color: '#5f6cc1',
                  borderColor: '#5f6cc1',
                  borderWidth: 1.5
              },
              areaStyle: {
                  normal: {
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(95, 107, 194, 1)'
                          }, {
                              offset: 0.5,
                              color: 'rgba(95, 107, 194, 0.7)'
                          }, {
                              offset: 1,
                              color: 'rgba(95, 107, 194, 0)'
                          }]
                      }
                  }
              }
          },
      ]
}
// start::solidArea
export const solidArea ={
          tooltip: {
            show: true,
            trigger: 'axis'
        },
        grid: {
            top: '3%',
            left: '1%',
            right: '1%',
            bottom: '3%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'],
            axisLabel: {
                show: true,
                color: '#639',
                interval: 5,
                inside: false,
                align: 'center'
            },
            axisLine: {
                color: '#999',
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                interval: 0,
                lineStyle: {
                    color: '#999'
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 7,
            interval: 5,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            type: 'line',
            data: [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4],
            smooth: true,
            showSymbol: false,
            itemStyle: {
                borderColor: '#639',
                color: ['#639']
            },
            lineStyle: {
                opacity: 1,
                width: 1,
                color: ['#639']
            },
            areaStyle: {
                opacity: 1,
                color: ['#639']
            }
        }]
}
 // start::basicPie
export const basicPie ={
  color: ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{

                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],

            series: [{
                    name: 'Sales by Countries',
                    type: 'pie',
                    radius:'50%',
                    center:  '50%',
                    data: [{
                            value: 335,
                            name: 'USA'
                        },
                        {
                            value: 310,
                            name: 'BD'
                        },
                        {
                            value: 234,
                            name: 'China'
                        },
                        {
                            value: 135,
                            name: 'UK'
                        },
                        {
                            value: 148,
                            name: 'Span'
                        },
                        {
                            value: 548,
                            name: 'Iran'
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }

            ]
}

// start::stackedPie
export const stackedPie = {
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              color: ['#639', '#63845', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'],

              tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },

              visualMap: {
                  show: false,
                  min: 80,
                  max: 600,
                  inRange: {
                      colorLightness: [0, 1]
                  }
              },
              series: [{
                  name: 'Source',
                  type: 'pie',
                  radius: '50%',
                  center: '50%',
                  data: [{
                          value: 335,
                          name: 'Direct '
                      },
                      {
                          value: 310,
                          name: 'Email '
                      },
                      {
                          value: 274,
                          name: ' Referal'
                      },
                      {
                          value: 235,
                          name: ' Ads'
                      },
                      {
                          value: 400,
                          name: 'Search '
                      }
                  ].sort(function(a, b) {
                      return a.value - b.value;
                  }),
                  roseType: 'radius',
                  label: {
                      normal: {
                          textStyle: {
                              color: dark_heading
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          lineStyle: {
                              color: '#333'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgb(102, 51, 153)',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.0)'
                      }
                  },

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function(idx) {
                      return Math.random() * 200;
                  }
              }]
}
// start::bubbleChart


var data = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];
export const bubbleChart = {

    // title: {
    //     text: '1990 与 2015 年各国家人均寿命与 GDP'
    // },
    // legend: {
    //     right: 10,
    //     data: ['1990', '2015']
    // },
    // xAxis: {
    //     splitLine: {
    //         lineStyle: {
    //             type: 'dashed'
    //         }
    //     }
    // },
    // yAxis: {
    //     splitLine: {
    //         lineStyle: {
    //             type: 'dashed'
    //         }
    //     },
    //     scale: true
    // },
    // series: [{
    //     name: '1990',
    //     data: data[0],
    //     type: 'scatter',
    //     symbolSize: function (data) {
    //         return Math.sqrt(data[2]) / 5e2;
    //     },
    //     label: {
    //         emphasis: {
    //             show: true,
    //             formatter: function (param) {
    //                 return param.data[3];
    //             },
    //             position: 'top'
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(120, 36, 50, 0.5)',
    //             shadowOffsetY: 5,
    //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //                 offset: 0,
    //                 color: 'rgb(251, 118, 123)'
    //             }, {
    //                 offset: 1,
    //                 color: 'rgb(204, 46, 72)'
    //             }])
    //         }
    //     }
    // }, {
    //     name: '2015',
    //     data: data[1],
    //     type: 'scatter',
    //     symbolSize: function (data) {
    //         return Math.sqrt(data[2]) / 5e2;
    //     },
    //     label: {
    //         emphasis: {
    //             show: true,
    //             formatter: function (param) {
    //                 return param.data[3];
    //             },
    //             position: 'top'
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(25, 100, 150, 0.5)',
    //             shadowOffsetY: 5,
    //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //                 offset: 0,
    //                 color: 'rgb(129, 227, 238)'
    //             }, {
    //                 offset: 1,
    //                 color: 'rgb(25, 183, 207)'
    //             }])
    //         }
    //     }
    // }]
}
// start::echart1
export const echart1 = {   
                series: [{
                    type:'line',
                    data: [30, 10, 40, 10, 40, 20, 90],
                    // ...echartOptions.smoothLine,
                    markArea: {
                        label: {
                            show: true
                        }
                    },
                    areaStyle: {
                        color: 'rgba(255, 193, 7, 0.2)',
                        origin: 'start'
                    },
                    lineStyle: {
                        color: '#FFC107'
                    },
                    itemStyle: {
                        color: '#FFC107'
                    }
                }]
            
     
        
    
}




