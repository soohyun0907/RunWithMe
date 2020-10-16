<template>
  <div
    class="side-content-wrap"
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps scroll"
    >
      <div>
        <ul class="navigation-left">
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'pages' }"
            data-item="pages"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Double-Tap"></i>
              <span class="nav-text">Pages</span>
            </a>
            <div class="triangle"></div>
          </li>

          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'sessions' }"
            data-item="sessions"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">Sessions</span>
            </a>
            <div class="triangle"></div>
          </li>

          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'runnings' }"
            data-item="runnings"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">Runnings</span>
            </a>
            <div class="triangle"></div>
          </li>
          
        </ul>
      </div>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">
        <!-- Submenu Dashboards -->
        <!-- runnings start -->
        <ul
          class="childNav d-none"
          data-parent="runnings"
          :class="{ 'd-block': selectedParentMenu == 'runnings' }"
        >
        <li class="nav-item">
            <router-link tag="a" class to="/app/runnings/index">
              <i class="nav-icon i-Checked-User"></i>
              <span class="item-name">Index</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/runnings/records">
              <i class="nav-icon i-Checked-User"></i>
              <span class="item-name">Records</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/runnings/kakaoRecords">
              <i class="nav-icon i-Checked-User"></i>
              <span class="item-name">KakaoRecords</span>
            </router-link>
          </li>
        </ul>
        <!-- runnings end -->
        <ul
          class="childNav d-none"
          data-parent="sessions"
          :class="{ 'd-block': selectedParentMenu == 'sessions' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/sessions/signIn">
              <i class="nav-icon i-Checked-User"></i>
              <span class="item-name">Sign in</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/sessions/signUp">
              <i class="nav-icon i-Add-User"></i>
              <span class="item-name">Sign up</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/sessions/forgot">
              <i class="nav-icon i-Find-User"></i>
              <span class="item-name">Forgot</span>
            </router-link>
          </li>
        </ul>
        <ul
          class="childNav d-none"
          data-parent="others"
          :class="{ 'd-block': selectedParentMenu == 'pages' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/blank">
              <i class="nav-icon i-Error-404-Window"></i>
              <span class="item-name">Blank Page</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/error">
              <i class="nav-icon i-Error-404-Window"></i>
              <span class="item-name">Not Found</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/profile">
              <i class="nav-icon i-Male"></i>
              <span class="item-name">User Profile</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/icons">
              <i class="nav-icon i-Male"></i>
              <span class="item-name">icons</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/search-result">
              <i class="nav-icon i-File-Search"></i>
              <span class="item-name">
                Search Result
                <span class="badge badge-pill badge-danger">New</span>
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/pricing-table">
              <i class="nav-icon i-Billing"></i>
              <span class="item-name">
                Pricing Table
                <span class="badge badge-pill badge-danger">New</span>
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/pages/faq">
              <i class="nav-icon i-Billing"></i>
              <span class="item-name">
                Faq
                <span class="badge badge-pill badge-danger">New</span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </vue-perfect-scrollbar>
    <div
      @click="removeOverlay()"
      class="sidebar-overlay"
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
    ></div>
  </div>
  <!--=============== Left side End ================-->
</template>

<script>
import Topnav from "./TopNav";
import { isMobile } from "mobile-device-detect";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Topnav,
  },

  data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile,
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSecondarySidebarPropertiesViaMenuItem",
      "changeSecondarySidebarPropertiesViaOverlay",
      "changeSidebarProperties",
    ]),

    handleWindowResize() {
      //  console.log('not working is Mobile');
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties();
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    toggleSubMenu(e) {
      let childrens = this.$refs.sidebarChild.children;
      let parent = e.target.dataset.item;

      this.selectedParentMenu = parent;

      this.changeSecondarySidebarPropertiesViaMenuItem(true);
    },

    removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();
      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }
      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");

      event.currentTarget.classList.toggle("open");

      dropdownMenus.forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
    },
  },
};
</script>

<style lang="" scoped>
</style>
