<template>
  <div
    class="auth-layout-wrap"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div
            class="col-md-6 text-center"
            style="background-size: cover"
            :style="{ backgroundImage: 'url(' + logo + ')' }"
          >
            <div class="pl-3 auth-right">
              <div class="flex-grow-1"></div>
              <div class="w-100 mb-30"></div>
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
                  <b-button
                    @click="emailDuplicate"
                    pill
                    variant="primary ripple m-1"
                    >이메일 중복체크</b-button
                  >
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
                    >이름을 {{ $v.fName.$params.minLength.min }}글자 이상
                    입력해주세요.</b-alert
                  >
                </b-form-group>
                <b-row>
                  <b-col md="8" class=" mb-30">
                   <b-card title="주 활동지역 선택">

                    <b-dropdown variant="primary" id="dropdown-1" text="시도 선택" class="mb-2 signup">
                      <div v-for="(sido, index) in sidos" v-bind:key="index">
                        <b-dropdown-item @click="sidoSelected(sido)">{{
                          sido.sidoName
                        }}</b-dropdown-item>
                      </div>
                    </b-dropdown>

                    <b-dropdown variant="primary" :disabled="selectedSido" id="dropdown-2" text="구군 선택" class="mb-2 signup">
                      <div v-for="(gugun, index) in guguns" v-bind:key="index">
                        <b-dropdown-item @click="gugunSelected(gugun)">{{
                          gugun.gugunName
                        }}</b-dropdown-item>
                      </div>
                    </b-dropdown>
                  </b-card>
                  </b-col>
                </b-row>

              <label class="d-block text-12 text-muted">성별</label>
                <div class="col-md-6 offset-md-6 pr-0 mb-30">
                  <label class="radio radio-reverse radio-danger">
                    <input
                      type="radio"
                      name="orderStatus"
                      value=2
                      v-model="gender"
                    />
                    <span>여자</span>
                    <span class="checkmark"></span>
                  </label>

                  <label class="radio radio-reverse radio-success">
                    <input
                      type="radio"
                      name="orderStatus"
                      value=1
                      v-model="gender"
                    />
                    <span>남자</span>
                    <span class="checkmark"></span>
                  </label>
                </div>
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
                    {{ $v.password.$params.minLength.min }} 이상이어야
                    합니다.</b-alert
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
import dropdown from "vue-dropdowns";
//sweet alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "회원가입",
  },

  data() {
    return {
      fName: "",
      email: "",
      password: "",
      repeatPassword: "",
      emailAuth: false,
      bgImage: require("@/assets/images/signin/loginpage1.png"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      submitStatus: null,
      sidos: [],
      guguns:[],
      selectedgugun:"",
      selectedSido:"",
      gender:0,
      
    };
  },
  components: {
    dropdown: dropdown,
  },

  validations: {
    fName: {
      required,
      minLength: minLength(2),
    },

    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
    // emailAuth:{
    //   emailAuthValidate(emailAuth){
    //       if(emailAuth==false)
    //         return false;
    //   }
    // }

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
  mounted: function () {
    http.get(`areas`).then((res) => {
      console.log(JSON.stringify(res.data.data));
      this.sidos = res.data.data;
      console.log(this.sidos[0].sidoName);
    });
     var sidoDropBtn = document.getElementById('dropdown-1__BV_toggle_')
     sidoDropBtn.style.backgroundColor="#663399"
      sidoDropBtn.style.color="#FFFFFF"
     
  },

  computed: {
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },

  methods: {
    ...mapActions(["signUserUp"]),
    //   validate form
    sidoSelected(sido) {
      console.log(sido.sidoId)
      this.selectedSido = sido.sidoname
      http.get(`areas/`+sido.sidoId).then((res) =>{
        this.guguns= res.data.data
        console.log(this.guguns)
      })
      var sidoDrop = document.getElementById('dropdown-1')
      var sidoDropBtn = document.getElementById('dropdown-1__BV_toggle_')
      var gugunDrop = document.getElementById('dropdown-2')
      var gugunDropBtn = document.getElementById('dropdown-2__BV_toggle_')
      sidoDropBtn.innerText = sido.sidoName
      gugunDropBtn.innerText = "구군 선택"
      sidoDropBtn.style.backgroundColor="#663399"
      sidoDropBtn.style.color="#FFFFFF"
      gugunDropBtn.style.backgroundColor="#663399"
      gugunDropBtn.style.color="#FFFFFF"

    },
    gugunSelected(gugun){
      this.selectedgugun = gugun.gugunId
      console.log(this.selectedgugun)
      var gugunDrop = document.getElementById('dropdown-2')
      var gugunDropBtn = document.getElementById('dropdown-2__BV_toggle_')
      gugunDropBtn.innerText = gugun.gugunName
      gugunDropBtn.style.backgroundColor="#663399"
      gugunDropBtn.style.color="#FFFFFF"

    },
    submit() {
      console.log("회원가입 데이터 전송중..");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        var gugunId = new Object();
        gugunId.gugunId = this.selectedgugun
        var jsonGugunId = gugunId
        var data = {
          userEmail: this.email,
          userPw: this.password,
          userName: this.fName,
          emailAuth: this.emailAuth,
          gugunId: jsonGugunId,
          gender:this.gender,
        };
        console.log(data);
        this.signUserUp({ data });
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
        this.$router.push('/app/sessions/signIn')
      }
    },
    emailDuplicate() {
      http
        .get(`/users/check/${this.email}`)
        .then((res) => {
          if (res.data.data == true) {
            this.emailAuth = true;
            Swal.fire({
              icon:'success',
              text:'사용할 수 있는 이메일입니다!',
              showConfirmButton:false,
              timer:1200,
            })
          } else {
            Swal.fire({
              icon:'error',
              text:'이메일 형식이 잘못되었습니다!',
              showConfirmButton:false,
              timer:1200,
            })
          }
        })
        .catch((error) => {
          this.emailAuth = false;
          console.log("이메일 인증 실패");
            Swal.fire({
              icon:'error',
              text:'이미 가입된 이메일입니다!',
              showConfirmButton:false,
              timer:1200,
            })
          });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Created Account", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    inputSubmit() {
      console.log("submitted");
    },
  },
};
</script>

<style scoped>
.spinner.sm {
  height: 2em;
  width: 2em;
}
.dropdown-menu.show {
    height: 30vh;
    overflow-y: scroll;
}
</style>

