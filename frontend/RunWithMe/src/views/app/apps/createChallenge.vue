<template>
  <div class="main-content">
    <breadcumb :page="'Create Challenge'" :folder="'Apps'" />
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

              <b-col md="12">
                <b-button class="m-1" type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <input type="file" id="files" ref="files" v-on:change="handleFileUpload()"
      accept="image/*" />
    <button v-on:click="submitFile()">Submit</button>
  </div>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import http from "@/utils/http-common";
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Challenge Creation Form"
  },
  components: { DateRangePicker },
  data() {
    return {
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
    };
  },
  methods: {
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
            alert("챌린지 생성 완료 이미지 등록으로 이동");
          } else {
            alert("오류가 발생하였습니다.");
            return;
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
      formData.append('file', this.file[0],"D:\PJT3\s03p31a303\frontend\RunWithMe\src\assets\images\photo-long-2.jpg");
      console.log(this.file[0]);
      http
        .post('/challenges/images/2',{
          // challengeId: 1,
          challengeImg: formData
        }, {
          headers: {
            // 'Content-Type': 'multipart/form-data'
            'Content-Type': 'application/form-data'
          }
        })
        .then(({ data }) => {
          if(data.status == 200){
            alert(data.message);
          } else {
            alert("오류가 발생하였습니다.");
            return;
          }
        })
    },
    handleFileUpload() {
      this.file = this.$refs.files.files;
      console.log(this.file);
    }
  }
};
</script>
<style scoped>

</style>