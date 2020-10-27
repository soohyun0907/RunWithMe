<template>
  <div
    class="auth-layout-wrap"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div
            class="col-md-6 text-center "
            style="background-size: cover"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pl-3 auth-right">
              <div class="auth-logo text-center mt-4">
                <img :src="logo" alt="" />
              </div>
              <div class="flex-grow-1"></div>
              <div class="w-100 mb-30">
                <router-link
                  to="signIn"
                  class="btn btn-outline-primary btn-outline-email btn-block btn-icon-text btn-rounded"
                  href="signin.html"
                >
                  <i class="i-Mail-with-At-Sign"></i> Sign in with Email
                </router-link>
                <a
                  class="btn btn-outline-primary btn-outline-google btn-block btn-icon-text btn-rounded"
                >
                  <i class="i-Google-Plus"></i> Sign in with Google
                </a>
                <a
                  class="btn btn-outline-primary btn-outline-facebook btn-block btn-icon-text btn-rounded"
                >
                  <i class="i-Facebook-2"></i> Sign in with Facebook
                </a>
              </div>
              <div class="flex-grow-1"></div>
            </div>
          </div>

          <b-col md="6">
            <div class="p-4">
              <h1 class="mb-3 text-18">회원가입</h1>
              <b-form @submit.prevent="submit">
                

                <b-form-group label="Email">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="email"
                    v-model="email"
                  >
                  </b-form-input>
                   <b-button @click="emailDuplicate" pill variant="primary ripple m-1">이메일 중복체크</b-button>

                </b-form-group>

                <b-form-group label="이름">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    v-model.trim="$v.fName.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.fName.minLength"
                    >이름을 
                    {{ $v.fName.$params.minLength.min }}글자 이상 입력해주세요.</b-alert
                  >
                </b-form-group>

                <b-form-group label="Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model.trim="$v.password.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.minLength"
                    >비밀번호는 
                    {{ $v.password.$params.minLength.min }} 이상이어야 합니다.</b-alert
                  >
                </b-form-group>

                <b-form-group label="Password 확인">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model.trim="$v.repeatPassword.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.repeatPassword.sameAsPassword"
                    >비밀번호가 일치하지 않습니다.</b-alert
                  >
                </b-form-group>

                <b-button
                  type="submit"
                  block
                  variant="primary"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                  >Sign Up</b-button
                >

                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo("success") }}
                  {{ this.$router.push("/") }}
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
                  {{ makeToast("danger") }}
                </p>
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
              </b-form>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import http from "@/utils/http-common";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignUp"
  },

  data() {
    return {
      fName: "",
      email: "",
      password: "",
      repeatPassword: "",
      emailAuth:false,
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      submitStatus: null,
    };
  },

  validations: {
    fName: {
      required,
      minLength: minLength(2)
    },

    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    },
    emailAuth:{
      
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

  computed: {
    ...mapGetters(["loggedInUser", "loading", "error"])
  },

  methods: {
    ...mapActions(["signUserUp"]),
    //   validate form
    submit() {
      console.log("submit!");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        var data = {
          userEmail :this.email,
          userPw :this.password,
          userName:this.fName,
          emailAuth:this.emailAuth
        }
        console.log(data)
        this.signUserUp({ data });
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 1000);
      }
    },
    emailDuplicate() {
      http.get(`/users/check/${this.email}`)
        .then(res => {
          console.log("이메일 인증 시도 성공")
          if(res.data.data==true){
            console.log("회원 가입 가능한 이메일입니다!")
            this.emailAuth=true
          }else{
            console.log("중복된 이메일입니다.")
            console.log(res)
          }
        })
        .catch((error) =>{
          console.log("이메일 인증 실패")
          console.log(error)
        });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Created Account", {
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

ㅌ
