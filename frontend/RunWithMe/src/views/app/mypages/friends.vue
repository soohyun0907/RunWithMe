<template>
  <div class="main-content">
    <breadcumb :page="'친구 목록'" :folder="'MyPage'" />
    <!-- <div class="wrapper"> -->
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
       <!-- <div slot="table-actions" class="mb-3">
                    <b-button variant="primary" class="btn-rounded d-none d-sm-block" v-b-modal.modal-1
                      ><i class="i-Add-User text-white mr-2"> </i>친구 추가
                    </b-button>

                    <b-modal id="modal-1" title="Email로 친구 추가">
                      <b-form>
                        <b-form-group
                          id="input-group-1"
                          label="Email address:"
                          label-for="input-1"
                          description="친구의 이메일로 친구추가를 할수있어요."
                        >
                          <b-form-input
                            id="input-1"
                            type="email"
                            required
                            placeholder="Email을 입력하세요"
                          ></b-form-input>
                        </b-form-group>
                      </b-form>
                    </b-modal>
                  </div> -->


        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/apps/chat" @click="chatFriend(props.row.username);">
              <i class="i-Speach-Bubble-8 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
            <a href="" @click="deleteFriend(props.row.userId);">
              <i class="i-Close-Window text-25 text-danger"></i>
              {{ props.row.button }}</a
            >
          </span>
          <span v-else-if="props.column.field == 'gender'">
            <div v-if="props.row.gender=='1'">
              남자
            </div>
            <div v-else>
              여자
            </div>
          </span>
          <span v-else-if="props.column.field == 'gugunId.gugunName'">
            {{props.row.gugunId.sidoId.sidoName}} {{props.row.gugunId.gugunName}}
          </span>
          <span v-else-if="props.column.field == 'username'">
            <a href="">
              <div class="ul-widget-app__profile-pic" style="text-align:center">
                <div v-if="props.row.profile!=null">
                  <img
                    class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                    :src="props.row.profile" alt=""/>
                </div>
                <div v-else>
                  <img
                    class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                    :src="defaultProfile" alt=""/>
                </div>
                <div v-if="props.row.gender==1">
                  <i class ="i-Business-Man"/> {{ props.row.username }}
                </div>
                <div v-if="props.row.gender==2">
                  <i class ="i-Girl"/> {{ props.row.username }}
                </div>
              </div>
            </a>
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

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
        // {
        //   label: "Email",
        //   field: "userEmail"
        // },
        // {
        //   label: "등급",
        //   field: "span",
        //   html: true

        // },
        // {
        //   label: "성별",
        //   field: "gender"
        // },
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
      alert(friendId+"님과 채팅")
    },
    deleteFriend(friendId){
      http.delete(`friends/friend/${friendId}`, {
      })
      .then(data => {
        alert('팔로우를 취소합니다.')
      })
    },
    getFriendList(){
      console.log(this.userInfo.userId)
      // http.get(`friends/contacts/${this.userInfo.userId}`)
      http.get(`friends/contacts`)
      .then((res) => {
        console.log(res.data.data);
        this.rows = res.data.data
    });
    }
  }
};
</script>
<style >
</style>
