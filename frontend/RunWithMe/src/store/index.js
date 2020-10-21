import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import chat from "./modules/chat";
<<<<<<< HEAD
=======
import groupchat from "./modules/groupchat";
>>>>>>> de3ad360b2b9310ac0dc09bd9b203bdf6cdc3abc
import config from "./modules/config";
import authData from "./modules/authData";
import invoice from "./modules/invoice";
import cart from "./modules/cart";
import verticalSidebar from "./modules/verticalSidebar";
import scrumboard from "./modules/scrumboard";


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    // position: lat, lng, timestamp
    position: {},
  },
  mutations: {
    mutatePositions(state, position) {
      state.position = position
    },
  },
  getters: {
    position(state) {
      return state.position;
    },
  },
  modules: {
    largeSidebar,
    compactSidebar,
    chat,
<<<<<<< HEAD
=======
    groupchat,
>>>>>>> de3ad360b2b9310ac0dc09bd9b203bdf6cdc3abc
    config,
    authData,
    invoice,
    cart,
    verticalSidebar,
    scrumboard
  }
});
