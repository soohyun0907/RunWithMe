import {user, contacts, chatCollection, chatroom} from "../../data/groupchat";
import http from "@/utils/http-common";
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';
import store from "@/store/modules/groupchat.js";

const state = {
  currentUser: user,
  contactList: [],
  recentUsers: [],
  selectedUser: "",
  chats: chatCollection,
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
  chatrooms : chatroom,
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
    console.log("msg: " + payload.msg)
    commit("sendMessage", payload);
  },
  selectUserList({commit}){
    commit("selectUserLists")
  }

};

const mutations = {
  updateSelectedUser: (state, id) => {
    // const sUser = state.contactList.filter(user => user.id == id);
    // state.selectedUser = username;
    // console.log(state.selectedUser);
  },
  selectUserLists:(state) => {
    http
      .get("/friends/contacts/online",{
        AUTH: localStorage.getItem('auth'),
      })
      .then((data)=>{
        // console.log("localstorage_auth");
        // console.log(localStorage.getItem('auth'));
        // console.log("before");
        // console.log("*********************")
        // console.log(data.data.data.off);
        // console.log(data.data.data.on);
        
        state.contactList = data.data.data;
        // console.log("?")
        // console.log(state.contactList)
        
      })
  },
  createAndSelectChatroom : (state, uid, sock, ws) => {
    console.log("uid:" + uid)
    http
      .post("/match/room", 
      {
          guestId : uid
      })
      .then((data) =>{
        console.log(data);
        state.roomInfo = data.data.data;
        state.selectedUser = state.roomInfo.name;
        state.roomId = state.roomInfo.roomId;
        state.roomName =  state.roomInfo.roomName;
        localStorage.setItem("roomId",state.roomInfo.roomId)
        localStorage.setItem("roomName",state.roomInfo.roomName)

      })
    },
    // sendMessage : (state, payload) => {
    //   // var ws = Stomp.over(state.sock)
    //   console.log(payload.msg)
    //   console.log("======")
    //   console.log(state.ws)
    //   var header = {"token":state.token};
    //   var body = JSON.stringify({type:payload.type, roomId:state.roomId, message:payload.msg});
    //   state.ws.send("/pub/chat/message", body, header );
    //   //this.message = '';
    // }

};

export default {
  state,
  getters,
  actions,
  mutations
};
