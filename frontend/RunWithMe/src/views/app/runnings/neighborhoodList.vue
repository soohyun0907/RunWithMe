<template>
  <div class="main-content">
    <breadcumb :page="'Neighborhood List'" :folder="'Runnings'" />
    <div class="ul-contact-page">
      <div>
        <h4 style="margin-top: 5px">
          주변 러너 추천
        </h4>
        <span>| {{ userInfo.gugunId.sidoId.sidoName }}
          {{ userInfo.gugunId.gugunName }} </span>
      </div>
      <div class="row" style="margin-top: 5px">
        <b-col lg="12" md="12" class="mb-30 text-center">
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              class="ul-form-input"
              placeholder="Enter your name...."
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col v-if="!haveRunners">
          <span>아직 주변 러너들이 없어요ㅠ.ㅠ</span>
        </b-col>

        <b-col
          lg="6"
          xl="4"
          md="6"
          class="mb-30"
          v-for="(contact, index) in contactlist"
          :key="index"
        >
          <router-link :to="`/app/runnings/friendsDetail`">
            <div class="card">
              <div class="card-body">
                <div class="ul-contact-page__profile">
                  <div class="user-profile-img">
                    <!-- <img class="profile-picture mb-2" src="@/assets/images/faces/1.jpg" alt="" style="width:40%;height:40%;"> -->
                    <img class="profile-picture mb-2" :src="contact.imgUrl" />
                  </div>
                  <p class="m-0 text-24">{{ contact.nickname }}</p>
                  <div class="col">
                    총 킬로미터
                    <h2>{{ contact.accumulated_distance }}</h2>
                    KM
                  </div>
                  <div class="ul-contact-page__info">
                    <div class="row">
                      <div class="col">
                        <p class="text-muted mt-3">총 러닝 횟수</p>
                        {{ contact.running_cnt }}
                      </div>
                      <div class="col">
                        <p class="text-muted mt-3">평균 거리</p>
                        {{ contact.avg_distance }} km
                      </div>
                      <div class="col">
                        <p class="text-muted mt-3">평균 페이스</p>
                        {{ convertToTime(contact.avg_pace) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/utils/http-common";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "contactList",
  data() {
    return {
      contactlist: [],
      area: "",
      haveRunners: true,
    };
  },
  mounted() {
    this.getRunners();
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo"]),
  },
  methods: {
    convertToTime(origin) {
      var time = "";
      time += parseInt(origin / 60) + "'";
      time += (origin % 60) + '"';
      return time;
    },
    getRunners() {
      http
        .get(`runnings/summary/region`)
        .then(({ data }) => {
          if (data.status == 200) {
            let obj;
            var contactlist = this.contactlist;
            data.data.forEach((element) => {
              console.log(data);
              obj = new Object();
              obj.nickname = element.userId.username;
              obj.imgUrl = element.userId.profile;
              obj.accumulated_distance = element.totalDistance;
              obj.running_cnt = element.totalCount;
              if (element.totalTime == 0) {
                obj.avg_pace = 0;
              } else {
                obj.avg_pace = element.totalDistance / element.totalTime;
              }

              if (element.totalCount == 0) {
                obj.avg_distance = 0;
              } else {
                obj.avg_distance = element.totalDistance / element.totalCount;
              }
              contactlist.push(obj);
            });
          }
          console.log(this.contactlist);
          if (this.contactlist.length == 0) {
              this.haveRunners = false;
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    },
  },
};
</script>
<style scoped>
</style>
