<template>
  <div class="main-content">
    <breadcumbcustom :title="'주변 러너 추천'" :desc="area" />
    <div class="ul-contact-page">
      <div class="row" style="margin-top: 5px">
        <!-- <b-col lg="12" md="12" class="mb-30 text-center">
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              class="ul-form-input"
              placeholder="Enter your name...."
            ></b-form-input>
          </b-form-group>
        </b-col> -->

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
          <router-link :to="{name:'friendsDetail', query:{friendId:contact.friendId}}">
            <div class="card">
              <div class="card-body">
                <div class="ul-contact-page__profile">
                  
                  <div class="user-profile-img">
                    <img v-if="contact.imgUrl == null" class="profile-picture mb-2" :src="defaultProfile" height="120vw">
                    <img class="profile-picture mb-2" :src="contact.imgUrl" height="120vw" />
                  </div>
                  <p class="m-0 text-24">{{ contact.nickname }}</p>
                  <div class="col">
                    총 킬로미터
                    <h2>{{ contact.totalDistance }}</h2>
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
                        {{ contact.avg_distance.toFixed(2) }} km
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
import { mapGetters, mapActions, mapMutations } from "vuex";

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
    this.$store.commit('closeSidebar');
    this.area = this.userInfo.gugunId.sidoId.sidoName + " " + this.userInfo.gugunId.gugunName;
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo", "defaultProfile"]),
  },
  methods: {
    ...mapMutations(["closeSidebar"]),
    convertToTime(origin) {
      var time = "";
      time += parseInt(origin / 60) + "'";
      time += (origin % 60) + '"';
      return time;
    },
    convertSectoMin(origin) {
      return parseInt(origin/60);
    },
    getRunners() {
      http
        .get(`runnings/summary/region`)
        .then(({ data }) => {
          if (data.status == 200) {
            // console.log(data.data);
            let obj;
            var contactlist = this.contactlist;
            data.data.forEach((element) => {
              console.log(element);
              obj = new Object();
              obj.friendId = element.userId.userId;
              obj.nickname = element.userId.username;
              obj.imgUrl = element.userId.profile;
              obj.totalDistance = element.totalDistance.toFixed(2);
              obj.running_cnt = element.totalCount;
              obj.avg_pace = element.totalTime;

              if (element.totalTime == 0) {
                obj.avg_pace = 0;
              } else {
                obj.avg_pace = parseInt( this.convertSectoMin(element.totalTime) / parseInt(element.totalDistance)) * 100;
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
