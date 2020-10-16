<template>
  <div class="main-content">
    <breadcumb :page="'Validation Form'" :folder="'Forms'" />

    <b-row>
      <b-col md="6">
        <b-card title="Validate Form">
          <b-form @submit.prevent="submit">
            <b-form-group label="First Name">
              <b-form-input
                class="mb-2"
                label="Name"
                placeholder="Enter First Name"
                v-model.trim="$v.fName.$model"
              >
              </b-form-input>

              <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!$v.fName.minLength"
                >Name must have at least
                {{ $v.fName.$params.minLength.min }} letters.</b-alert
              >
            </b-form-group>
            <b-form-group label="Last Name">
              <b-form-input
                class="mb-2"
                label="Name"
                placeholder="Enter Your Last Name"
                v-model.trim="$v.lName.$model"
              >
              </b-form-input>

              <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!$v.lName.minLength"
                >Name must have at least
                {{ $v.lName.$params.minLength.min }} letters.</b-alert
              >
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input
                class="mb-2"
                label="Name"
                placeholder="email address"
                type="email"
              >
              </b-form-input>
            </b-form-group>

            <b-form-group label="Password">
              <b-form-input
                class="mb-2"
                label="Name"
                type="password"
                v-model.trim="$v.password.$model"
              >
              </b-form-input>

              <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!$v.password.minLength"
                >Minimum
                {{ $v.password.$params.minLength.min }} charaters.</b-alert
              >
            </b-form-group>

            <b-form-group label="Repeat Password">
              <b-form-input
                class="mb-2"
                label="Name"
                type="password"
                v-model.trim="$v.repeatPassword.$model"
              >
              </b-form-input>

              <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!$v.repeatPassword.sameAsPassword"
                >Passwords must be identical.</b-alert
              >
            </b-form-group>

            <b-button
              type="submit"
              variant="primary"
              :disabled="submitStatus === 'PENDING'"
              >Submit</b-button
            >

            <p v-once class="typo__p" v-if="submitStatus === 'OK'">
              {{ makeToastTwo("success") }}
            </p>
            <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
              {{ makeToast("danger") }}
            </p>
            <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
              <div class="spinner sm spinner-primary mt-3"></div>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Component"
  },
  data() {
    return {
      fName: "",
      lName: "",
      password: "",
      repeatPassword: "",
      submitStatus: null,
      peopleAdd: [
        {
          multipleName: "Johnn"
        },
        {
          multipleName: ""
        }
      ]
    };
  },
  validations: {
    fName: {
      required,
      minLength: minLength(4)
    },
    lName: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(5)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }

    // add input
    // peopleAdd: {
    //   required,
    //   minLength: minLength(3),
    //   $each: {
    //     multipleName: {
    //       required,
    //       minLength: minLength(5)
    //     }
    //   }
    // },
    // validationsGroup:['peopleAdd.multipleName']
  },

  methods: {
    //   validate form
    submit() {
      console.log("submit!");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 1000);
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Submitted", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },

    inputSubmit() {
      console.log("submitted");
    }
  }
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
