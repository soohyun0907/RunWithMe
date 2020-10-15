<template>
  <div>
    <!-- <keep-alive> -->
    <component is="large-sidebar"></component>
    <!-- available layouts -->
    <!-- 
large-sidebar
vertical-sidebar
compact-sidebar


    -->
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
  methods: {},
};
</script>
