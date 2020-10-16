import BootstrapVue from "bootstrap-vue";
// import vuePerfectScrollbar from "vue-perfect-scrollbar";
import VueTour from "vue-tour";
// import SmartTable from "vuejs-smart-table";
import VueTagsInput from "@johmun/vue-tags-input";
import VueTheMask from "vue-the-mask";
import Vuelidate from "vuelidate";
import VueFormWizard from "vue-form-wizard";
import VueLazyload from "vue-lazyload";
// import VCalendar from "v-calendar";
import VueGoodTablePlugin from "vue-good-table";
// import VueSlider from "vue-slider-component";
import Meta from "vue-meta";
import FlagIcon from "vue-flag-icon";

import "@/assets/styles/sass/themes/lite-purple.scss";
import "@/plugins/echarts";
import "@/plugins/apexChart.js";
import "@/plugins/sweetalert2.js";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import "v2-datepicker/lib/index.css"; // v2 need to improt css
import V2Datepicker from "v2-datepicker";

// locale.use(lang);

export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.component(
      "large-sidebar",
      // The `import` function returns a Promise.
      () => import("../containers/layouts/largeSidebar")
    );

    Vue.component(
      "compact-sidebar",
      // The `import` function returns a Promise.
      () => import("../containers/layouts/compactSidebar")
    );
    Vue.component(
      "vertical-sidebar",
      // The `import` function returns a Promise.
      () => import("../containers/layouts/verticalSidebar")
    );
    Vue.component(
      "customizer",
      // The `import` function returns a Promise.
      () => import("../components/common/customizer.vue")
    );
    Vue.component("vue-perfect-scrollbar", () =>
      import("vue-perfect-scrollbar")
    );
    // Vue.component(VueCropper);
    Vue.use(Meta, {
      keyName: "metaInfo",
      attribute: "data-vue-meta",
      ssrAttribute: "data-vue-meta-server-rendered",
      tagIDKeyName: "vmid",
      refreshOnceOnNavigation: true
    });
    Vue.use(V2Datepicker);
    Vue.use(FlagIcon);
    // vueslider
    // Vue.component("VueSlider", () => import("vue-slider-component"));
    //vuelidate
    Vue.use(Vuelidate);
    // maskForm
    Vue.use(VueTheMask);
    //form wizard globally

    Vue.use(VueFormWizard);

    // tags input plugin
    Vue.use(VueTagsInput);

    // smart table plugin
    // Vue.use(SmartTable);

    // vue-good-table

    // import the styles

    Vue.use(VueGoodTablePlugin);

    // import VueCropper from "./plugins/imageCropper";

    // Use v-calendar & v-date-picker components
    // Vue.use(VCalendar, {
    //   componentPrefix: "v" // Use <vc-calendar /> instead of <v-calendar />
    //   // ...other defaults
    // });

    Vue.use(VueTour);
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: "0px",
        threshold: 0.1
      }
    });
  }
};
