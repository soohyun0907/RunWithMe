import { user, contacts, chatCollection, chatroom } from "../../data/groupchat";
import http from "@/utils/http-common";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";

const state = {
  currentUser: [],
  contactList: [],
  recentUsers: [],
  selectedUser: {},
  chats: [],
  chatrooms: [],
  selectedChatroom:[],

  
};

const getters = {
  getChatRoom: state => state.chatrooms,
  getSelectedChatroom: state => state.selectedChatroom
};

const actions = {
  changeSelectedUser({ commit }, id) {
    commit("updateSelectedUser", id);
  },

  selectOneGroupChat({commit},roomId) {
    http.get("/chat/room/"+roomId)
    .then((data) => {
      commit("setOneGroupChat",data.data)
    })
  },
};

const mutations = {
  updateSelectedUser: (state, id) => {
    const sUser = state.contactList.filter(user => user.id == id);
    state.selectedUser = sUser[0];
  },

  selectAllGroupChat: (state,chatrooms) => {
    state.chatrooms = chatrooms;
  },

  setOneGroupChat: (state,selectedChatroom) => {
    state.selectedChatroom = selectedChatroom;
  },

  groupChat:(state) =>{
    
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
