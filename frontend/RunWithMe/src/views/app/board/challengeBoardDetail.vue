<template>
    <div>
    <!-- best_sellers -->
      <breadcumb :page="'Challenge Board Detail'" :folder="'Board'" />
      <div class="row">
          <div class="col">
            <b-card class="card-profile-1 mb-30 text-center">
                <img src="@/assets/images/gibu/gibu1.png" alt />
                <h5 class="m-0">[챌린지 제안] {{ board.boardTitle }}</h5>
                
                <!-- <a href="http://naver.com/" target="_black">
                URL : http://naver.com
                <br>
                해당사이트로 이동</a>
                <br><br> -->
                <p>
                  {{ board.boardContent }}
                </p>

                <div class="card-socials-simple mt-4">

                <a @click="goBack">
                  <i class="i-Back1 primary" style="font-size:3em;" ></i>
                </a>
              </div>
            </b-card>
          </div>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "challengeBoardDetail",
  },
  data() {
    return {
      board: {
        boardTitle: "",
        boardContent: ""
      }
    }
  },
  mounted() {
    this.$store.commit('closeSidebar')
    http
      .get("boards/board/"+this.$route.query.boardId)
      .then(({data}) => {
        if(data.status == 200){
          this.board.boardTitle = data.data.boardTitle;
          this.board.boardContent = data.data.boardContent;
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      })
  },
  methods:{
      goBack(){
        this.$router.push("/app/board/challengeBoard");
      },
      // JoinChallenge(){
      //   alert("join challenge!!")
      // }
  }
};

</script>
