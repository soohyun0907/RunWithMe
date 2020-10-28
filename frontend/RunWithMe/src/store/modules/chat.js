import {user, contacts, chatCollection, chatroom} from "../../data/groupchat";
import http from "@/utils/http-common";
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';
import authData from "@/store/modules/authData";


const state = {
  currentUser: user,
  contactList: [],
  recentUsers: [],
  selectedUser: contacts[0],
  chats: chatCollection,
  roomInfo : "",
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
  changeSelectedUser({commit}, id) {
    commit("updateSelectedUser", id);
  },
  createAndSelectChatroomAction({commit}, uid){
    commit("createAndSelectChatroom", uid);
    // commit("test", state.roomInfo);
  },
  sendMessages({commit}, payload){
    console.log("msg: " + payload.msg)
    commit("sendMessage", payload);
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
      .get("/friends/contacts")
      .then((data)=>{
        console.log(data.data.data);
        
        state.contactList = data.data.data;

        
      })
  },
  createAndSelectChatroom : (state, uid, sock, ws) => {
    console.log("uid:" + uid)
    http
      .post("/match/room", 
      {
          //masterId : 1, // 사용자 정보에서 가져와야함 
          guestId : uid
      })
      .then((data) =>{
        console.log(data);
        state.roomInfo = data.data.data;
        state.selectedUser = state.roomInfo.name;
        state.roomId = state.roomInfo.roomId;
        //state.roomName =  data.data.roomName;
        http
          .get('/chat/user').then(response => {
              console.log("들어는 오냐")
              console.log(localStorage.getItem('auth'));
              // state.token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsInJvbGVzIjpbIlVTRVIiXSwianRpIjoidGVzdDEiLCJpYXQiOjE2MDM0MTc2MzksImV4cCI6MTYwMzQyMTIzOX0.p6ExO5ls81r1HjEy14Bnj4jLgkkz91PQUy5DtOEDhF0";
              state.token = localStorage.getItem('auth');

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
    sendMessage : (state, payload) => {
      // var ws = Stomp.over(state.sock)
      console.log(payload.msg)
      console.log("======")
      console.log(state.ws)
      var header = {"token":state.token};
      var body = JSON.stringify({type:payload.type, roomId:state.roomId, message:payload.msg});
      state.ws.send("/pub/chat/message", body, header );
      //this.message = '';
    }

};

export default {
  state,
  getters,
  actions,
  mutations
};
