<template>
  <div
    class="side-content-wrap"
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps"
    >
      <ul class="navigation-left">
        <div class="logo">
          <img alt src="@/assets/images/logo.png" />
        </div>

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
          :class="{ active: selectedParentMenu == 'pages' }"
          class="nav-item"
          data-item="pages"
        >
          <a class="nav-item-hold" href="#">
            <i class="nav-icon i-Double-Tap"></i>
            <span class="nav-text">Pages</span>
          </a>
          <div class="triangle"></div>
        </li>
        <li
          @mouseenter="selectedParentMenu = 'doc'"
          class="nav-item"
          :class="{ active: selectedParentMenu == 'doc' }"
        >
          <a class="nav-item-hold" href="http://demos.ui-lib.com/gull-vue-doc/" target="_blank">
            <i class="nav-icon i-Safe-Box1"></i>
            <span class="nav-text">Doc</span>
          </a>
          <div class="triangle"></div>
        </li>
      </ul>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">
        <i class="sidebar-close i-Close" @click="compactSideBarToggle"></i>
        <header>
          <div class="logo">
            <img src="@/assets/images/logo-text.png" alt />
          </div>
        </header>

        <div
          class="submenu-area"
          data-parent="sessions"
          :class="{ 'd-block': selectedParentMenu == 'sessions' }"
        >
          <header>
            <h6>Sessions</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="sessions">
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
        </div>
        <!-- end of sessions -->

        <div
          class="submenu-area"
          data-parent="pages"
          :class="{ 'd-block': selectedParentMenu == 'pages' }"
        >
          <header>
            <h6>Pages</h6>
            <p>Lorem ipsum dolor sit.</p>
          </header>
          <ul class="childNav" data-parent="pages">
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
        <!-- end of pages -->
      </div>
    </vue-perfect-scrollbar>
    <div
      @click="removeOverlay()"
      class="sidebar-overlay"
      :class="{ open: getCompactSideBarToggleProperties.isSideNavOpen && windowWidth <= 1200}"
    ></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isMobile } from "mobile-device-detect";
export default {
  data() {
    return {
      isMenuOver: false,
      selectedParentMenu: "",
      isMobile,
      windowWidth: window.innerWidth,
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
    ...mapGetters(["getCompactSideBarToggleProperties"]),
  },

  methods: {
    ...mapActions(["changeCompactSidebarProperties"]),

    removeOverlay() {
      this.changeCompactSidebarProperties();
      // if (window.innerWidth<=1200) {
      //   this.changeSidebarProperties();
      // }
      this.toggleSelectedParentMenu();
    },

    compactSideBarToggle(el) {
      // console.log("test");
      if (this.getCompactSideBarToggleProperties.isSideNavOpen) {
        this.changeCompactSidebarProperties();
      }
    },

    handleWindowResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth <= 1200) {
        if (this.getCompactSideBarToggleProperties.isSideNavOpen) {
          this.changeCompactSidebarProperties();
        }
      } else {
        if (!this.getCompactSideBarToggleProperties.isSideNavOpen) {
          this.changeCompactSidebarProperties();
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