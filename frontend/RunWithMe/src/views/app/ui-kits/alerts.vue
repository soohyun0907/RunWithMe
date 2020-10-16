<template>
  <div class="main-content">
    <breadcumb :page="'Alerts'" :folder="'UI Kits'" />
    <b-row>
      <b-col md="12">
        <b-alert
          show
          variant="alert alert-card alert-warning text-center"
          dismissible=""
        >
          Gull makes development life easier!
          <b-button pill variant="warning ml-3">Buy Now</b-button>
        </b-alert>
        <b-alert show variant="alert alert-card alert-success" dismissible>
          <strong class="text-capitalize">Success!</strong> Lorem ipsum dolor
          sit amet.
        </b-alert>
        <b-alert show variant="alert alert-card alert-danger" dismissible>
          <strong class="text-capitalize">Danger!</strong> Lorem ipsum dolor sit
          amet.
        </b-alert>
        <b-alert show variant="alert alert-card alert-info" dismissible>
          <strong class="text-capitalize">Info!</strong> Lorem ipsum dolor sit
          amet.
        </b-alert>
      </b-col>

      <b-col md="12">
        <b-card title="Bootstrap Alerts" class=" mb-30">
          <b-alert show variant="primary" dismissible>
            <strong class="text-capitalize">Primary!</strong>
            Lorem ipsum dolor sit amet.
          </b-alert>

          <b-alert show variant="success" dismissible>
            <strong class="text-capitalize">Success!</strong>
            Lorem ipsum dolor sit amet.
          </b-alert>

          <b-alert show variant="info" dismissible>
            <strong class="text-capitalize">Info!</strong>
            Lorem ipsum dolor sit amet.
          </b-alert>

          <b-alert show variant="warning" dismissible>
            <strong class="text-capitalize">Warning!</strong>
            Lorem ipsum dolor sit amet.
          </b-alert>

          <b-alert show variant="danger" dismissible>
            <strong class="text-capitalize">Danger!</strong>
            Lorem ipsum dolor sit amet.
          </b-alert>
        </b-card>

        <b-card class="mt-4">
          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            <p>
              This alert will dismiss after {{ dismissCountDown }} seconds...
            </p>
            <b-progress
              variant="success"
              :max="dismissSecs"
              :value="dismissCountDown"
              height="4px"
            ></b-progress>
          </b-alert>

          <b-button @click="showAlert" variant="primary" class="m-1">
            Show alert with count-down timer
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Alerts"
  },
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>
