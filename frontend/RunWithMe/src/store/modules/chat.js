<<<<<<< HEAD
import {user, contacts, chatCollection, chatroom} from "../../data/chat";
=======
import {user, contacts, chatCollection} from "../../data/groupchat";
import http from "@/utils/http-common";
>>>>>>> de3ad360b2b9310ac0dc09bd9b203bdf6cdc3abc

const state = {
  currentUser: user,
  contactList: contacts,
  recentUsers: [],
  selectedUser: contacts[0],
  chats: chatCollection,
  chatrooms : chatroom,
};

const getters = {
  getContactLists: state => state.contactList,
  getCurrentUser: state => state.currentUser,
  getRecentUser: state => state.recentUsers,
  getSelectedUser: state => state.selectedUser,
<<<<<<< HEAD
  getChatRooms: state => state.chatrooms,
=======
  getUserLists: state => state.getUserLists
>>>>>>> de3ad360b2b9310ac0dc09bd9b203bdf6cdc3abc
};

const actions = {
  changeSelectedUser({commit}, id) {
    commit("updateSelectedUser", id);
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
  createAndSelectChatroom : (state, uid) => {
  
    http
      .post("/match/room", 
      {
          friendId : uid
      })
      .then((data) =>{
        console.log(data);
        state.selectedUser = data.data.name;
      })
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
