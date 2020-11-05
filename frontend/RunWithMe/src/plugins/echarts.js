import Vue from "vue";
import ECharts from "vue-echarts"; // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/gauge";

import "echarts/lib/component/tooltip";
import 'echarts/lib/component/legend';
import "echarts/lib/component/title";
import "echarts/lib/chart/line";

// register component to use
Vue.component("v-chart", ECharts);
