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
        mileage: 0
    };
  },
  created() {
    this.challengeId = this.$route.query.no;
    this.getChallengeInfo();
    this.getUserInfo();
  },
  methods: {
    getChallengeInfo(){
        http
        .get("challenges/"+this.challengeId)
        .then(({data}) => {
            if(data.status==200){
                this.challengeInfo = data.data.challengeId;
            }
            console.log(this.challengeInfo);
        })
        .catch((error) => {
            console.log(error);
            return;
        })
    },
    getUserInfo() {
        http
        .get('/users')
        .then(({data}) => {
            this.mileage = data.data.mileage;
        })
        .catch((error) => {
            console.log(error);
            return;
        })
    },
    onSubmit(el) {
      let x = el.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.donateAmount = 0;
    }
  }
};
</script>