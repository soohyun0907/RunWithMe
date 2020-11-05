<template>
  <div class="main-content">
    <breadcumb :page="'Friends List'" :folder="'MyPage'" />
    <!-- <div class="wrapper"> -->
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="false"
        :search-options="{
          enabled: true,
          placeholder: 'Search this table'
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records'
        }"
        styleClass="tableOne vgt-table"
        :rows="rows"
      >
       <div slot="table-actions" class="mb-3">
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
                  </div>


        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="">
              <i class="i-Speach-Bubble-8 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
            <a href="">
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
          <span v-else-if="props.column.field == 'username'">
            <a href="">
              <div class="ul-widget-app__profile-pic">
                <img
                  class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                  :src="props.row.profile"
                  alt=""/>
                {{ props.row.username }}
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
import { mapGetters } from "vuex";

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
          label: "Email",
          field: "userEmail"
        },
        // {
        //   label: "등급",
        //   field: "span",
        //   html: true
        // },
        {
          label: "성별",
          field: "gender"
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
    ...mapGetters(["userInfo"]),
  },
  mounted() {
    this.getFriendList()
  },
  methods: {
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
