<template>
  <div>
    <div class="customizer" :class="{ open: isOpen }">
      <div class="handle" @click="isOpen = !isOpen">
        <i class="i-Gear spin"></i>
      </div>

      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="customizer-body ps rtl-ps-none"
      >
        <div class="">
          <div class="card-header" id="headingOne">
            <p class="mb-0">
              Sidebar Layout
            </p>
          </div>

          <div class="card-body">
            <div class="layouts">
              <!---->
              <div
                class="layout-box"
                @click="changeThemeLayout('compact-sidebar')"
                :class="{ active: getThemeMode.layout == 'compact-sidebar' }"
              >
                <img
                  alt=""
                  src="@/assets/images/screenshots/02_preview.png"
                /><i class="i-Eye"></i>
              </div>
              <div
                class="layout-box "
                @click="changeThemeLayout('large-sidebar')"
                :class="{ active: getThemeMode.layout == 'large-sidebar' }"
              >
                <img
                  alt=""
                  src="@/assets/images/screenshots/04_preview.png"
                /><i class="i-Eye"></i>
              </div>
              <div
                class="layout-box mt-30"
                @click="changeThemeLayout('vertical-sidebar')"
                :class="{ active: getThemeMode.layout == 'vertical-sidebar' }"
              >
                <span class="badge badge-danger p-1">New</span>
                
                <img
                  alt=""
                  src="@/assets/images/screenshots/verticallayout.png"
                />

                <i class="i-Eye"></i>
              </div>
            </div>
            <div class="text-center pt-3">More layouts coming...</div>
          </div>
        </div>

        <div class="" v-if="getThemeMode.layout == 'compact-sidebar'">
          <div class="card-header" id="headingOne">
            <p class="mb-0">
              Sidebar Colors
            </p>
          </div>

          <div class="card-body">
            <div class="colors sidebar-colors">
              <a
                class="color gradient-purple-indigo"
                @click="
                  changecompactLeftSideBarBgColor(
                    'sidebar-gradient-purple-indigo'
                  )
                "
                :class="{
                  active:
                    getcompactLeftSideBarBgColor ==
                    'sidebar-gradient-purple-indigo'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color gradient-black-blue"
                @click="
                  changecompactLeftSideBarBgColor('sidebar-gradient-black-blue')
                "
                :class="{
                  active:
                    getcompactLeftSideBarBgColor ==
                    'sidebar-gradient-black-blue'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color gradient-black-gray"
                @click="
                  changecompactLeftSideBarBgColor('sidebar-gradient-black-gray')
                "
                :class="{
                  active:
                    getcompactLeftSideBarBgColor ==
                    'sidebar-gradient-black-gray'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color gradient-steel-gray"
                @click="
                  changecompactLeftSideBarBgColor('sidebar-gradient-steel-gray')
                "
                :class="{
                  active:
                    getcompactLeftSideBarBgColor ==
                    'sidebar-gradient-steel-gray'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color dark-purple"
                @click="changecompactLeftSideBarBgColor('sidebar-dark-purple')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-dark-purple'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color slate-gray"
                @click="changecompactLeftSideBarBgColor('sidebar-slate-gray')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-slate-gray'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color midnight-blue"
                @click="
                  changecompactLeftSideBarBgColor('sidebar-midnight-blue')
                "
                :class="{
                  active:
                    getcompactLeftSideBarBgColor == 'sidebar-midnight-blue'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color blue "
                @click="changecompactLeftSideBarBgColor('sidebar-blue')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-blue'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color indigo"
                @click="changecompactLeftSideBarBgColor('sidebar-indigo')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-indigo'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color pink"
                @click="changecompactLeftSideBarBgColor('sidebar-pink')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-pink'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color red"
                @click="changecompactLeftSideBarBgColor('sidebar-red')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-red'
                }"
              >
                <i class="i-Eye"></i>
              </a>
              <a
                class="color purple"
                @click="changecompactLeftSideBarBgColor('sidebar-purple')"
                :class="{
                  active: getcompactLeftSideBarBgColor == 'sidebar-purple'
                }"
              >
                <i class="i-Eye"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="" v-if="getThemeMode.layout != 'vertical-sidebar'">
          <div class="card-header" id="headingOne">
            <p class="mb-0">
              RTL
            </p>
          </div>

          <div class="card-body">
            <label class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="rtl-checkbox"
                @change="changeThemeRtl"
              />
              <span>Enable RTL</span>
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div class="">
          <div class="card-header">
            <p class="mb-0">
              Dark Mode
            </p>
          </div>

          <div class="card-body">
            <label
              class="switch switch-primary mr-3 mt-2"
              v-b-popover.hover.left="'Dark Mode'"
            >
              <input type="checkbox" @click="changeThemeMode" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div class="">
          <div class="card-header">
            <p class="mb-0">
              Language
            </p>
          </div>

          <div class="card-body">
            <b-button variant="default m-1" @click="changeLang('bn')"
              ><flag iso="BD"
            /></b-button>
            <b-button variant="default m-1" @click="changeLang('en')"
              ><flag iso="US"
            /></b-button>
            <b-button variant="default m-1" @click="changeLang('de')">
              <flag iso="DE"
            /></b-button>
          </div>
        </div>
      </vue-perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    ...mapGetters(["getThemeMode", "getcompactLeftSideBarBgColor"])
  },

  methods: {
    ...mapActions([
      "changeThemeRtl",
      "changeThemeLayout",
      "changeThemeMode",
      "changecompactLeftSideBarBgColor"
    ]),
    changeLang(lang) {
      console.log(lang);
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>