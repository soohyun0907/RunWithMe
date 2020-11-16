var toolTipBg="#262c49";

import { 
  scatterDatetimeChild,
  dataSeries,
  generateDayWiseTimeSeries,
  randomizeArray,
  sparklineData,

 
 } from '@/data/apexDataSeries'



export const apexDemo = {
    chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }]
}

// start::basicArea
export const basicArea = {

    
      chartOptions: {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        series: [{
          name: "STOCK ABC",
          data: dataSeries.monthDataSeries1.prices
        }],
        labels: dataSeries.monthDataSeries1.dates,
        title: {
          text: '',
          align: 'left'
        },
        subtitle: {
          text: '',
          align: 'right'
        },
   
       
        legend: {
          horizontalAlign: 'left'
        }
      },
    
}

export const splineArea = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },


        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
            "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
            "2018-09-19T06:30:00"
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },

        }
      }
}
// start::datetime X-axis
export const dateTimeXaxis = {
    series: [{
        data: [
          [1327359600000,30.95],
          [1327446000000,31.34],
          [1327532400000,31.18],
          [1327618800000,31.05],
          [1327878000000,31.00],
          [1327964400000,30.95],
          [1328050800000,31.24],
          [1328137200000,31.29],
          [1328223600000,31.85],
          [1328482800000,31.86],
          [1328569200000,32.28],
          [1328655600000,32.10],
          [1328742000000,32.65],
          [1328828400000,32.21],
          [1329087600000,32.35],
          [1329174000000,32.44],
          [1329260400000,32.46],
          [1329346800000,32.86],
          [1329433200000,32.75],
          [1329778800000,32.54],
          [1329865200000,32.33],
          [1329951600000,32.97],
          [1330038000000,33.41],
          [1330297200000,33.27],
          [1330383600000,33.27],
          [1330470000000,32.89],
          [1330556400000,33.10],
          [1330642800000,33.73],
          [1330902000000,33.22],
          [1330988400000,31.99],
          [1331074800000,32.41],
          [1331161200000,33.05],
          [1331247600000,33.64],
          [1331506800000,33.56],
          [1331593200000,34.22],
          [1331679600000,33.77],
          [1331766000000,34.17],
          [1331852400000,33.82],
          [1332111600000,34.51],
          [1332198000000,33.16],
          [1332284400000,33.56],
          [1332370800000,33.71],
          [1332457200000,33.81],
          [1332712800000,34.40],
          [1332799200000,34.63],
          [1332885600000,34.46],
          [1332972000000,34.48],
          [1333058400000,34.31],
          [1333317600000,34.70],
          [1333404000000,34.31],
          [1333490400000,33.46],
          [1333576800000,33.59],
          [1333922400000,33.22],
          [1334008800000,32.61],
          [1334095200000,33.01],
          [1334181600000,33.55],
          [1334268000000,33.18],
          [1334527200000,32.84],
          [1334613600000,33.84],
          [1334700000000,33.39],
          [1334786400000,32.91],
          [1334872800000,33.06],
          [1335132000000,32.62],
          [1335218400000,32.40],
          [1335304800000,33.13],
          [1335391200000,33.26],
          [1335477600000,33.58],
          [1335736800000,33.55],
          [1335823200000,33.77],
          [1335909600000,33.76],
          [1335996000000,33.32],
          [1336082400000,32.61],
          [1336341600000,32.52],
          [1336428000000,32.67],
          [1336514400000,32.52],
          [1336600800000,31.92],
          [1336687200000,32.20],
          [1336946400000,32.23],
          [1337032800000,32.33],
          [1337119200000,32.36],
          [1337205600000,32.01],
          [1337292000000,31.31],
          [1337551200000,32.01],
          [1337637600000,32.01],
          [1337724000000,32.18],
          [1337810400000,31.54],
          [1337896800000,31.60],
          [1338242400000,32.05],
          [1338328800000,31.29],
          [1338415200000,31.05],
          [1338501600000,29.82],
          [1338760800000,30.31],
          [1338847200000,30.70],
          [1338933600000,31.69],
          [1339020000000,31.32],
          [1339106400000,31.65],
          [1339365600000,31.13],
          [1339452000000,31.77],
          [1339538400000,31.79],
          [1339624800000,31.67],
          [1339711200000,32.39],
          [1339970400000,32.63],
          [1340056800000,32.89],
          [1340143200000,31.99],
          [1340229600000,31.23],
          [1340316000000,31.57],
          [1340575200000,30.84],
          [1340661600000,31.07],
          [1340748000000,31.41],
          [1340834400000,31.17],
          [1340920800000,32.37],
          [1341180000000,32.19],
          [1341266400000,32.51],
          [1341439200000,32.53],
          [1341525600000,31.37],
          [1341784800000,30.43],
          [1341871200000,30.44],
          [1341957600000,30.20],
          [1342044000000,30.14],
          [1342130400000,30.65],
          [1342389600000,30.40],
          [1342476000000,30.65],
          [1342562400000,31.43],
          [1342648800000,31.89],
          [1342735200000,31.38],
          [1342994400000,30.64],
          [1343080800000,30.02],
          [1343167200000,30.33],
          [1343253600000,30.95],
          [1343340000000,31.89],
          [1343599200000,31.01],
          [1343685600000,30.88],
          [1343772000000,30.69],
          [1343858400000,30.58],
          [1343944800000,32.02],
          [1344204000000,32.14],
          [1344290400000,32.37],
          [1344376800000,32.51],
          [1344463200000,32.65],
          [1344549600000,32.64],
          [1344808800000,32.27],
          [1344895200000,32.10],
          [1344981600000,32.91],
          [1345068000000,33.65],
          [1345154400000,33.80],
          [1345413600000,33.92],
          [1345500000000,33.75],
          [1345586400000,33.84],
          [1345672800000,33.50],
          [1345759200000,32.26],
          [1346018400000,32.32],
          [1346104800000,32.06],
          [1346191200000,31.96],
          [1346277600000,31.46],
          [1346364000000,31.27],
          [1346709600000,31.43],
          [1346796000000,32.26],
          [1346882400000,32.79],
          [1346968800000,32.46],
          [1347228000000,32.13],
          [1347314400000,32.43],
          [1347400800000,32.42],
          [1347487200000,32.81],
          [1347573600000,33.34],
          [1347832800000,33.41],
          [1347919200000,32.57],
          [1348005600000,33.12],
          [1348092000000,34.53],
          [1348178400000,33.83],
          [1348437600000,33.41],
          [1348524000000,32.90],
          [1348610400000,32.53],
          [1348696800000,32.80],
          [1348783200000,32.44],
          [1349042400000,32.62],
          [1349128800000,32.57],
          [1349215200000,32.60],
          [1349301600000,32.68],
          [1349388000000,32.47],
          [1349647200000,32.23],
          [1349733600000,31.68],
          [1349820000000,31.51],
          [1349906400000,31.78],
          [1349992800000,31.94],
          [1350252000000,32.33],
          [1350338400000,33.24],
          [1350424800000,33.44],
          [1350511200000,33.48],
          [1350597600000,33.24],
          [1350856800000,33.49],
          [1350943200000,33.31],
          [1351029600000,33.36],
          [1351116000000,33.40],
          [1351202400000,34.01],
          [1351638000000,34.02],
          [1351724400000,34.36],
          [1351810800000,34.39],
          [1352070000000,34.24],
          [1352156400000,34.39],
          [1352242800000,33.47],
          [1352329200000,32.98],
          [1352415600000,32.90],
          [1352674800000,32.70],
          [1352761200000,32.54],
          [1352847600000,32.23],
          [1352934000000,32.64],
          [1353020400000,32.65],
          [1353279600000,32.92],
          [1353366000000,32.64],
          [1353452400000,32.84],
          [1353625200000,33.40],
          [1353884400000,33.30],
          [1353970800000,33.18],
          [1354057200000,33.88],
          [1354143600000,34.09],
          [1354230000000,34.61],
          [1354489200000,34.70],
          [1354575600000,35.30],
          [1354662000000,35.40],
          [1354748400000,35.14],
          [1354834800000,35.48],
          [1355094000000,35.75],
          [1355180400000,35.54],
          [1355266800000,35.96],
          [1355353200000,35.53],
          [1355439600000,37.56],
          [1355698800000,37.42],
          [1355785200000,37.49],
          [1355871600000,38.09],
          [1355958000000,37.87],
          [1356044400000,37.71],
          [1356303600000,37.53],
          [1356476400000,37.55],
          [1356562800000,37.30],
          [1356649200000,36.90],
          [1356908400000,37.68],
          [1357081200000,38.34],
          [1357167600000,37.75],
          [1357254000000,38.13],
          [1357513200000,37.94],
          [1357599600000,38.14],
          [1357686000000,38.66],
          [1357772400000,38.62],
          [1357858800000,38.09],
          [1358118000000,38.16],
          [1358204400000,38.15],
          [1358290800000,37.88],
          [1358377200000,37.73],
          [1358463600000,37.98],
          [1358809200000,37.95],
          [1358895600000,38.25],
          [1358982000000,38.10],
          [1359068400000,38.32],
          [1359327600000,38.24],
          [1359414000000,38.52],
          [1359500400000,37.94],
          [1359586800000,37.83],
          [1359673200000,38.34],
          [1359932400000,38.10],
          [1360018800000,38.51],
          [1360105200000,38.40],
          [1360191600000,38.07],
          [1360278000000,39.12],
          [1360537200000,38.64],
          [1360623600000,38.89],
          [1360710000000,38.81],
          [1360796400000,38.61],
          [1360882800000,38.63],
          [1361228400000,38.99],
          [1361314800000,38.77],
          [1361401200000,38.34],
          [1361487600000,38.55],
          [1361746800000,38.11],
          [1361833200000,38.59],
          [1361919600000,39.60],
        ]
      }],
      chartOptions: {
        annotations: {
          yaxis: [{
            y: 30,
            borderColor: '#999',
            label: {
              show: true,
              text: 'Support',
              style: {
                color: "#fff",
                background: '#00E396'
              }
            }
          }],
          xaxis: [{
            x: new Date('14 Nov 2012').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Rally',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },

        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: new Date('01 Mar 2012').getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
      }
}
// start::area with negative values
export const negativeArea = {
    series: [{
        name: 'north',
        data: [{
            x: 1996,
            y: 322
          },
          {
            x: 1997,
            y: 324
          },
          {
            x: 1998,
            y: 329
          },
          {
            x: 1999,
            y: 342
          },
          {
            x: 2000,
            y: 348
          },
          {
            x: 2001,
            y: 334
          },
          {
            x: 2002,
            y: 325
          },
          {
            x: 2003,
            y: 316
          },
          {
            x: 2004,
            y: 318
          },
          {
            x: 2005,
            y: 330
          },
          {
            x: 2006,
            y: 355
          },
          {
            x: 2007,
            y: 366
          },
          {
            x: 2008,
            y: 337
          },
          {
            x: 2009,
            y: 352
          },
          {
            x: 2010,
            y: 377
          },
          {
            x: 2011,
            y: 383
          },
          {
            x: 2012,
            y: 344
          },
          {
            x: 2013,
            y: 366
          },
          {
            x: 2014,
            y: 389
          },
          {
            x: 2015,
            y: 334
          }
        ]
      }, {
        name: 'south',
        data: [

          {
            x: 1996,
            y: 162
          },
          {
            x: 1997,
            y: 90
          },
          {
            x: 1998,
            y: 50
          },
          {
            x: 1999,
            y: 77
          },
          {
            x: 2000,
            y: 35
          },
          {
            x: 2001,
            y: -45
          },
          {
            x: 2002,
            y: -88
          },
          {
            x: 2003,
            y: -120
          },
          {
            x: 2004,
            y: -156
          },
          {
            x: 2005,
            y: -123
          },
          {
            x: 2006,
            y: -88
          },
          {
            x: 2007,
            y: -66
          },
          {
            x: 2008,
            y: -45
          },
          {
            x: 2009,
            y: -29
          },
          {
            x: 2010,
            y: -45
          },
          {
            x: 2011,
            y: -88
          },
          {
            x: 2012,
            y: -132
          },
          {
            x: 2013,
            y: -146
          },
          {
            x: 2014,
            y: -169
          },
          {
            x: 2015,
            y: -184
          }
        ]
      }],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },

        title: {
          text: 'Area with Negative Values',
          align: 'left',
          style: {
            fontSize: '14px'
          }
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 4,
          floating: false,

          labels: {
            style: {
              color: '#8e8da4',
            },
            offsetY: -7,
            offsetX: 0,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 0.5
        },
        tooltip: {
          x: {
            format: "yyyy",
          },
          fixed: {
            enabled: false,
            position: 'topRight'
          }
        },
        grid: {
          yaxis: {
            lines: {
              offsetX: -30
            }
          },
          padding: {
            left: 20
          }
        },
      }
}

// start::stackedArea
export const stackedArea = {
 
  
    chartOptions: {
      chart: {
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min))
          }
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
    }
    
}

