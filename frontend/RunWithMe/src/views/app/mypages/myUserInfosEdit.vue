<template>
    <div class="main-content">
        
         <breadcumb :page="'회원 정보'" :folder="'My Page'" />

        <div class="card user-profile o-hidden mb-30">
          <div class="header-cover" style="background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg"></div>
            <div class="user-info">
              <div v-if="userInfo.profile!=null">
                <img class="profile-picture avatar-lg mb-2" :src="userInfo.profile">
              </div>
              <div v-else>
                <img class="profile-picture avatar-lg mb-2" :src="defaultProfile">
              </div> 
            </div>
            <div class="card-body">
              <div>
                <h4>회원 정보 수정</h4>
                <hr>
                <b-form @submit.prevent="submit">

                    <b-form-group label="기존 Password">
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

                <b-form-group label="새로운 Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model.trim="changePassword"
                  >
                  </b-form-input>

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

                    <b-dropdown variant="primary" id="dropdown-1" text="시도 선택" class="mb-2">
                      <div v-for="(sido, index) in sidos" v-bind:key="index">
                        <b-dropdown-item id="sido" @click="sidoSelected(sido)">{{
                          sido.sidoName
                        }}</b-dropdown-item>
                      </div>
                    </b-dropdown>

                    <b-dropdown variant="primary" id="dropdown-2" text="구군 선택" class="mb-2">
                      <div v-for="(gugun, index) in guguns" v-bind:key="index">
                        <b-dropdown-item @click="gugunSelected(gugun)">{{
                          gugun.gugunName
                        }}</b-dropdown-item>
                      </div>
                    </b-dropdown>
                  </b-card>
                  </b-col>
                </b-row>

                <b-button
                  type="submit"
                  block
                  variant="primary"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                  >회원정보 변경</b-button
                >

              </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapActions,mapMutations } from "vuex";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import dropdown from "vue-dropdowns";
export default {
  metaInfo: {
    title: "회원정보 수정",
  },

  data() {
    return {
      fName: "",
      password: "",
      changePassword: "",
      sidos: [],
      guguns:[],
      selectedgugun:"",
      submitStatus: null,
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
  },
  mounted: function () {
    this.$store.commit('closeSidebar')
    http.get(`areas`).then((res) => {
    console.log(JSON.stringify(res.data.data));
    this.sidos = res.data.data;
    console.log(this.sidos[0].sidoName);
    });
  },
  computed: {
    ...mapGetters(["loggedInUser", "loading", "error","getSideBarToggleProperties", "userInfo","defaultProfile"]),
  },
   methods: {
    ...mapActions(["signOut"]),
    ...mapMutations(["closeSidebar","mutateUserInfo"]),
    //   validate form
    sidoSelected(sido) {
      console.log(sido.sidoName)
      http.get(`areas/`+sido.sidoId).then((res) =>{
        this.guguns= res.data.data
        console.log(this.guguns)
      })
      
      document.getElementById('dropdown-1').innerText=sido.sidoName
    },
    gugunSelected(gugun){
      this.selectedgugun = gugun.gugunId
      console.log(this.selectedgugun)
      document.getElementById('dropdown-2').innerText=gugun.gugunName
    },
    submit() {
      console.log("회원정보 수정 데이터 전송중..");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        var gugunId = new Object();
        gugunId.gugunId = this.selectedgugun
        var jsonGugunId = gugunId
        var data = {
          userPw: this.password,
          changePw: this.changePassword,
          userName: this.fName,
          gugunId: jsonGugunId,
        };
        console.log(data);
        http.put(`users/`, data)
        .then(data=>{
          console.log("회원정보 수정!")
          console.log(data)
          http.get(`users/`)
          .then(data => {
            console.log("회원정보 갱신!")
            this.$store.commit('mutateUserInfo',data.data.data)
          })
        }).catch(err =>{
          console.log("회원정보 수정 에러")
        })

        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
        this.$router.go(-1)
      }
    },
  },
}
</script>
<style scoped>

</style>
