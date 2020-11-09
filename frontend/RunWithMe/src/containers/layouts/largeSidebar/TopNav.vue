<template>
  <div class="main-header">
    

    <div @click="sideBarToggle" class="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
    
    <div class="logo">
      <router-link :to="`/app/dashboards/main`">
        <!-- <img src="@/assets/images/runnings/loading.gif" alt /> -->
        <!-- <img src="@/assets/images/runnings/loading2.gif" alt /> -->
        <img src="@/assets/images/runnings/logo.png" alt />
      </router-link>
    </div>


    <div class="header-part-right">
      <!-- Full screen toggle -->
      <!-- <i
        class="i-Full-Screen header-icon d-none d-sm-inline-block"
        @click="handleFullScreen"
      ></i> -->
      <!-- Notificaiton -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2  badge-top-container"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <span class="badge badge-primary">1</span>
            <i class="i-Bell text-muted header-icon"></i>
          </template>
          <!-- Notification dropdown -->
          <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
            ref="myData"
            class="dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll"
          >
            <!-- <div class="dropdown-menu-right rtl-ps-none notification-dropdown"> -->
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <!-- <span>New message</span> -->
                  <!-- <span class="badge badge-pill badge-primary ml-1 mr-1">new</span> -->
                  <!-- <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">10 sec ago</span> -->
                </p>
                <p class="text-small text-muted m-0">
                  서비스 준비 중 입니다.
                </p>
              </div>
            </div>
            <!-- <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Receipt-3 text-success mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>New order received</span>
                  <span class="badge badge-pill badge-success ml-1 mr-1">new</span>
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">2시간 전</span>
                </p>
                <p class="text-small text-muted m-0">수니님의 친구추가요청</p>
              </div>
            </div>

            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Product out of stock</span>
                  <span class="badge badge-pill badge-danger ml-1 mr-1">3</span>
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">20분전</span>
                </p>
                <p class="text-small text-muted m-0">
                  용용 : 오늘 뛰기싫다..
                </p>
              </div>
            </div>

            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Empty-Box text-danger mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Server Up!</span>
                  <span class="badge badge-pill badge-success ml-1 mr-1">3</span>
                  <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >10시간 전</span>
                </p>
                <p class="text-small text-muted m-0">
                  용용님이 친구추가를 수락했습니다!
                </p>
              </div>
            </div> -->
            <!-- </div> -->
          </vue-perfect-scrollbar>
        </b-dropdown>
      </div>
      <!-- Notificaiton End -->

      <!-- User avatar dropdown -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 user col align-self-end"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <div v-if="userInfo.profile!=null">
              <img
                :src="userInfo.profile"
                id="userDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"/>
            </div>
            <div v-else>
              <img
                  :src="defaultProfile"
                  id="userDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"/>
              </div>
          </template>

          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <div class="dropdown-header">
              <i class="i-Lock-User mr-1"></i> {{userInfo.username}}님
            </div>
            <a class="dropdown-item" href="/app/mypages/myUserInfo">회원정보</a>
            <a class="dropdown-item" href="#" @click.prevent="logoutUser">로그아웃</a>
          </div>
        </b-dropdown>
      </div>
    </div>
    <!-- <search-component
      :isSearchOpen.sync="isSearchOpen"
      @closeSearch="toggleSearch"
    ></search-component> -->

    <infinite-slide-bar duration="20s" :barStyle="{ padding: '5px 0' }">
      <div class="items">
        <div v-for="(ranker,index) in rankList" :index="index" :key="ranker.rankId" style="margin-right:50px;">
          <div v-if="ranker.userId.profile!=null">
            <img class="profile-picture rounded-circle avatar-sm" :src="ranker.userId.profile">
            {{index+1}}. {{ranker.userId.username}}
            {{ranker.totalExp}}p
          </div>
          <div v-else>
            <img class="profile-picture rounded-circle avatar-sm" :src="defaultProfile">
            {{index+1}}. {{ranker.userId.username}}
          {{ranker.totalExp}}p
          </div>
        </div>
      </div>
    </infinite-slide-bar>
  </div>

  <!-- header top menu end -->
</template>
<script>
import Util from "@/utils";
import Sidebar from "./Sidebar";
import { isMobile } from "mobile-device-detect";
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";
import InfiniteSlideBar from 'vue-infinite-slide-bar';
import http from "@/utils/http-common";

export default {
  mixins: [clickaway],
  components: {
    Sidebar,
    InfiniteSlideBar
  },

  data() {
    return {
      isDisplay: true,
      isStyle: true,
      // isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      rankList : []
    };
  },
  mounted() {
    // document.addEventListener("click", this.closeMegaMenu);
    this.getTopRankers();
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties","userInfo","defaultProfile"])
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSidebarProperties",
      "changeThemeMode",
      "signOut",
    ]),
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    logoutUser() {
      this.signOut();
      this.$router.push("/app/sessions/signIn");
    },
    closeMegaMenu() {
      this.isMegaMenuOpen = false;
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    sideBarToggle(el) {
      if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        isMobile
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        !this.getSideBarToggleProperties.isActiveSecondarySideNav
      ) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      }
    },
    getTopRankers() {
      http
        .get(`ranks/top/total`)
        .then(({data}) => {
          if(data.status == 200){
            this.rankList = data.data;
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        })
    },
  }
};
</script>
<style scoped>
.items { 
  display: flex; 
  justify-content: space-around; 
}
</style>