export const nullAreaChart = {
    series: [{
        name: 'Network',
        data: [{
            x: 'Dec 23 2017',
            y: null
          },
          {
            x: 'Dec 24 2017',
            y: 44
          },
          {
            x: 'Dec 25 2017',
            y: 31
          },
          {
            x: 'Dec 26 2017',
            y: 38
          },
          {
            x: 'Dec 27 2017',
            y: null
          },
          {
            x: 'Dec 28 2017',
            y: 32
          },
          {
            x: 'Dec 29 2017',
            y: 55
          },
          {
            x: 'Dec 30 2017',
            y: 51
          },
          {
            x: 'Dec 31 2017',
            y: 67
          },
          {
            x: 'Jan 01 2018',
            y: 22
          },
          {
            x: 'Jan 02 2018',
            y: 34
          },
          {
            x: 'Jan 03 2018',
            y: null
          },
          {
            x: 'Jan 04 2018',
            y: null
          },
          {
            x: 'Jan 05 2018',
            y: 11
          },
          {
            x: 'Jan 06 2018',
            y: 4
          },
          {
            x: 'Jan 07 2018',
            y: 15,
          },
          {
            x: 'Jan 08 2018',
            y: null
          },
          {
            x: 'Jan 09 2018',
            y: 9
          },
          {
            x: 'Jan 10 2018',
            y: 34
          },
          {
            x: 'Jan 11 2018',
            y: null
          },
          {
            x: 'Jan 12 2018',
            y: null
          },
          {
            x: 'Jan 13 2018',
            y: 13
          },
          {
            x: 'Jan 14 2018',
            y: null
          }
        ],
      }],
      chartOptions: {
        chart: {
          animations: {
            enabled: false
          },
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },

        fill: {
          opacity: 0.8,
          type: 'pattern',
          pattern: {
            enabled: true,
            style: ['verticalLines', 'horizontalLines'],
            width: 5,
            depth: 6
          },
        },
        markers: {
          size: 5,
          hover: {
            size: 9
          }
        },
        title: {
          text: '',
        },
        tooltip: {
          intersect: true,
          shared: false
        },
        theme: {
          palette: 'palette1'
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Bytes Received'
          }
        }
      }
}

