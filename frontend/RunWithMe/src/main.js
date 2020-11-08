// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueRouter from "vue-router";
import GullKit from "./plugins/gull.kit";
// import "babel-polyfill";
// import es6Promise from "es6-promise";
// es6Promise.polyfill();
import store from "./store";
import Breadcumb from "./components/breadcumb";
import Breadcumbcustom from "./components/breadcumbcustom";
import firebase from "firebase/app";
import "firebase/auth";
import {firebaseSettings} from "@/data/config";
import i18n from "./lang/lang";
import DateRangePicker from 'vue2-daterange-picker'
//you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
import vueMoment from 'vue-moment' 
Vue.use(vueMoment)

//vueSplide
import VueSplide from '@splidejs/vue-splide';
Vue.use( VueSplide );

//dropdown
import VueDropdown from 'vue-dynamic-dropdown'
Vue.component('vue-dropdown',VueDropdown)


//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

Vue.component("breadcumb", Breadcumb);
Vue.component("breadcumbcustom", Breadcumbcustom);
import InstantSearch from 'vue-instantsearch';

 
Vue.use(InstantSearch);
Vue.use(GullKit);

firebase.initializeApp(firebaseSettings);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
