<template>
    <i :class="iconClass" :style="styleObject" aria-hidden="true"></i>
</template>

<script>
export default {
  name: "vue-fontawesome",
  props: ["icon", "color", "size"],
  data() {
    return {
      iconClass: "fa fa-" + this.icon,
      styleObject: {
        color: this.color,
        fontSize: this.size + "rem"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
