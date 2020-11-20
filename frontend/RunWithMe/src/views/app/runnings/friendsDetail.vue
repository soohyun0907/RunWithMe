<template>
  <div class="main-content">
    <div class="user-profile-img">
      <div v-if="friendInfo.userId && friendInfo.userId.profile!= null">
        <img
          class="profile-picture mb-2"
          :src="friendInfo.userId.profile"
          height="120vw"
        />
      </div>
      <div v-else>
        <img
          class="profile-picture mb-2"
          :src="defaultProfile"
          height="120vw"
        />
      </div>
    </div>
    
    <div v-if ="friendInfo.userId">
      <p class="m-0 text-24" style="text-align: center">
        {{ friendInfo.userId.username }}
      </p>
      <div class="col" style="text-align: center">
        {{ friendInfo.userId.gugunId.sidoId.sidoName }}
        {{ friendInfo.userId.gugunId.gugunName }}
        <h5>
          총 경험치 : <code>{{ friendInfo.totalExp }}</code>
        </h5>
      </div>
      <div align="center">
        <b-button v-if="isFriend" variant="outline-dark m-1" @click="cancleFollow()">팔로우 취소</b-button>
        <b-button v-if="!isFriend && friendInfo.userId.userId!=userInfo.userId" variant="info ripple m-1" @click="insertFollow()">팔로우</b-button>
      </div>
    </div>
    <br />
    <div v-if="!isRunning" align="center">
        아직 {{ friendInfo.userId.username }} 님의 런닝 기록이 없습니다.
      </div>
    <div
      ref="rowView"
      class="row"
      :class="{ 'list-grid': isListView, 'list-horizontal': !isListView }"
    >
      <div
        :class="{
          'col-md-6  col-lg-4 col-xl-3': isListView,
          'col-md-12': !isListView,
        }"
        class="list-item"
        :key="index"
        v-for="(item, index) in items"
        transition="list"
      >
         <router-link :to="{name:'runningFriends', query:{friendName:friendInfo.userId.username, runningId:item.runningId}}">
          <div
            class="card o-hidden mb-30 d-flex"
            :class="{ 'flex-column': isListView, 'flex-row': !isListView }"
          >
            <div class="list-thumb d-flex">
              <img alt="" :src="item.img" />
            </div>
            <div
              class="flex-grow-1"
              :class="{ 'd-bock': isListView, 'pl-2 d-flex': !isListView }"
            >
              <div
                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"
                :class="{ 'flex-lg-row': !isListView }"
              >
                <div class="item-title">{{ item.title }} 런닝</div>
                <br />
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  {{ item.total_distance }}KM /&nbsp; &nbsp; &nbsp; &nbsp;
                  {{ convertToTime(item.running_avg_pace) }} /&nbsp;
                  {{ item.acc_time_hour }}{{ item.acc_time_min }}'{{
                    item.acc_time_second
                  }}''
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "Board",
  },
  data() {
    return {
      items: [],
      isListView: false,
      isFriend: true,
      friendInfo: {},
      records: [],
      isRunning: true,
    };
  },
  mounted() {
    http
      .post(`ranks/search`, {
        userId: this.$route.query.friendId,
      })
      .then((data) => {
        this.friendInfo = data.data.data[0];
        // //console.log(this.friendInfo);
        this.getRunning();
        this.isFollower();
      });
    // //console.log(this.$route.query.friendId);
    this.$store.commit("closeSidebar");
  },
  computed: {
    ...mapGetters(["userInfo", "userTotal","defaultProfile"]),
  },
  methods: {
    // ...mapMutations(["mutateProfile","closeSidebar","defaultProfile"]),
    getRunningTime(startTime, endTime) {
      var runningTime = "";
      runningTime += parseInt(endTime.hour() - startTime.hour()) + ":";
      runningTime += parseInt(endTime.minute() - startTime.minute());
      return runningTime;
    },
    convertToTime(origin) {
      var time = "";
      time += parseInt(origin / 60) + "'";
      time += (origin % 60) + '"';
      return time;
    },
    isFollower() {
      // //console.log(this.friendInfo.userId);
      http
        .get(`friends/friend/` + this.friendInfo.userId.userId)
        .then(({ data }) => {
            //console.log(data);
          if (data.data == true) {
            this.isFriend = true;
          } else {
            this.isFriend = false;
          }
        })
        .catch((error) => {
          //console.log(error);
          return;
        });
    },
    getRunning() {
      http
        .get(`runnings/` + this.friendInfo.userId.userId)
        .then(({ data }) => {
          if (data.status == 200) {
            let obj;
            data.data.forEach((element) => {
              obj = new Object();
              obj.runningId= element.runningId;
              obj.img = element.thumbnail;
              obj.title = element.startTime.split("T")[0];
              obj.total_distance = element.accDistance.toFixed(2);
              obj.accumulcated_time = element.accTime;
              if (element.accTime == 0 || element.accDistance == 0) {
                obj.running_avg_pace = 0;
              } else {
                obj.running_avg_pace = (
                  element.accDistance / element.accTime
                ).toFixed(2);
              }
              obj.acc_time_min = parseInt(obj.accumulcated_time / 60);
              if (obj.acc_time_min > 60) {
                obj.acc_time_hour = parseInt(obj.acc_time_min / 60);
                obj.acc_time_min = obj.acc_time_min % 60;
              }
              obj.acc_time_second = obj.acc_time_min % 60;
              this.items.push(obj);
            });
          }
          // //console.log(this.items);
          if (this.items.length == 0) {
            this.isRunning = false;
          }
        })
        .catch((error) => {
          //console.log(error);
          return;
        });
    },
    insertFollow() {
        http.post(`friends/friend/`+this.friendInfo.userId.userId)
        .then(({data}) => {
            if(data.status == 200) {
                this.isFriend = true;
                // alert("팔로우 성공");
                // swal("팔로우 성공!", "Follow success!", "success");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '팔로우 성공',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        .catch((error) => {
            //console.log(error);
            return;
        });
    },
    cancleFollow() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'b-button',
                cancelButton: 'b-button'
            },
            buttonsStyling: {
                confirmButton: "outline-dark m-1",
                cancelButton: 'info ripple m-1'
            }
        })

        swalWithBootstrapButtons.fire({
            title: '팔로우를 취소하시겠습니까?',
            text: "다시 팔로우 가능합니다!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '팔로우를 취소할래요.',
            cancelButtonText: '계속 팔로우할래요.',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                http.delete(`friends/friend/`+this.friendInfo.userId.userId)
                .then(({data}) => {
                    if(data.status == 200) {
                        this.isFriend = false;
                    }
                })
                .catch((error) => {
                    //console.log(error);
                    return;
                });
                swalWithBootstrapButtons.fire(
                '팔로우 취소',
                '팔로우가 취소되었습니다.',
                'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                '취소되었습니다.',
                '계속 팔로우 중입니다.',
                'error'
                )
            }
        })
    },
  },
};
</script>
<style scoped>
</style>
