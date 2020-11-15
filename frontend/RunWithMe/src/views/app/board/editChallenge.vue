<template>
  <div class="main-content">
    <breadcumb :page="'챌린지 수정'" :folder="'Challenge'" />
    <b-row>
      <!-- form-inputs-rounded -->
      <b-col md="12 mb-30">
        <b-card class title="Edit Challenge">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-row>
              <b-form-group
                class="col-md-6 mb-3"
                label="챌린지 이름"
                label-for="input-1"
              >
                <b-form-input
                  v-model="challenge.title"
                  type="text"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                label="챌린지 소개"
                label-for="input-1"
                description="챌린지에 대한 간단한 소개를 입력해주세요."
              >
                <b-form-input
                  v-model="challenge.content"
                  type="text"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                label="목표 거리 선택"
                label-for="input-1"
                description="총 목표 거리를 입력해주세요."
              >
                <b-form-input
                  v-model="challenge.distanceGoal"
                  type="text"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                label="개인 목표 거리 선택"
                label-for="input-1"
                description="참여하는 개인당 목표 거리를 입력해주세요."
              >
                <b-form-input
                  v-model="challenge.personalDistanceGoal"
                  type="text"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                label="목표 금액"
                label-for="input-1"
                description="총 목표 금액을 입력해주세요."
              >
                <b-form-input
                  v-model="challenge.donateGoal"
                  type="text"
                  required
                  placeholder=""
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                label="날짜 선택"
                label-for="input-1"
              >
                <date-range-picker ref="picker" 
                  :singleDatePicker="false"
                  v-model="challenge.dateRange">
                </date-range-picker>
              </b-form-group>

              <b-col md="12" v-if="updateChallengeImg">
                <input type="file" id="files" ref="files" v-on:change="handleFileUpload()"
                  accept="image/*" />
                <b-button size="sm" class="m-1" variant="primary" @click="submitFile()">이미지 수정</b-button>
                <b-button size="sm" class="m-1" variant="danger" @click="movePage()">이미지 수정안함</b-button>
              </b-col>

              <b-col md="12" v-else>
                <b-button class="m-1" type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import http from "@/utils/http-common";
import { mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "Edit Challenge"
  },
  components: { DateRangePicker },
  data() {
    return {
      updateChallengeImg: false,
      file: [],
      originInfo: {},
      challenge: {
        title: "",
        content: "",
        distanceGoal: 0,
        donateGoal: 0,
        personalDistanceGoal: 0,
        dateRange: {
          startDate: new Date(),
          endDate: new Date()
        }
      }
    }
  },
  mounted() {
    this.$store.commit('closeSidebar');
    this.getChallengeDetail();
  },
  methods: {
    ...mapMutations(["closeSidebar"]),
    onSubmit(el) {
      let x = el.preventDefault();
      http
        .put('challenges/'+this.originInfo.challengeId, {
          title: this.challenge.title,
          content: this.challenge.content,
          distanceGoal: this.challenge.distanceGoal,
          donateGoal: this.challenge.donateGoal,
          startTime: this.challenge.dateRange.startDate,
          endTime: this.challenge.dateRange.endDate,
          personalDistanceGoal: this.challenge.personalDistanceGoal
        })
        .then(({ data }) => {
          if(data.status == 200){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '챌린지 수정 완료 이미지 수정이 가능합니다.',
              showConfirmButton: false,
              timer: 1500
            })
            this.updateChallengeImg = true;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '오류가 발생하였습니다.',
            }).then((result) => {
              if (result.isConfirmed) {
                return;
              }
            })
          }
        })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.challenge.title = this.originInfo.title;
      this.challenge.content = this.originInfo.content;
      this.challenge.distanceGoal = this.originInfo.distanceGoal;
      this.challenge.donateGoal = this.originInfo.donateGoal;
      this.challenge.personalDistanceGoal = this.originInfo.personalDistanceGoal;
      this.challenge.dateRange.startDate = this.originInfo.startTime;
      this.challenge.dateRange.endDate = this.originInfo.endTime;
    },
    submitFile(){
      let formData = new FormData();
      formData.append('files', this.file[0]);
      http
        .post('/challenges/images/'+this.originInfo.challengeId, formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then(({ data }) => {
          if(data.status == 200){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '등록되었습니다.',
              showConfirmButton: false,
              timer: 1500
            })
            setTimeout(() => {
              document.location.href = "/app/board/challengeDetail?challengeId="+this.originInfo.challengeId; //챌린지 참여 목록으로 이동?
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '오류가 발생하였습니다.',
            }).then((result) => {
              if (result.isConfirmed) {
                return;
              }
            })
          }
        })
    },
    handleFileUpload() {
      this.file = this.$refs.files.files;
    },
    getChallengeDetail() {
      http
      .get("challenges/"+this.$route.query.challengeId)
      .then(({data}) => {
        if(data.status == 200){
          //console.log(data.data);
          this.originInfo = data.data.challengeId;
          this.challenge.title = data.data.challengeId.title;
          this.challenge.content = data.data.challengeId.content;
          this.challenge.distanceGoal = data.data.challengeId.distanceGoal;
          this.challenge.donateGoal = data.data.challengeId.donateGoal;
          this.challenge.personalDistanceGoal = data.data.challengeId.personalDistanceGoal;
          this.challenge.dateRange.startDate = data.data.challengeId.startTime;
          this.challenge.dateRange.endDate = data.data.challengeId.endTime;
        }
      })
      .catch((error) => {
        //console.log(error);
        return;
      })
    },
    movePage() {
      this.$router.push("/app/board/challengeDetail?challengeId="+this.originInfo.challengeId);
    }
  }
};
</script>
<style scoped>

</style>