<template>
  <div class="main-content">
    <breadcumb :page="'Spinners'" :folder="'Extra Kits'" />

    <b-row>
      <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Basic Avatar">
          <b-overlay :show="show" rounded="sm">
            <b-card
              title="Card with overlay"
              :aria-hidden="show ? 'true' : null"
            >
              <b-card-text
                >Laborum consequat non elit enim exercitation
                cillum.</b-card-text
              >
              <b-card-text>Click the button to toggle the overlay:</b-card-text>
              <b-button :disabled="show" variant="primary" @click="show = true">
                Show overlay
              </b-button>
            </b-card>
          </b-overlay>
          <b-button class="mt-3" @click="show = !show">Toggle overlay</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
