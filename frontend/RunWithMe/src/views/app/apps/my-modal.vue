<template>
  <div class="my-modal" v-if="visible">
    <div class="my-modal__dialog">
      <form-wizard></form-wizard>
    </div>
  </div>
</template>

<script>

// import formWizard from './FormWizard2.vue'
import formWizard from './formWizard.vue'

export default {
  components: { formWizard },
  name: 'my-modal',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    title: {
      type: String,
      require: false,
    },
    category:{
      type: String,
      require: false,
    }
  }
}
</script>

<style lang="scss">
$module: 'my-modal';
.#{$module} {
  // This is modal bg
  background-color: rgba(0,0,0,.7);
  top: 0; right: 0; bottom: 0; left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  z-index: 1;
  //This is modal layer
  &__dialog{
    left: 8%;
    top: 20px;
    text-align: center;
    width: 300px;
    position: relative;
    background: #fff;
    margin-top : 100px;
    margin-bottom: 50px;
  }

  &__header {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
    padding: 16px 16px 0 25px;
    position: relative;
  }
  &__body {
    padding: 25px;
    min-height: 150px;
    max-height: 412px;
    overflow-y: scroll;
  }
}
</style>