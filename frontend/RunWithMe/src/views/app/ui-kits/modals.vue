<template>
  <div class="main-content">
    <breadcumb :page="'Modals'" :folder="'UI Kits'" />

    <div class="row">
      <b-col md="6">
        <b-card title="Basic Modal" class=" mb-30">
          <b-button variant="primary" v-b-modal.modal-1
            >Launch demo modal</b-button
          >

          <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Scrolling long content" class=" mb-30">
          <b-button variant="primary" v-b-modal.modal-tall
            >Launch overflowing modal</b-button
          >

          <b-modal id="modal-tall" title="Overflowing Content">
            <p class="my-4" v-for="i in 20" :key="i">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </b-modal>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Confirm message box" class=" mb-30">
          <div>
            <div class="mb-2">
              <b-button variant="success" @click="showMsgBoxOne"
                >Simple msgBoxConfirm</b-button
              >
              <p class="mt-2">Return value: {{ String(boxOne) }}</p>
            </div>
            <div class="mb-1">
              <b-button variant="warning" @click="showMsgBoxTwo"
                >msgBoxConfirm with options</b-button
              >
              <p class="mt-2">Return value: {{ String(boxTwo) }}</p>
            </div>
          </div>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Optional Sizes" class=" mb-30">
          <div>
            <b-button v-b-modal.modal-xl variant="primary m-1"
              >xl modal</b-button
            >
            <b-button v-b-modal.modal-lg variant="primary m-1"
              >lg modal</b-button
            >
            <b-button v-b-modal.modal-sm variant="primary m-1"
              >sm modal</b-button
            >

            <b-modal id="modal-xl" size="xl" title="Extra Large Modal"
              >Hello Extra Large Modal!</b-modal
            >
            <b-modal id="modal-lg" size="lg" title="Large Modal"
              >Hello Large Modal!</b-modal
            >
            <b-modal id="modal-sm" size="sm" title="Small Modal"
              >Hello Small Modal!</b-modal
            >
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Multiple modal support" class=" mb-30">
          <b-button variant="danger" v-b-modal.modal-multi-1
            >Open First Modal</b-button
          >

          <b-modal
            id="modal-multi-1"
            size="lg"
            title="First Modal"
            ok-only
            no-stacking
          >
            <p class="my-2">First Modal</p>
            <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
          </b-modal>

          <b-modal id="modal-multi-2" title="Second Modal" ok-only>
            <p class="my-2">Second Modal</p>
            <b-button v-b-modal.modal-multi-3 size="sm"
              >Open Third Modal</b-button
            >
          </b-modal>

          <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
            <p class="my-1">Third Modal</p>
          </b-modal>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Vertically centered" class=" mb-30">
          <b-button variant="primary" v-b-modal.modal-center
            >Launch centered modal</b-button
          >

          <b-modal id="modal-center" centered title="BootstrapVue">
            <p class="my-4">Vertically centered modal!</p>
          </b-modal>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Variant Modal" class=" mb-30">
          <div>
            <b-button @click="show = true" variant="primary"
              >Show Modal</b-button
            >

            <b-modal
              v-model="show"
              title="Modal Variants"
              :header-bg-variant="headerBgVariant"
              :header-text-variant="headerTextVariant"
              :body-bg-variant="bodyBgVariant"
              :body-text-variant="bodyTextVariant"
              :footer-bg-variant="footerBgVariant"
              :footer-text-variant="footerTextVariant"
            >
              <b-container fluid>
                <b-row class="mb-1 text-center">
                  <b-col cols="3"></b-col>
                  <b-col>Background</b-col>
                  <b-col>Text</b-col>
                </b-row>

                <b-row class="mb-1">
                  <b-col cols="3">Header</b-col>
                  <b-col>
                    <b-form-select
                      v-model="headerBgVariant"
                      :options="variants"
                    ></b-form-select>
                  </b-col>
                  <b-col>
                    <b-form-select
                      v-model="headerTextVariant"
                      :options="variants"
                    ></b-form-select>
                  </b-col>
                </b-row>

                <b-row class="mb-1">
                  <b-col cols="3">Body</b-col>
                  <b-col>
                    <b-form-select
                      v-model="bodyBgVariant"
                      :options="variants"
                    ></b-form-select>
                  </b-col>
                  <b-col>
                    <b-form-select
                      v-model="bodyTextVariant"
                      :options="variants"
                    ></b-form-select>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="3">Footer</b-col>
                  <b-col>
                    <b-form-select
                      v-model="footerBgVariant"
                      :options="variants"
                    ></b-form-select>
                  </b-col>
                  <b-col>
                    <b-form-select
                      v-model="footerTextVariant"
                      :options="variants"
                    ></b-form-select>
                  </b-col>
                </b-row>
              </b-container>

              <div slot="modal-footer" class="w-100">
                <p class="float-left">Modal Footer Content</p>
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-right"
                  @click="show = false"
                >
                  Close
                </b-button>
              </div>
            </b-modal>
          </div>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card title="Tooltips and popovers" class=" mb-30">
          <b-button variant="info" v-b-modal.modalPopover>Show Modal</b-button>

          <b-modal id="modalPopover" title="Modal with Popover" ok-only>
            <p>
              This
              <b-button v-b-popover="'Popover inside a modal!'" title="Popover"
                >Button</b-button
              >
              triggers a popover on click.
            </p>
            <p>
              This
              <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will
              show a tooltip on hover.
            </p>
          </b-modal>
        </b-card>
      </b-col>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Modals"
  },
  data() {
    return {
      //   variant-modal
      show: false,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ],
      headerBgVariant: "primary",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "success",
      footerTextVariant: "dark",

      // confirm-message-box
      boxOne: "",
      boxTwo: ""
    };
  },
  methods: {
    // confirm-message-box
    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then(value => {
          this.boxOne = value;
        })
        .catch(err => {
          // An error occurred
        });
    },
    // confirm-message-box
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          this.boxTwo = value;
        })
        .catch(err => {
          // An error occurred
        });
    }
  }
};
</script>