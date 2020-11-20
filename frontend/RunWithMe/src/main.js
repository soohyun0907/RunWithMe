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



//vue filter
Vue.filter("makeComma", val =>{
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

Vue.filter("makeBadge", val =>{
  if(val=0) val=1
  if(val>=10){
    return <b-badge variant="primary badge-round  badge-round-opacity-dark  m-1">val</b-badge>
  }else if(val>=7){
    return <b-badge variant="primary badge-round  badge-round-opacity-danger  m-1">val</b-badge>
  }else if(val>=5){
    return <b-badge variant="primary badge-round  badge-round-opacity-warning  m-1">val</b-badge>
  }else if(val>=3){
    return <b-badge variant="primary badge-round  badge-round-opacity-success  m-1">val</b-badge>
  } else{
    return <b-badge variant="primary badge-round  badge-round-opacity-primary  m-1">val</b-badge>
  }
})

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