// start::basic bar chart
export const basicBarChart = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: true,
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      }
}

// start::groupedBar
export const groupedBar = {
  series: [{
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
    data: [53, 32, 33, 52, 13, 44, 32]
  }],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },

    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  }
}

// start::stackedbar
export const stackedbar = {
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
  chartOptions: {
    chart: {
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: 'rounded'
      },

    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },

   
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1

    },

    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  }
}

// start::negativeBar
export const negativeBar = {
    series: [{
      name: 'Males',
      data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
        3.9, 3.5, 3
      ]
    },
    {
      name: 'Females',
      data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
        -4.1, -4, -4.1, -3.4, -3.1, -2.8
      ]
    }
  ],
  chartOptions: {
    chart: {
      stacked: true
    },
    colors: ['#008FFB', '#FF4560'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
        endingShape: 'rounded'

      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },

    grid: {
      xaxis: {
        showLines: false
      }
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        // text: 'Age',
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val
        }
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%"
        }
      }
    },
 
    xaxis: {
      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
        '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
        '0-4'
      ],
      title: {
        text: 'Percent'
      },
      labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val)) + "%"
        }
      }
    },
}
}

// start::customDataLabelBar
export const customDataLabelBar = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  chartOptions: {
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
        endingShape: 'rounded'
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
      '#f48024', '#69d2e7'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },

    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'India'
      ],
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    // title: {
    //     text: 'Custom DataLabels',
    //     align: 'center',
    //     floating: true
    // },
    // subtitle: {
    //     text: 'Category Names as DataLabels inside bars',
    //     align: 'center',
    // },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
  }
}

