const state = {
  compactSidebarToggleProperties: {
    isSideNavOpen: true,

    isActiveSecondarySideNav: false
  },
  compactLeftSideBarBgColor: "sidebar-dark-purple"
};

const getters = {
  getCompactSideBarToggleProperties: state =>
    state.compactSidebarToggleProperties,
  getcompactLeftSideBarBgColor: state => state.compactLeftSideBarBgColor
};

const actions = {
  changeCompactSidebarProperties({commit}) {
    commit("toggleCompactSidebarProperties");
  },

  changecompactLeftSideBarBgColor({commit}, data) {
    commit("togglecompactLeftSideBarBgColor", data);
  }
};

const mutations = {
  toggleCompactSidebarProperties: state =>
    (state.compactSidebarToggleProperties.isSideNavOpen = !state
      .compactSidebarToggleProperties.isSideNavOpen),
  togglecompactLeftSideBarBgColor(state, data) {
    state.compactLeftSideBarBgColor = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
