import { Pie } from "vue-chartjs";

export const echart1 = {
    color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
    tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
    },
    series:[{
      name: 'Sales by Country',
      type: 'pie',
      radius: '60%',
      center: ['50%', '50%'],
      data: [
          { value: 535, name: '' },
          { value: 310, name: '' },
          { value: 234, name: '' },
          { value: 155, name: '' },
          { value: 130, name: '' },
          { value: 348, name: '' },
          
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

export const echart2 = {
    series: [{
        type:'pie',
        data: [30, 40, 20, 50, 40, 80, 90],
        // ...echartOptions.smoothLine,
        lineStyle: {
            color: '#4CAF50',
            // ...echartOptions.lineShadow
        },
        itemStyle: {
            color: '#4CAF50'
        }
    }]
    
}

export const echart3 = {
    grid: {
        show: false,
        top: 5,
        left: 0,
        right: 0,
        bottom: 0
    },
    color: ['#ff9800'],
    tooltip: {
        show: true,
        backgroundColor: '#000'
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
        data: [{
            name: 'Bar 1',
            value: 40
        }, {
            name: 'Bar 2',
            value: 60,
            itemStyle: {
                color: '#4CAF50'
            }
        }, {
            name: 'Bar 3',
            value: 80,
        }, {
            name: 'Bar 4',
            value: 70,
        }, {
            name: 'Bar 5',
            value: 60,
        }, {
            name: 'Bar 6',
            value: 70,
        }, {
            name: 'Bar 7',
            value: 80,
        }, {
            name: 'Bar 8',
            value: 40,
        }, {
            name: 'Bar 9',
            value: 70,
            
        }],
        label: {
            show: false,
            color: '#4CAF50'
        },
        type: 'bar',
        barWidth: '5%',
        smooth: true
    }]
}


export const echart4 = {
    grid: {
        show: false,
        top: 5,
        left: 0,
        right: 0,
        bottom: 0
    },
    color: ['#ff9800'],
    tooltip: {
        show: true,
        backgroundColor: '#000'
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
        data: [{
            name: 'Bar 1',
            value: 40
        }, {
            name: 'Bar 2',
            value: 60,
            itemStyle: {
                color: '#4CAF50'
            }
        }, {
            name: 'Bar 3',
            value: 80,
        }, {
            name: 'Bar 4',
            value: 70,
        }, {
            name: 'Bar 5',
            value: 60,
        }, {
            name: 'Bar 6',
            value: 70,
        }, {
            name: 'Bar 7',
            value: 80,
        }, {
            name: 'Bar 8',
            value: 40,
        }, {
            name: 'Bar 9',
            value: 70,
            itemStyle: {
                color: '#4CAF50'
            }
        }],
        label: {
            show: false,
            color: '#4CAF50'
        },
        type: 'bar',
        barWidth: '5%',
        smooth: true
    }]

}