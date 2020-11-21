<template>
  <div class="main-content">
    <breadcumb :page="'챌린지 생성'" :folder="'Challenge'" />
    <b-row>
      <!-- form-inputs-rounded -->
      <b-col md="12 mb-30">
        <b-card class title="Create Challenge">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-row>
              <b-form-group
                class="col-md-6 mb-3"
                label="챌린지 이름"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form.cName"
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
                  v-model="form.content"
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
                  v-model="form.goalDistance"
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
                  v-model="form.personalDistanceGoal"
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
                  v-model="form.goalDonate"
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
                  v-model="form.dateRange">
                </date-range-picker>
              </b-form-group>

              <div v-if="updateChallengeImg">
                <input type="file" id="files" ref="files" v-on:change="handleFileUpload()"
                  accept="image/*" />
                <b-button class="m-1" variant="primary" v-on:click="submitFile()">Submit</b-button>
              </div>

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
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Challenge Creation Form"
  },
  components: { DateRangePicker },
  data() {
    return {
      challengeId: "",
      updateChallengeImg: false,
      file: [],
      form: {
        cName: "",
        content: "",
        goalDistance: "",
        personalDistanceGoal: "",
        goalDonate: "",
        dateRange: {
            startDate: new Date(),
            endDate: new Date()
        },
      },
      alertModal: ""
    };
  },
  computed: {
    ...mapGetters(["userInfo","defaultProfile"]),
  },
  mounted() {
    this.$store.commit('closeSidebar');
    if(this.userInfo.roles.length == 1){
      this.alertModal = "";
      this.$bvModal
        .msgBoxOk("관리자만 접근 가능한 페이지입니다.", {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          this.alertModal = value;
          this.$router.push("/app/dashboards/main");
        })
        .catch(err => {
          console.log(error);
        });
    }
  },
  methods: {
    ...mapMutations(["closeSidebar"]),
    onSubmit(el) {
      let x = el.preventDefault();
      http
        .post('/challenges', {
          title: this.form.cName,
          content: this.form.content,
          distanceGoal: this.form.goalDistance,
          donateGoal: this.form.goalDonate,
          startTime: this.form.dateRange.startDate,
          endTime: this.form.dateRange.endDate,
          personalDistanceGoal: this.form.personalDistanceGoal
        })
        .then(({ data }) => {
          if(data.status == 200){
            this.challengeId = data.data.challengeId;
            this.updateChallengeImg = true;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '챌린지 생성 완료 이미지를 등록해주세요.',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '오류가 발생했습니다.'
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
      this.form.cName = "";
      this.form.goalDistance = "";
      this.form.goalMoney = "";
      this.form.dateRange = {
            startDate: new Date(),
            endDate: new Date()};
    },
    submitFile(){
      let formData = new FormData();
      formData.append('files', this.file[0]);
      // console.log(this.file[0]);
      http
        .post('/challenges/images/'+this.challengeId, formData, 
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
              title: '파일 업로드를 성공했습니다.',
              showConfirmButton: false,
              timer: 1500
            })
            setTimeout(() => {
              document.location.href = "/app/board/challenges";
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '오류가 발생하였습니다.'
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
      // console.log(this.file);
    }
  }
};
</script>
<style scoped>

</style>