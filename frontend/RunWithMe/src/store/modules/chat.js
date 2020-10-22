import {user, contacts, chatCollection} from "../../data/groupchat";
import http from "@/utils/http-common";
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'


const state = {
  currentUser: user,
  contactList: contacts,
  recentUsers: [],
  selectedUser: contacts[0],
  chats: chatCollection,
  roomInfo : "",
  messages : [],
  roomId : "",
  roomName : "",
  token : "",
  sock : "",
  ws: ""
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
  changeSelectedUser({commit}, id) {
    commit("updateSelectedUser", id);
  },
  createAndSelectChatroomAction({commit}, uid){
    commit("createAndSelectChatroom", uid);
    // commit("test", state.roomInfo);
  },
  sendMessages({commit}, type, msg){
    commit("sendMessage", type, msg);
  }
};

const mutations = {
  updateSelectedUser: (state, id) => {
    const sUser = state.contactList.filter(user => user.id == id);
    state.selectedUser = sUser[0];
    // console.log(state.selectedUser);
  },
  selectUserLists:(state) => {
    http
      .get("/friends/contacts/"+1)
      .then((data)=>{
        console.log(data);
        state.contactList = data.data;
      })
  },
  createAndSelectChatroom : (state, uid, sock, ws) => {
    http
      .post("/match/room", 
      {
          friendId : uid
      })
      .then((data) =>{
        //console.log(data);
        state.selectedUser = data.data.name;
        state.roomInfo = data.data;
       
        // state.messages.unshift("add");
        state.roomId = data.data.roomId;
        state.roomName =  data.data.roomName;
        http
          .get('/chat/user').then(response => {
              console.log("들어는 오냐")
              state.token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ0ZXN0NCIsImlhdCI6MTYwMzM3MzQyMSwiZXhwIjoxNjAzMzc3MDIxfQ.ddRYakBwDcsyKy5qXTp5NckCkpOqy92tyyMCrrBMkr0";
              console.log("token:" + state.token)
              state.sock = new SockJS("http://localhost:8080/ws-stomp")
              state.ws = Stomp.over(state.sock)
              console.log("before")
              // var ws = Stomp.over(state.sock)
              console.log(state.ws)
              console.log("after")
              state.ws.connect({"token":state.token}, function(frame) {
                console.log("connect")
                state.ws.subscribe("/sub/chat/room/"+state.roomId, function(message) {
                  console.log("subscribe")
                      var recv = JSON.parse(message.body);
                      console.log("sub")
                      console.log(recv)
                      //this.userCount = recv.userCount;
                      state.messages.unshift({"type":recv.type,"sender":recv.sender,"message":recv.message})
                  });
              }, function(error) {
                  alert("서버 연결에 실패 하였습니다. 다시 접속해 주십시요.");
                  // location.href="/chat/room";
              });
        });
      })
    },
    sendMessage : function(state, type, msg){
      // var ws = Stomp.over(state.sock)
      console.log("======")
      console.log(state.ws)
      state.ws.send("/pub/chat/message", {"token":state.token}, JSON.stringify({type:type, roomId:state.roomId, message:msg}));
      //this.message = '';
    }

};

export default {
  state,
  getters,
  actions,
  mutations
};