// start::PatternedBar
export const patternedBar = {
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }],
  chartOptions: {
    chart: {
      stacked: true,
      shadow: {
        enabled: true,
        blur: 1,
        opacity: 0.5
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
    },
  
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    yaxis: {
     
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      type: 'pattern',
      opacity: 1,
      pattern: {
        style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

      }
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    legend: {
      position: 'right',
      offsetY: 40
    }
  }
}

// start::basicColumn-chart
export const basicColumnChart = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'	
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },

    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    colors: ['#62549c', '#7566b5', '#7d6cbb',],
  }
}

// start::columnDataLabels

export const columnDataLabels = {
  series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
  chartOptions: {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'top',
      labels: {
        offsetY: -18,

      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35,

      }
    },
    fill: {
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      },
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }

    },
    title: {
      text: 'Monthly Inflation in Argentina, 2002',
      floating: true,
      offsetY: 320,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  }
}

// start::stackedColumn
export const stackedColumn = {
  series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43, 21, 49]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 33, 12]
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
  }],
  chartOptions: {
    chart: {
      stacked: true,
      stackType: '100%'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
        '2012 Q3', '2012 Q4'
      ],
    },
    fill: {
      opacity: 1
    },

    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50
    }
  }
}

// start::negativeColumn
export const negativeColumn = {
  series: [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
      5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
      48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
    ]
  }],
  chartOptions: {
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: '#F15B46'
          }, {
            from: -45,
            to: 0,
            color: '#FEB019'
          }]
        },
        columnWidth: '80%',
      }
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'Growth',
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "%";
        }
      }
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
        '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
        '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
        '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
        '2013-07-01', '2013-08-01', '2013-09-01'
      ],
      labels: {
        rotate: -90
      }
    }
  }
}

