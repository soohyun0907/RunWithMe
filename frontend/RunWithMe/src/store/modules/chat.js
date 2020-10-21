import {user, contacts, chatCollection} from "../../data/groupchat";
import http from "@/utils/http-common";

const state = {
  currentUser: user,
  contactList: contacts,
  recentUsers: [],
  selectedUser: contacts[0],
  chats: chatCollection,
  roomInfo : "",
  messages : ["test", "test1"],
  roomId : "",
  roomName : ""
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
  createAndSelectChatroomAction({commit}, uid, sock, ws){
    commit("createAndSelectChatroom", uid, sock, ws);
    // commit("test", state.roomInfo);
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
        var _this = this;
        http
          .get('/chat/user').then(response => {
              console.log("들어는 오냐")
              _this.token = response.data.token;
              console.log("token:" + _this.token)
              ws.connect({"token":_this.token}, function(frame) {
                  ws.subscribe("/sub/chat/room/"+_this.roomId, function(message) {
                      var recv = JSON.parse(message.body);
                      _this.recvMessage(recv);
                  });
              }, function(error) {
                  alert("서버 연결에 실패 하였습니다. 다시 접속해 주십시요.");
                  // location.href="/chat/room";
              });
        });
      })
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
