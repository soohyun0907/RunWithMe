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
            :class="{ active: selectedParentMenu == 'runnings' }"
            class="nav-item"
            data-item="runnings"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Double-Tap"></i>
              <span class="nav-text">Runnings</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'apps' }"
            data-item="apps"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Computer-Secure"></i>
              <span class="nav-text">Community</span>
            </a>
            <div class="triangle"></div>
          </li>

            <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'challengeBoard' }"
            data-item="challengeBoard"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">ChallengeBoard</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'mypages' }"
            data-item="mypages"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">My Page</span>
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
        <ul
          class="childNav d-none"
          data-parent="apps"
          :class="{ 'd-block': selectedParentMenu == 'apps' }"
        >
          <!-- <li class="nav-item">
            <router-link tag="a" class to="/app/apps/chat">
              <i class="nav-icon i-Speach-Bubble-3"></i>
              <span class="item-name">Chat</span>
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/groupchat">
              <i class="nav-icon i-Speach-Bubble-3"></i>
              <span class="item-name">Group-Chat</span>
            </router-link>
          </li>
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
          </li>
        </ul>
        <ul
          class="childNav d-none"
          data-parent="others"
          :class="{ 'd-block': selectedParentMenu == 'runnings' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/runnings/neighborhoodList">
              <i class="nav-icon i-File-CSV"></i>
              <span class="item-name">주변 러너 보기</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link tag="a" class to="/app/runnings/runningResult">
              <i class="nav-icon i-File-Chart"></i>
              <span class="item-name">RunningResult</span>
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link tag="a" class to="/app/runnings/running">
              <i class="nav-icon i-Stopwatch"></i>
              <span class="item-name">Running</span>
            </router-link>
          </li>
        </ul>

        <ul
          class="childNav d-none"
          data-parent="mypages"
          :class="{ 'd-block': selectedParentMenu == 'mypages' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/mypages/friends">
              <i class="nav-icon i-File-CSV"></i>
              <span class="item-name">친구 목록</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/mypages/mypageTab">
              <i class="nav-icon i-Stopwatch"></i>
              <span class="item-name">런닝 정보</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/mypages/myUserInfo">
              <i class="nav-icon i-Stopwatch"></i>
              <span class="item-name">회원 정보 관리</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/mypages/myChallenges">
              <i class="nav-icon i-Stopwatch"></i>
              <span class="item-name">나의 챌린지</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/payment">
              <i class="nav-icon i-Speach-Bubble-3"></i>
              <span class="item-name">결제하기(충전하기)</span>
            </router-link>
          </li>
        </ul>

        <ul
          class="childNav d-none"
          data-parent="challengeBoard"
          :class="{ 'd-block': selectedParentMenu == 'challengeBoard' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/board/challenges">
              <i class="nav-icon i-Speach-Bubble-3"></i>
              <span class="item-name">전체 챌린지 보기</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/board/challengeBoard">
              <i class="nav-icon i-Stopwatch"></i>
              <span class="item-name">챌린지 제안</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/board/challengeBoardDetail">
              <i class="nav-icon i-Stopwatch"></i>
              <span class="item-name">챌린지 제안 상세</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/board/createChallenge">
              <i class="nav-icon i-Speach-Bubble-3"></i>
              <span class="item-name">챌린지 생성</span>
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
import axios from "axios";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Topnav
  },

  data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
    
    
     this.$store.subscribe((mutation, state) => {
      if(mutation.type=="mutateAuth"){
        console.log("auth 변경")
        axios.defaults.headers.common['AUTH'] = this.$store.state.auth
      }
    })
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"])
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSecondarySidebarPropertiesViaMenuItem",
      "changeSecondarySidebarPropertiesViaOverlay",
      "changeSidebarProperties"
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
        .filter(x => x !== "")[1];
          console.log(currentParentUrl);

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "runnings";
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu;
      let parent = e.target.dataset.item;
      if (hasSubmenu) {
        this.selectedParentMenu = parent;

        this.changeSecondarySidebarPropertiesViaMenuItem(true);
      } else {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
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

      dropdownMenus.forEach(dropdown => {
        dropdown.classList.remove("open");
      });
    }
  }
};
</script>

<style lang="" scoped>
</style>
