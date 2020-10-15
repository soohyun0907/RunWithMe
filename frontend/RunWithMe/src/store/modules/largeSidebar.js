const state = {
  sidebarToggleProperties: {
    isSideNavOpen: true,
    isSecondarySideNavOpen: false,
    isActiveSecondarySideNav: false
  }
};

const getters = {
  getSideBarToggleProperties: state => state.sidebarToggleProperties
};

const actions = {
  changeSidebarProperties({commit}) {
    commit("toggleSidebarProperties");
  },
  changeSecondarySidebarProperties({commit}) {
    commit("toggleSecondarySidebarProperties");
  },
  changeSecondarySidebarPropertiesViaMenuItem({commit}, data) {
    commit("toggleSecondarySidebarPropertiesViaMenuItem", data);
  },
  changeSecondarySidebarPropertiesViaOverlay({commit}) {
    commit("toggleSecondarySidebarPropertiesViaOverlay");
  }
};

const mutations = {
  toggleSidebarProperties: state =>
    (state.sidebarToggleProperties.isSideNavOpen = !state
      .sidebarToggleProperties.isSideNavOpen),

  toggleSecondarySidebarProperties: state =>
    (state.sidebarToggleProperties.isSecondarySideNavOpen = !state
      .sidebarToggleProperties.isSecondarySideNavOpen),
  toggleSecondarySidebarPropertiesViaMenuItem(state, data) {
    state.sidebarToggleProperties.isSecondarySideNavOpen = data;
    state.sidebarToggleProperties.isActiveSecondarySideNav = data;
  },
  toggleSecondarySidebarPropertiesViaOverlay(state) {
    state.sidebarToggleProperties.isSecondarySideNavOpen = !state
      .sidebarToggleProperties.isSecondarySideNavOpen;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
