<template>
  <div class="main-content">
    <breadcumb :page="'Toast'" :folder="'Extra Kits'" />

    <b-row>
      <b-col md="12 mb-30">
        <b-card title="Variants Toast">
          <div>
            <b-button @click="makeVariantToast()" class="mb-2 m-1"
              >Default</b-button
            >
            <b-button
              variant="primary"
              @click="makeVariantToast('primary')"
              class="mb-2 m-1"
              >Primary</b-button
            >
            <b-button
              variant="secondary"
              @click="makeVariantToast('secondary')"
              class="mb-2 m-1"
              >Secondary</b-button
            >
            <b-button
              variant="danger"
              @click="makeVariantToast('danger')"
              class="mb-2 m-1"
              >Danger</b-button
            >
            <b-button
              variant="warning"
              @click="makeVariantToast('warning')"
              class="mb-2 m-1"
              >Warning</b-button
            >
            <b-button
              variant="success"
              @click="makeVariantToast('success')"
              class="mb-2 m-1"
              >Success</b-button
            >
            <b-button
              variant="info"
              @click="makeVariantToast('info')"
              class="mb-2 m-1"
              >Info</b-button
            >
          </div>
        </b-card>
      </b-col>
      <b-col md="12 mb-30">
        <b-card title="Toaster Target">
          <div>
            <b-button
              variant="outline-danger"
              @click="toastTarget('b-toaster-top-right')"
              class="mb-2 m-1"
              >Top Right</b-button
            >
            <b-button
              variant="outline-primary"
              @click="toastTarget('b-toaster-top-left')"
              class="mb-2 m-1"
              >Top Left</b-button
            >
            <b-button
              variant="outline-info"
              @click="toastTarget('b-toaster-top-center')"
              class="mb-2 m-1"
              >Top Center</b-button
            >
            <b-button
              variant="outline-success"
              @click="toastTarget('b-toaster-top-full')"
              class="mb-2 m-1"
              >Top Full</b-button
            >
            <b-button
              variant="outline-danger"
              @click="toastTarget('b-toaster-bottom-right', true)"
              class="mb-2 m-1"
              >Bottom Right</b-button
            >
            <b-button
              variant="outline-primary"
              @click="toastTarget('b-toaster-bottom-left', true)"
              class="mb-2 m-1"
              >Bottom Left</b-button
            >
            <b-button
              variant="outline-dark"
              @click="toastTarget('b-toaster-bottom-center', true)"
              class="mb-2 m-1"
              >Bottom Center</b-button
            >
            <b-button
              variant="outline-warning"
              @click="toastTarget('b-toaster-bottom-full', true)"
              class="mb-2 m-1"
              >Bottom Full</b-button
            >
          </div>
        </b-card>
      </b-col>

      <b-col md="6 mb-30">
        <b-card title="Custom component">
          <div>
            <b-button @click="$bvToast.show('my-toast')">Show toast</b-button>

            <b-toast id="my-toast" variant="warning" solid>
              <div
                slot="toast-title"
                class="d-flex flex-grow-1 align-items-baseline"
              >
                <b-img
                  blank
                  blank-color="#ff5555"
                  class="mr-2"
                  width="12"
                  height="12"
                ></b-img>
                <strong class="mr-auto">Notice!</strong>
                <small class="text-muted mr-2">42 seconds ago</small>
              </div>
              This is the content of the toast. It is short and to the point.
            </b-toast>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Toasts"
  },
  data() {
    return {
      // toast-target
      counter: 0,
      // advanced-usage
      count: 0
    };
  },
  methods: {
    // variant-toast
    makeVariantToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    //   toast-target
    toastTarget(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    },

    // sweetLaert-2
    // hello-world
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
    // wrong-alert
    wrongAlert() {
      this.$swal({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>"
      });
    },

    // success-message-alert
    successMessage() {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    // confirm-message-alert
    confirmMessage() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    // question-alert
    questionAlert() {
      this.$swal("The Internet?", "That thing is still around?", "question");
    }
  }
};
</script>