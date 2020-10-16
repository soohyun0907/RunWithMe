<template>
  <div class="app-admin-wrap layout-sidebar-vertical clearfix sidebar-full">
    <verticalSidebar />
    <main>
      <div
        class="main-content-wrap mt-0 bg-off-white"
        :class="{
          'vertical-sidebar': getVerticalSidebar.isVerticalSidebar,
          compact: getVerticalSidebar.isVerticalCompact
        }"
      >
        <verticalTopbar />
        <div class="container">
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
        </div>
        <appFooter />
      </div>
    </main>
  </div>
</template>
<script>
import verticalSidebar from "./verticalSidebar";
import verticalTopbar from "./verticalTopbar";
import appFooter from "../common/footer";
import { mapGetters } from "vuex";

export default {
  components: {
    verticalSidebar,
    verticalTopbar,
    appFooter
  },
  computed: {
    ...mapGetters(["getVerticalSidebar"])
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
