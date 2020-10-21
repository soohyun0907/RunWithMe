import {user, contacts, chatCollection, chatroom} from "../../data/chat";

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
  getChatRooms: state => state.chatrooms,
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
