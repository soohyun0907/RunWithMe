<template>
  <div class="main-content">
    <breadcumb :page="'친구 목록'" :folder="'MyPage'" />
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="false"
        :search-options="{
          enabled: true,
          placeholder: '검색'
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records'
        }"
        rowsPerPageText="d"
        styleClass="tableOne vgt-table"
        :rows="rows"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a @click="chatFriend(props.row.userId.username);">
              <i class="i-Speach-Bubble-8 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
            <a @click="deleteFriend(props.row.userId.userId);">
              <i class="i-Close-Window text-25 text-danger"></i>
              {{ props.row.button }}</a
            >
          </span>
          <span v-else-if="props.column.field == 'gender'">
            <div v-if="props.row.userId.gender=='1'">
              남자
            </div>
            <div v-else>
              여자
            </div>
          </span>
          <span class="friendList" v-else-if="props.column.field == 'gugunId.gugunName'">
            {{props.row.userId.gugunId.sidoId.sidoName}} {{props.row.userId.gugunId.gugunName}}
          </span>
          <span v-else-if="props.column.field == 'username'">
            <router-link :to="{name:'friendsDetail', query:{friendId: props.row.userId.userId}}">
              <div class="ul-widget-app__profile-pic" style="text-align:center">
                <div v-if="props.row.userId.profile!=null">
                  <img
                    class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                    :src="props.row.userId.profile" alt=""/>
                </div>
                <div v-else>
                  <img
                    class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                    :src="defaultProfile" alt=""/>
                </div>
                  <div class="oneLine friendList">
                    {{ props.row.userId.username }}
                  </div>
              </div>
            </router-link>
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

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

export default {
  metaInfo: {
    title: "친구 목록"
  },
  data() {
    return {
      columns: [
        {
          label: "이름",
          field: "username"
        },
        {
          label: "지역",
          field: "gugunId.gugunName"
        },
        {
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right"
        }
      ],
      rows: []
    };
  },
  computed: {
    ...mapGetters(["userInfo","defaultProfile"]),
  },
  mounted() {
    this.getFriendList()
    this.$store.commit('closeSidebar')
  },
  methods: {
    ...mapMutations(["closeSidebar"]),
    chatFriend(friendId){
      swalWithBootstrapButtons.fire({
          title: friendId+'님과 채팅하시겠습니까?',
          text: "채팅방으로 이동합니다.",
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: '네',
          cancelButtonText: '아니요',
          reverseButtons: false

      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push("/app/apps/chat");
        } else if (
              result.dismiss === Swal.DismissReason.cancel
          ) {
              swalWithBootstrapButtons.fire(
              '취소되었습니다.',
              '',
              'error'
              )
          }
      })
    },
    deleteFriend(friendId){
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
            http.delete(`friends/friend/${friendId}`, {
            })
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
            ).then((result) => {
              this.$router.go(0);
            })
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
    getFriendList(){
      http.get(`friends/contacts`)
      .then((res) => {
        this.rows = res.data.data
    });
    }
  }
};
</script>
<style scoped>
.friendList {
  overflow:scroll;
  white-space:nowrap;
}
.oneLine{
  display:block; 
  width:50px;
  white-space:nowrap;
}
</style>
