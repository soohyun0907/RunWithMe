import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import chat from "./modules/chat";
import groupchat from "./modules/groupchat";
import config from "./modules/config";
import authData from "./modules/authData";
import verticalSidebar from "./modules/verticalSidebar";
import createPersistedState from 'vuex-persistedstate';
import main from "./modules/main";

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
    verticalSidebar,
    main
  },
  plugins: [
    createPersistedState()
  ]
});
