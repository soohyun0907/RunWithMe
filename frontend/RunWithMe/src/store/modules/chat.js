import {user, contacts, chatCollection, chatroom} from "../../data/groupchat";
import http from "@/utils/http-common";
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';
import store from "@/store/modules/groupchat.js";

const state = {
  currentUser: [],
  contactList: [],
  recentUsers: [],
  selectedUser: "",
  chats: [],
  roomInfo : {
    roomId : "~id",
    roomName : "~name"
  },
  messages : [],
  roomId : "",
  roomName : "",
  token : "",
  sock : "",
  ws: "",
  chatrooms : [],
};


const getters = {
  getContactLists: state => state.contactList,
  getCurrentUser: state => state.currentUser,
  getRecentUser: state => state.recentUsers,
  getSelectedUser: state => state.selectedUser,
  getUserLists: state => state.getUserLists,
  getRoomInfo: state => state.roomInfo,
  getMessages: state => state.messages
};

const actions = {
  changeSelectedUser({commit}, username) {
    commit("updateSelectedUser", username);
  },
  createAndSelectChatroomAction({commit}, uid){
    commit("createAndSelectChatroom", uid);
  },
  sendMessages({commit}, payload){
    commit("sendMessage", payload);
  },
  selectUserList({commit}){
    commit("selectUserLists")
  }

};

const mutations = {
  updateSelectedUser: (state, id) => {
  },
  selectUserLists:(state) => {
    http
      .get("/friends/contacts/online",{
        AUTH: localStorage.getItem('auth'),
      })
      .then((data)=>{
        state.contactList = data.data.data;
      })
  },
  createAndSelectChatroom : (state, uid, sock, ws) => {
    http
      .post("/match/room", 
      {
          guestId : uid
      })
      .then((data) =>{
        state.roomInfo = data.data.data;
        state.selectedUser = state.roomInfo.name;
        state.roomId = state.roomInfo.roomId;
        state.roomName =  state.roomInfo.roomName;
        localStorage.setItem("roomId",state.roomInfo.roomId)
        localStorage.setItem("roomName",state.roomInfo.roomName)

      })
    },
};

export default {
  state,
  getters,
  actions,
  mutations
};
