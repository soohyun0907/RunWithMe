//start::echart4
export const echart4 = {
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
    left: "0",
    right: "0",
    bottom: "0"
  },
  xAxis: {
    type: "category",
    data: [],
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true
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
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: true
    }
  },
  label: {show: false, color: "#212121"},
  series: [
    {
      data: [40, 80, 20, 90, 30, 80, 40],
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

export const echart5 = {
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  color: ["#663399", "#ced4da"],
  tooltip: {
    show: true,
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  xAxis: [
    {
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    }
  ],

  series: [
    {
      name: "Sessions",
      type: "pie",
      radius: ["70%", "85%"],
      center: ["50%", "50%"],
      avoidLabelOverlap: false,
      hoverOffset: 5,
      label: {
        normal: {
          show: false,
          position: "center",
          textStyle: {
            fontSize: "13",
            fontWeight: "normal"
          },
          formatter: "{a}"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "15",
            fontWeight: "bold"
          },
          formatter: "{b}"
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{value: 80, name: "Completed"}, {value: 20, name: "Pending."}],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};
