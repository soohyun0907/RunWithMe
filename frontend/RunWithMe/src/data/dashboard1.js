var dark_heading = "#c2c6dc";
export const echart1 = {
  tooltip: {
    trigger: "axis",

    axisPointer: {
      animation: true
    }
  },
  grid: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%"
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
    axisLabel: {
      formatter: "{value}",
      color: dark_heading,
      fontSize: 0,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "",
        width: 0
      }
    }
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 50,
    axisLabel: {
      formatter: "",
      color: dark_heading,
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      lineStyle: {
        color: "",
        width: 0,
        opacity: 0.5
      }
    }
  },
  series: [
    {
      name: "Visit",
      type: "line",
      smooth: true,
      data: [30, 40, 20, 50, 40, 80, 90],
      symbolSize: 8,
      showSymbol: false,
      lineStyle: {
        color: dark_heading,
        opacity: 1,
        width: 1.5
      },
      itemStyle: {
        show: false,
        color: "#ff5721",
        borderColor: "#ff5721",
        borderWidth: 1.5
      },
      areaStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(102, 51, 153, .2)"
              },
              {
                offset: 0.3,
                color: "rgba(102, 51, 153, .2)"
              },
              {
                offset: 1,
                color: "rgba(102, 51, 153, .2)"
              }
            ]
          }
        }
      }
    }
  ]
};
export const echart2 = {
  tooltip: {
    trigger: "axis",

    axisPointer: {
      animation: true
    }
  },
  grid: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%"
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
    axisLabel: {
      formatter: "{value}",
      color: "#666",
      fontSize: 0,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "",
        width: 0
      }
    }
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 50,
    axisLabel: {
      formatter: "",
      color: "#666",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      lineStyle: {
        color: "",
        width: 0,
        opacity: 0.5
      }
    }
  },
  series: [
    {
      name: "Visit",
      type: "line",
      smooth: true,
      data: [30, 10, 40, 10, 40, 20, 90],
      symbolSize: 8,
      showSymbol: false,
      lineStyle: {
        color: "#FFC107",
        opacity: 1,
        width: 1.5
      },
      itemStyle: {
        show: false,
        color: "#ff5721",
        borderColor: "#ff5721",
        borderWidth: 1.5
      },
      areaStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 193, 7, 0.2)"
              },
              {
                offset: 0.3,
                color: "rgba(255, 193, 7, 0.2)"
              },
              {
                offset: 1,
                color: "rgba(255, 193, 7, 0.2)"
              }
            ]
          }
        }
      }
    }
  ]
};
export const echart3 = {
  tooltip: {
    show: true,
    // trigger: "axis",
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
      data: [
        40,
        80,
        20,
        90,
        30,
        80,
        40,
        90,
        20,
        80,
        30,
        45,
        50,
        110,
        90,
        145,
        120,
        135,
        120,
        140
      ],
      type: "line",
      showSymbol: true,
      smooth: true,
      color: "#639",
      lineStyle: {
        color: "rgba(102, 51, 153, 0.8)",
        opacity: 1,
        width: 3
      }
    }
  ]
};
