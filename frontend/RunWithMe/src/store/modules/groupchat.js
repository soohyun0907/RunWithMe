import {user, contacts, chatCollection,chatroom} from "../../data/groupchat";
import http from "@/utils/http-common";

const state = {
  currentUser: user,
  contactList: contacts,
  recentUsers: [],
  selectedUser: contacts[0],
  chats: chatCollection,
  chatrooms: chatroom
};

const getters = {
  // getContactLists: state => state.contactList,
  // getCurrentUser: state => state.currentUser,
  // getRecentUser: state => state.recentUsers,
  // getSelectedUser: state => state.selectedUser,
  // getUserLists: state => state.getUserLists,
  getChatRoom: state => state.chatrooms
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
  // createChatRoom: (state) => {
  //   const chatRoom = state.chatrooms;
  //   state.
  // }

  // selectUserLists:(state) => {
  //   http
  //     .get("/friends/contacts/"+1)
  //     .then((data)=>{
  //       console.log(data);
  //       state.contactList = data.data;
  //     })
  // },
  // createAndSelectChatroom : (state) => {
  //   http
  //     .post("/chat/room")
  //     .then((data) =>{
  //       console.log(data);
  //     })
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