// start::distributedColumnChart
export const distributedColumnChart = {
  chartOptions: {
    chart: {
      height: 350,
      type: 'bar',
   
  },
  colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
  plotOptions: {
      bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded'
      }
  },
  dataLabels: {
      enabled: false,
  },
  series: [{
      data: [21, 22, 10, 28, 16, 21, 13, 30]
  }],
  xaxis: {
      categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
      labels: {
          style: {
              colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
              fontSize: '14px'
          }
      }
  }

  }
     
}

// start::basicLineChart
export const basicLineChart = {
 
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chartOptions: {
      chart: {
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }
  }


// start::lineChartWIthDataLabel
export const lineChartWIthDataLabel = {
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ],
    chartOptions: {
      chart: {
        shadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
    
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      markers: {
        
        size: 6
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 5,
        max: 40
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    }
}


// start::zoomableLineChart
// var ts2 = 1484418600000;
// var dates = [];
// var spikes = [5, -5, 3, -3, 8, -8]
// for (var i = 0; i < 120; i++) {
//   ts2 = ts2 + 86400000;
//   var innerArr = [ts2, dataSeries[1][i].value];
//   dates.push(innerArr)
// }


// export const zoomableLineChart = {
//   series: [{
//     name: 'XYZ MOTORS',
//     data: dates
//   }],
//   chartOptions: {
//     chart: {
//       stacked: false,
//       zoom: {
//         type: 'x',
//         enabled: true
//       },
//       toolbar: {
//         autoSelected: 'zoom'
//       }
//     },
//     plotOptions: {
//       line: {
//         curve: 'smooth',
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },

//     markers: {
//       size: 0,
//       style: 'full',
//     },
//     //colors: ['#0165fc'],
//     title: {
//       text: 'Stock Price Movement',
//       align: 'left'
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shadeIntensity: 1,
//         inverseColors: false,
//         opacityFrom: 0.5,
//         opacityTo: 0,
//         stops: [0, 90, 100]
//       },
//     },
//     yaxis: {
//       min: 20000000,
//       max: 250000000,
//       labels: {
//         formatter: function (val) {
//           return (val / 1000000).toFixed(0);
//         },
//       },
//       title: {
//         text: 'Price'
//       },
//     },
//     xaxis: {
//       type: 'datetime',
//     },

//     tooltip: {
//       shared: false,
//       y: {
//         formatter: function (val) {
//           return (val / 1000000).toFixed(0)
//         }
//       }
//     }
//   }
// }
// start::gradientLineChart
export const gradientLineChart = {
  series: [{
    name: 'Likes',
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
  }],
  chartOptions: {
    chart: {
      type: 'line',
      shadow: {
        enabled: false,
        color: '#bbb',
        top: 3,
        left: 2,
        blur: 3,
        opacity: 1
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth'
    },

    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000',
        '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001',
        '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'
      ],
    },
  
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: ["#FFA41B"],
      strokeColor: "#fff",
      strokeWidth: 2,
       
      hover: {
        size: 7,
      }
    },
    yaxis: {
      min: -10,
      max: 40,
      title: {
        text: 'Engagement',
      },
    }
  }
}

// start::dashedLineChart
export const dashedLineChart = {
  series: [{
    name: "Session Duration",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Total Visits',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }
],
chartOptions: {
  chart: {
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 7, 5],
    curve: 'straight',
    dashArray: [0, 8, 5]
  },

 
  markers: {
    size: 0,
    
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
      '10 Jan', '11 Jan', '12 Jan'
    ],
  },
  tooltip: {
    y: [{
      title: {
        formatter: function (val) {
          return val + " (mins)"
        }
      }
    }, {
      title: {
        formatter: function (val) {
          return val + " per session"
        }
      }
    }, {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }]
  },
  grid: {
    borderColor: '#f1f1f1',
  }
}
}

