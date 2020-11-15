<template>
  <div class="main-content">
    <breadcumb :page="'챌린지 결제하기'" :folder="'Apps'" />
    <b-row>
      <b-col lg="6" class="mb-3">
        <b-card title="챌린지 정보">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" >
              <b-form-group
                :label="'챌린지 이름: '+challengeInfo.title"
                class=" mb-30" />
              <b-form-group
                :label="'목표 거리: '+challengeInfo.distanceGoal + 'KM'"
                class=" mb-30" />
              <b-form-group
                :label="'목표 금액: '+challengeInfo.donateGoal + '원'"
                class=" mb-30" />
              <b-form-group
                :label="'개인 목표 거리: '+challengeInfo.personalDistanceGoal + 'KM'"
                class=" mb-30" />
              <div class="custom-separator"></div>

              <div class="card-title">후원 금액을 설정해주세요.</div>

              <b-form-group
                class="col-md-6 mb-3"
                :label="'사용 가능한 금액:  ' + mileage + ' 원'"
                label-for="input-1"
              >
              <b-form-input
                v-model="donateAmount"
                type="text"
                required
                placeholder="원"
               ></b-form-input>
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
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Pay Challenge"
  },
  data() {
    return {
        challengeId: "",
        challengeInfo: {},
        donateAmount: 0,
        mileage: 0,
        movePayment: "",
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {
    this.challengeId = this.$route.query.no;
    this.getChallengeInfo();
    this.mileage = this.userInfo.mileage;
    if(this.mileage == 0)
      this.showMovepaymentModal();
  },
  mounted() {
    this.$store.commit('closeSidebar')
  },
  methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar","mutateUserInfo","mutateUserTotal"]),
    getChallengeInfo(){
        http
        .get("challenges/"+this.challengeId)
        .then(({data}) => {
            if(data.status==200){
                this.challengeInfo = data.data.challengeId;
            }
            // //console.log(this.challengeInfo);
        })
        .catch((error) => {
            //console.log(error);
            return;
        })
    },
    onSubmit(el) {
      let x = el.preventDefault();
      http
        .post("/challenges/runners",{
          challengeId: this.challengeId,
          donation: this.donateAmount
        })
        .then(({data}) => {
          if(data.status == 200){
            this.makePayment();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '챌린지 참여 중 오류가 발생하였습니다.'
            });
          }
        }).catch( err =>{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '챌린지 참여 중 오류가 발생하였습니다.'
          });
        })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.donateAmount = 0;
    },
    makePayment() {
      http
        .get("payment/"+this.donateAmount)
        .then(({data}) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "참여 성공",
            showConfirmButton: false,
            timer: 1500
          })
          //유저 정보 갱신
            http.get('users/').
            then(res => {
              //console.log(res)
              this.$store.commit('mutateUserInfo',res.data.data.userId)
              this.$store.commit('mutateUserTotal',res.data.data)
              localStorage.setItem("userInfo",JSON.stringify(res.data.data))
            })
            this.$router.push("/app/board/challenges");
        })
        .catch((error) => {
          // this.cancelChallenge();
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '마일리지가 부족합니다'
            });
          //console.log(error);
          return;
        })
    },
    cancelChallenge() {
      //console.log(this.challengeId+" "+this.donateAmount);
      http
        .delete("/challenges/runners/"+this.challengeId+"/"+this.donateAmount)
        .then(({data}) => {
          if(data.status == 200){
            // alert("챌린지 참여 중 오류가 발생하였습니다.")
            Swal.fire({
              icon: 'success',
              title: '챌린지 취소 성공',
              text: '챌린지 참여를 취소하였습니다.'
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '챌린지 참여 중 오류가 발생하였습니다.'
            });
            return;
          }
        })
        .catch((error) => {
          // this.cancelChallenge();
          //console.log(error);
          return;
        })
    },
    showMovepaymentModal(){
      this.movePayment = "";
      this.$bvModal
        .msgBoxConfirm("현재 마일리지가 부족합니다. 충전 페이지로 이동하시겠습니까?", {
          title: "충전 페이지로 이동하시겠습니까?",
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
          this.movePayment = value;
          if(this.movePayment)
            this.$router.push("/app/apps/payment");
          })
        .catch(err => {
          // An error occurred
          //console.log(error);
        });
    },
  }
};
</script>
