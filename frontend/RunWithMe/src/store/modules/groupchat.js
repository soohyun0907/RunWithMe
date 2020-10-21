import { user, contacts, chatCollection, chatroom } from "../../data/groupchat";
import http from "@/utils/http-common";

const state = {
  currentUser: user,
  contactList: contacts,
  recentUsers: [],
  selectedUser: contacts[0],
  chats: chatCollection,
  chatrooms: []
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
  changeSelectedUser({ commit }, id) {
    commit("updateSelectedUser", id);
  },

  // changeGroupChat({commit}){
  //   commit("selectAllGroupChat");
  // },

  // selectAllGroupChat: (state ) =>{
  //   http.get("/chat/room")
  //   .then((data)=>{
  //     console.log(data);
  //     state.chatrooms = data.data;
  //   })
  // }
};

const mutations = {
  updateSelectedUser: (state, id) => {
    const sUser = state.contactList.filter(user => user.id == id);
    state.selectedUser = sUser[0];
    // console.log(state.selectedUser);
  },

  selectAllGroupChat: (state,chatrooms) => {
    state.chatrooms = chatrooms;
  }

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
