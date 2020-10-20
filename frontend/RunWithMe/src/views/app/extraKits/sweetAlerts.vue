<template>
  <div class="main-content">
    <breadcumb :page="'Alerts'" :folder="'Extra Kits'" />
    <b-row>
      <b-col md="6 mb-30">
        <b-card class="h-100" title="Basic Alerts">
          <b-button block variant="primary" @click="basic" class="m-2"
            >Basic</b-button
          >
          <b-button block variant="primary" @click="title" class="m-2"
            >With Title</b-button
          >
          <b-button block variant="primary" @click="html" class="m-2"
            >With Html</b-button
          >
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card class="h-100" title="Custom Alert 2 Toast">
          <b-button variant="primary" @click="showAlert" class="m-2"
            >Hello World</b-button
          >
          <b-button variant="danger" @click="wrongAlert" class="m-2"
            >Wrong Alert</b-button
          >
          <b-button variant="success" @click="successMessage" class="m-2"
            >Success Message Alert</b-button
          >
          <b-button variant="info" @click="confirmMessage" class="m-2"
            >Confirm Message Alert</b-button
          >
          <b-button variant="warning" @click="questionAlert" class="m-2"
            >Question Alert</b-button
          >
          <b-button block variant="primary" @click="customImage" class="m-2"
            >Custom Image</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Sweet Alerts"
  },
  methods: {
    // basic
    basic() {
      this.$swal("Hello Vue world!!!");
    },
    //title
    title() {
      this.$swal({
        title: "Oops...",
        text: "That thing is still around?"
      });
    },
    // html
    html() {
      this.$swal({
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//github.com">links</a> ' +
          "and other HTML tags"
      });
    },
    // customImage
    customImage() {
      this.$swal({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        animation: false
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