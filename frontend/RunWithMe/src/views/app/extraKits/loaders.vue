<template>
  <div class="main-content">
    <breadcumb :page="'Loaders'" :folder="'Extra Kits'" />
    <b-row>
      <b-col md="12">
        <b-card title="Ripple Spinners" class=" mb-30">
          <span class="spinner-glow spinner-glow-primary mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-secondary mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-warning mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-danger mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-success mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-info mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-light mr-5 mb-4"></span>
          <span class="spinner-glow spinner-glow-dark mr-5 mb-4"></span>
        </b-card>
      </b-col>
      <b-col md="12">
        <b-card title="Loading Spinners" class=" mb-30">
          <div class="spinner spinner-primary mr-3"></div>
          <div class="spinner spinner-secondary mr-3"></div>
          <div class="spinner spinner-warning mr-3"></div>
          <div class="spinner spinner-danger mr-3"></div>
          <div class="spinner spinner-success mr-3"></div>
          <div class="spinner spinner-info mr-3"></div>
          <div class="spinner spinner-light mr-3"></div>
          <div class="spinner spinner-dark mr-3"></div>
        </b-card>
      </b-col>

      <b-col md="12">
        <b-card title="Bubble Spinners" class=" mb-30">
          <div class="spinner-bubble spinner-bubble-primary m-5"></div>
          <div class="spinner-bubble spinner-bubble-secondary m-5"></div>
          <div class="spinner-bubble spinner-bubble-warning m-5"></div>
          <div class="spinner-bubble spinner-bubble-danger m-5"></div>
          <div class="spinner-bubble spinner-bubble-success m-5"></div>
          <div class="spinner-bubble spinner-bubble-info m-5"></div>
          <div class="spinner-bubble spinner-bubble-light m-5"></div>
          <div class="spinner-bubble spinner-bubble-dark m-5"></div>
        </b-card>
      </b-col>
      <b-col md="12">
        <b-card title="Bubble Spinners" class=" mb-30">
          <div class="loader-bubble loader-bubble-primary m-5"></div>
          <div class="loader-bubble loader-bubble-secondary m-5"></div>
          <div class="loader-bubble loader-bubble-success m-5"></div>
          <div class="loader-bubble loader-bubble-warning m-5"></div>
          <div class="loader-bubble loader-bubble-danger m-5"></div>
          <div class="loader-bubble loader-bubble-info m-5"></div>
          <div class="loader-bubble loader-bubble-light m-5"></div>
          <div class="loader-bubble loader-bubble-dark m-5"></div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Loaders"
  }
};
</script>