// start::brushLineChart
export const brushLineChart = {
  series: [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
      min: 30,
      max: 90
    })
  }],
  chartOptionsArea: {
    chart: {
      id: 'chartArea',
      toolbar: {
        autoSelected: 'pan',
        show: false
      }
    },
    colors: ['#546E7A'],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    }
  },
  chartOptionsBrush: {
    chart: {
      id: 'chartBrush',
      brush: {
        target: 'chartArea',
        enabled: true
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date('19 Jun 2017').getTime(),
          max: new Date('14 Aug 2017').getTime()
        }
      },
    },
    colors: ['#008FFB'],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      }
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2
    }
  }



}

// start::lineColumn
export const lineColumn = {
    series: [{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chartOptions: {
      stroke: {
        width: [0, 4]
      },
      title: {
        text: ''
      },
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001',
        '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'
      ],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },

      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]
    }
}

// start::multipleYxis
export const multipleYxis = {
  series: [{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
  chartOptions: {
    dataLabels: {
      enabled: false
    },

    stroke: {
      width: [1, 1, 4]
    },
  
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [{
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            color: '#008FFB',
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },

      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019'
        },
        labels: {
          style: {
            color: '#FEB019',
          },
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: '#FEB019',
          }
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  }
}

// start::lineArea
export const lineArea = {
  series: [{
    name: 'TEAM A',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'TEAM B',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
  chartOptions: {
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
    },
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ',
      'Dec 10', 'Dec 11'
    ],
    markers: {
      size: 0
    },
    yaxis: [{
        title: {
          text: 'Series A',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Series B',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;

        }
      }
    }
  }
}

// start::lineColumnArea
export const lineColumnArea = {

  series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  chartOptions: {
    chart: {
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
      '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;

        }
      }
    }
  }
}

// start::simplePie
export const simplePie = {
  series: [44, 55, 13, 43, 22],
        chartOptions: {
          legend: {
            position: 'bottom',

        },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
}

// start::simpleDonut
export const simpleDonut = {
  series: [44, 55, 41, 17, 15],
  
  chartOptions: {
    legend: {
      position: 'bottom',

  },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
}


// start::monochromePie
export const monochromePie = {
  series: [25, 15, 44, 55, 41, 17],
        chartOptions: {
          legend:{
            position: 'bottom'
          },
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          theme: {
            monochrome: {
              enabled: true
            }
          },
          title: {
            text: ""
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
}

// start::gradientDonut
export const gradientDonut = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    // legend: {
    //   formatter: function (val, opts) {
    //     return val + " - " + opts.w.globals.series[opts.seriesIndex]
    //   }
    // },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
}


// start::donutwithPattern
export const donutwithPattern = {
  series: [44, 55, 41, 17, 15],
        chartOptions: {
          legend: {
            position: 'bottom'
          },
          chart: {
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 3,
              blur: 3,
              opacity: 0.2
            }
          },
          stroke: {
            width: 0,
          },
          labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
          dataLabels: {
            dropShadow: {
              blur: 3,
              opacity: 0.8
            }
          },
          fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
              enabled: true,
              style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
          },
          states: {
            hover: {
              enabled: false
            }
          },
          theme: {
            palette: 'palette2'
          },
          title: {
            text: "Favourite Movie Type"
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
}

// start::basicRadar
export const basicRadar = {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
  }],
  chartOptions: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    title: {
        text: ''
    }
  }
}


// start::radarMultiSeries
export const radarMultiSeries = {
          series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
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
          title: {
              text: ''
          },
          stroke: {
              width: 0
          },
          fill: {
              opacity: 0.4
          },
          markers: {
              size: 0
          },
          labels: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
}

// start::radarwithPolygonFill
export const radarwithPolygonFill = {
        series: [{
          name: 'Series 1',
          data: [20, 100, 40, 30, 50, 80, 33],
      }],

      chartOptions: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          plotOptions: {
              radar: {
                  size: 140,
                  polygons: {
                      strokeColor: '#e9e9e9',
                      fill: {
                          colors: ['#f8f8f8', '#fff']
                      }
                  }
              }
          },
          title: {
              text: 'Radar with Polygon Fill'
          },
          colors: ['#FF4560'],
          markers: {
              size: 4,
              colors: ['#fff'],
              strokeColor: '#FF4560',
              strokeWidth: 2,
          },
          tooltip: {
              y: {
                  formatter: function(val) {
                      return val
                  }   
              }
          },
          yaxis: {
              tickAmount: 7,
              labels: {
                  formatter: function(val, i) {
                      if(i % 2 === 0) {
                          return val
                      } else {
                          return ''
                      }
                  }
              }
          }
      }
}

