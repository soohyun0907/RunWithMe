import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import chat from "./modules/chat";
import groupchat from "./modules/groupchat";
import config from "./modules/config";
import authData from "./modules/authData";
import invoice from "./modules/invoice";
import cart from "./modules/cart";
import verticalSidebar from "./modules/verticalSidebar";
import scrumboard from "./modules/scrumboard";
import createPersistedState from 'vuex-persistedstate';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    chat,
    groupchat,
    config,
    authData,
    invoice,
    cart,
    verticalSidebar,
    scrumboard
  },
  plugins: [
    createPersistedState()
  ]
});
