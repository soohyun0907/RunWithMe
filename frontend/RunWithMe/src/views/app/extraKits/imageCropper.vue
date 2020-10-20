<template>
  <div class="main-content">
    <breadcumb :page="'Image Cropper'" :folder="'Extra Kits'" />

    <!-- imageCropper -->
    <b-row>
      <b-col md="6 mb-30">
        <b-card title="Input Crop Image">
          <input
            type="file"
            name="image"
            accept="image/*"
            style="font-size: 1.2em; padding: 10px 0;"
            @change="setImage"
          />

          <br />
          <div
            style="width: 100%; height:100%; border: 1px solid gray; display: inline-block;"
          >
            <h4>Insert Image</h4>
            <vue-cropper
              ref="cropper"
              :guides="true"
              :view-mode="2"
              drag-mode="crop"
              :auto-crop-area="0.5"
              :min-container-width="250"
              :min-container-height="180"
              :background="true"
              :rotatable="true"
              :src="imgSrc"
              alt="Source Image"
              :img-style="{ width: '400px', height: '300px' }"
            >
            </vue-cropper>
          </div>

          <br />
          <br />

          <div class="mt-4">
            <b-button
              class="m-2"
              variant="primary"
              @click="cropImage"
              v-if="imgSrc != ''"
              >Crop</b-button
            >
            <b-button
              class="m-2"
              variant="success"
              @click="rotate"
              v-if="imgSrc != ''"
              >Rotate</b-button
            >
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Output Crop Image">
          <img
            :src="cropImg"
            style="width: 100%; height: 100%; border: 1px solid gray"
            alt="Cropped Image"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  components: {
    VueCropper
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Image Cropper"
  },

  data() {
    return {
      imgSrc: "",
      cropImg: ""
    };
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    rotate() {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
    }
  }
};
</script>