// start::simpleRadialBar
export const simpleRadialBar = {
    series: [70],
    chartOptions: {
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      labels: ['Cricket']
    }
}

// start::multipleRadialBar
export const multipleRadialBar = {
  series: [44, 55, 67, 83],
        chartOptions: {
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        }
}

// start::customAngleCircleChart
export const customAngleCircleChart = {
  series: [76, 67, 61, 90],
        chartOptions: {
          plotOptions: {
            radialBar: {
              offsetY: -10,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,

                },
                value: {
                  show: false,
                }
              }
            }
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          labels: ['Vimeo','Messenger','Facebook','LinkedIn'],
          legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'bottom',
            offsetX: 10,
            offsetY: 10,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                horizontal: 1,
            }
          },
          responsive: [{
              breakpoint: 480,
              options: {
                  legend: {
                      show: false
                  }
              }
          }]
        }
}

// start::gradientRadial
export const gradientRadial = {
  series: [75],
        chartOptions: {
          chart: {
            toolbar: {
              show: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },

              dataLabels: {
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Percent'],
        }
}

// start::strokedangularGauge
export const strokedangularGauge = {
  series: [67],
        chartOptions: {
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '16px',
                  color: undefined,
                  offsetY: 120
                },
                value: {
                  offsetY: 76,
                  fontSize: '22px',
                  color: undefined,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
            },
          },
          stroke: {
            dashArray: 4
          },
          labels: ['Median Ratio']
        }
}

// start::semiCircleGauge
export const semiCircleGauge = {
  series: [76],
        chartOptions: {
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: 15,
                  fontSize: '22px'
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
        }
}


// start::simpleScatter
export const simpleScatter = {

  series: [{
    name: "SAMPLE A",
    data: [
      [16.4, 5.4],
      [21.7, 2],
      [25.4, 3],
      [19, 2],
      [10.9, 1],
      [13.6, 3.2],
      [10.9, 7.4],
      [10.9, 0],
      [10.9, 8.2],
      [16.4, 0],
      [16.4, 1.8],
      [13.6, 0.3],
      [13.6, 0],
      [29.9, 0],
      [27.1, 2.3],
      [16.4, 0],
      [13.6, 3.7],
      [10.9, 5.2],
      [16.4, 6.5],
      [10.9, 0],
      [24.5, 7.1],
      [10.9, 0],
      [8.1, 4.7],
      [19, 0],
      [21.7, 1.8],
      [27.1, 0],
      [24.5, 0],
      [27.1, 0],
      [29.9, 1.5],
      [27.1, 0.8],
      [22.1, 2]
    ]
  }, {
    name: "SAMPLE B",
    data: [
      [6.4, 13.4],
      [1.7, 11],
      [5.4, 8],
      [9, 17],
      [1.9, 4],
      [3.6, 12.2],
      [1.9, 14.4],
      [1.9, 9],
      [1.9, 13.2],
      [1.4, 7],
      [6.4, 8.8],
      [3.6, 4.3],
      [1.6, 10],
      [9.9, 2],
      [7.1, 15],
      [1.4, 0],
      [3.6, 13.7],
      [1.9, 15.2],
      [6.4, 16.5],
      [0.9, 10],
      [4.5, 17.1],
      [10.9, 10],
      [0.1, 14.7],
      [9, 10],
      [12.7, 11.8],
      [2.1, 10],
      [2.5, 10],
      [27.1, 10],
      [2.9, 11.5],
      [7.1, 10.8],
      [2.1, 12]
    ]
  }, {
    name: "SAMPLE C",
    data: [
      [21.7, 3],
      [23.6, 3.5],
      [24.6, 3],
      [29.9, 3],
      [21.7, 20],
      [23, 2],
      [10.9, 3],
      [28, 4],
      [27.1, 0.3],
      [16.4, 4],
      [13.6, 0],
      [19, 5],
      [22.4, 3],
      [24.5, 3],
      [32.6, 3],
      [27.1, 4],
      [29.6, 6],
      [31.6, 8],
      [21.6, 5],
      [20.9, 4],
      [22.4, 0],
      [32.6, 10.3],
      [29.7, 20.8],
      [24.5, 0.8],
      [21.4, 0],
      [21.7, 6.9],
      [28.6, 7.7],
      [15.4, 0],
      [18.1, 0],
      [33.4, 0],
      [16.4, 0]
    ]
  }],
  chartOptions: {
    chart: {
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
        tickAmount: 10,
        labels: {
            formatter: function(val) {
                return parseFloat(val).toFixed(1)
            }
        }
    },
    yaxis: {
      tickAmount: 7
    }
  }
}

