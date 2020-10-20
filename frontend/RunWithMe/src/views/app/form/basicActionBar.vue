<template>
  <div class="main-content">
    <breadcumb :page="'Basic Action Bar'" :folder="'Forms'" />
    <b-row>
      <b-col lg="6" class="mb-3">
        <b-card title="Default Action Bar">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
                class=" mb-30"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
                <div class="custom-separator"></div>
              </b-form-group>

              <div class="card-title">Communication</div>

              <b-form-group
                v-model="form.checked"
                id="input-group-4"
                class="mt-4"
              >
                <b-form-checkbox-group id="checkboxes-4">
                  <b-form-checkbox value="me">Email</b-form-checkbox>
                </b-form-checkbox-group>
                <b-form-checkbox-group id="checkboxes-4">
                  <b-form-checkbox value="me">SMS</b-form-checkbox>
                </b-form-checkbox-group>
                <b-form-checkbox-group id="checkboxes-4">
                  <b-form-checkbox value="me">Phone</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <div class="mt-4">
                <b-button type="submit" class="m-1" variant="primary"
                  >Submit</b-button
                >
                <b-button type="reset" variant="danger">Reset</b-button>
              </div>
            </b-form>
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
    title: "Basic Action Bar"
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },

      show: true
    };
  },
  methods: {
    onSubmit(el) {
      let x = el.preventDefault();
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your File Has Been Submitted",
        showConfirmButton: false,
        timer: 1500
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
