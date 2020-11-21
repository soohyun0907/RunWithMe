<template>
  <div class="main-content">
    <breadcumb :page="'챌린지 관리'" :folder="'Challenge'" />
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
          <a @click="deleteChallenge(props.row.challengeId);">
            <i class="i-Close-Window text-25 text-danger"></i>
            {{ props.row.button }}
          </a>
        </span>
        <span v-else-if="props.column.field == 'title'">
          <router-link :to="{name:'challengeDetail', query:{challengeId:props.row.challengeId}}">
            {{ props.row.title}}
          </router-link>
        </span>
      </template>
    </vue-good-table>
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
    title: "챌린지 관리"
  },
  data() {
    return {
      columns: [
        {
          label: "ID",
          field: "challengeId"
        },
        {
          label: "챌린지명",
          field: "title",
          html: true,
        },
        // {
        //   label: "목표금액",
        //   field: "donateGoal"
        // },
        // {
        //   label: "목표거리",
        //   field: "distanceGoal"
        // },
        // {
        //   label: "기간",
        //   field: "startTime"
        // },
        // {
        //   label: "기간",
        //   field: "endTime"
        // },
        {
          label: "삭제",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right"
        }
      ],
      rows: [],
      deleteModal: "",
      alertModal: ""
    };
  },
  computed: {
    ...mapGetters(["userInfo","defaultProfile"]),
  },
  mounted() {
    this.getChallenges();
    this.$store.commit('closeSidebar')
    if(this.userInfo.roles.length == 1){
      this.alertModal = "";
      this.$bvModal
        .msgBoxOk("관리자만 접근 가능한 페이지입니다.", {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          footerClass: "p-2",
          hideHeaderClose: true,
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
    getChallenges() {
      http
        .get("challenges")
        .then(({data}) => {
          if(data.status==200){
            this.rows = data.data;
          }
        })
        .catch((error) => {
          //console.log(error);
          return;
        });
    },
    deleteChallenge(challengeId){
      this.deleteModal = "";
      this.$bvModal
        .msgBoxConfirm("삭제하면 되돌릴 수 없습니다.", {
          title: "삭제하시겠습니까?",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          this.deleteModal = value;
          if(this.deleteModal) {
            http
            .delete("challenges/" + challengeId)
            .then(({data}) => {
              if(data.status == 200) {
                Swal.fire({
                  icon: 'success',
                  text: '챌린지가 삭제되었습니다.'
                });
                this.$router.go(0);
              }
              else if(data.status == 403) {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: '챌린지에 참여 중인 유저가 있어 삭제가 불가능합니다.'
                });
              }
            })
            .catch((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '삭제 중 오류가 발생하였습니다'
              });
              //console.log(error);
              return;
            })
          }
        })
        .catch(err => {
          // console.log(error);
        });
    },
  }
};
</script>
<style >
</style>