// start::scatterDatetime
export const scatterDatetime = {
  series: [{
    name: 'TEAM 1',
    data: scatterDatetimeChild(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'TEAM 2',
    data: scatterDatetimeChild(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'TEAM 3',
    data: scatterDatetimeChild(new Date('11 Feb 2017 GMT').getTime(), 30, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'TEAM 4',
    data: scatterDatetimeChild(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'TEAM 5',
    data: scatterDatetimeChild(new Date('11 Feb 2017 GMT').getTime(), 30, {
      min: 10,
      max: 60
    })
  },
],
chartOptions: {
  chart: {

    zoom: {
      type: 'xy'
    }
  },

  dataLabels: {
    enabled: false
  },
  grid: {
    xaxis: {
      showLines: true
    },
    yaxis: {
      showLines: true
    },
  },
  xaxis: {
    type: 'datetime',

  },
  yaxis: {
    max: 70
  }
}
}

// start::spark1
export const spark1 = {
  series: [ {
    name: 'series2',
    data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  
  chartOptions: {
    chart: {
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    
      fill: {
        opacity: 0.3,
    },
    stroke: {
      curve: 'straight',
      width: 1,
    },
    grid:{
      show:false
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
        "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
        "2018-09-19T06:30:00","2018-09-19T07:30:00","2018-09-19T08:30:00","2018-09-19T09:30:00","2018-09-19T10:30:00","2018-09-19T11:30:00","2018-09-19T12:30:00",
        "2018-09-19T13:30:00","2018-09-19T14:30:00","2018-09-19T15:30:00","2018-09-19T16:30:00","2018-09-19T17:30:00","2018-09-19T18:30:00","2018-09-19T19:30:00",
        "2018-09-19T20:30:00","2018-09-19T21:30:00","2018-09-19T22:30:00","2018-09-19T23:30:00",
      ],
      labels:{
        show:false
      }
    },
    yaxis:{
      labels:{
        show:false
      },
      min: 0
    },
   
    colors: ['#DCE6EC'],
    tooltip: {
      enabled: false,
      
      x: {
        format: 'dd/MM/yy HH:mm'
      },

    }
  }



}

// spark2
export const spark2 = {
  series: [ {
    name: 'series2',
    data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  
  chartOptions: {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    
    stroke: {
      curve: 'straight',
      width: 1,
    },
    fill: {
        opacity: 0.3,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 1
    },
    colors: ['#639'],
    }



}
// spark3
export const spark3 = {
  series: [ {
    name: 'series2',
    data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  
  chartOptions: {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    
    stroke: {
      curve: 'straight',
      width: 1,
    },
    fill: {
        opacity: 0.3,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors:['#663399']
    }



}
// spark4
export const spark4 = {
  series: [ {
    name: 'series2',
    data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'straight',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}
// spark5
export const spark5 = {
  series: [ {
    name: 'series2',
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}
// spark6
export const spark6 = {
  series: [ {
    name: 'series2',
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'straight',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}
// spark7
export const spark7 = {
  series: [ {
    name: 'series2',
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 30, 40, 50]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    colors: ['#72c2ff'],
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}
// spark8
export const spark8 = {
  series: [ {
    name: 'series2',
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 30, 50]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        
      }
    },
    colors: ['#08e5e8'],
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}
// spark9
export const spark9 = {
  series: [ {
    name: 'series2',
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
        endingShape: 'rounded'
      }
    },
    colors: ['#a890d3'],
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}
// spark10
export const spark10 = {
  series: [ {
    name: 'series2',
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 40, 60, 20]
  }],
  
  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    colors: ['#dd5e89'],
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          gradientToColors: ['#dd5e89'],
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9
            }
        },
    dataLabels: {
      enabled: false
    },
    marker: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 1,
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    
    }



}

// apexRadialBar
export const radialBar = {
  series: [76, 67, 61, 90],
  chartOptions: {
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,

          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX:'100%',
      offsetY: 5,
      labels: {
          useSeriesColors: true,
      },
      markers: {
          size: 0
      },
      formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
          horizontal: 1,
      }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
  }
}