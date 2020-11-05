<template>
    <div>
    <!-- best_sellers -->
      <breadcumb :page="'Challenge Board Detail'" :folder="'Board'" />
      <div class="row">
          <div class="col">
            <b-card class="card-profile-1 mb-30 text-center">
                <img src="@/assets/images/gibu/gibu1.png" alt />
                <h5 class="m-0">[챌린지 제안] 사랑의 온도를 올려주세요</h5>
                
                <a href="http://naver.com/" target="_black">
                URL : http://naver.com
                <br>
                해당사이트로 이동</a>
                <br><br>
                <p>
                    같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??같이 기부레이스하실??
                </p>
                <button @click="JoinChallenge()" class="btn btn-primary btn-rounded">
                    챌린지 참가
                </button>
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
    title: "challengeBoard",
  },
  data() {
    return {
    }
  },
  methods:{
      goBack(){
          alert("hi back click")
      },
      JoinChallenge(){
          alert("join challenge!!")
      }
  }
};

</script>
