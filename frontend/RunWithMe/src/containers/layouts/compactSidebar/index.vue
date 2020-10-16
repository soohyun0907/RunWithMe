<template>
  <div
    :class="[
      getCompactSideBarToggleProperties.isSideNavOpen ? 'sidenav-open' : '',
      getcompactLeftSideBarBgColor
    ]"
    class="app-admin-wrap  layout-sidebar-compact   clearfix"
  >
    <compactSidebar></compactSidebar>
    <!-- end-leftsidebar -->
    <div class="main-content-wrap d-flex flex-column">
      <compactTopbar></compactTopbar>
       <div class="container">
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
        </div>
      <appFooter></appFooter>
    </div>
  </div>
</template>
<script>
import compactTopbar from "./compactTopbar";
import compactSidebar from "./compactSidebar";
import appFooter from "../common/footer";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    compactTopbar,
    compactSidebar,
    appFooter
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getCompactSideBarToggleProperties",
      "getcompactLeftSideBarBgColor"
    ])
  }
};
</script>
