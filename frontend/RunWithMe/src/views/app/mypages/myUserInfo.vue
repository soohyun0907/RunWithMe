<template>
    <div class="main-content">
        
         <breadcumb :page="'회원 정보'" :folder="'My Page'" />

        <div class="card user-profile o-hidden mb-30">
            <div class="header-cover" style="background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg"></div>
                <div class="user-info">
                    <img class="profile-picture avatar-lg mb-2" :src="userInfo.profile">
                        <b-button variant="outline-info" style="padding:0.2em" @click="goUserInfoEdit()">프로필 변경</b-button>
                        <p class="m-0 text-24">{{userInfo.username}} 님</p>
                        <p class="text-muted m-0">{{userInfo.userEmail}}</p>
            </div>
            <div class="card-body">
                <div>
                    <b-tabs content-class="mt-3" align="center">
                        
                        <b-tab title="회원 정보" active>
                            <h4>회원 정보 확인</h4>
                            <hr>

                            <div class="row">
                                <div class="col-md-4 col-6">
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Calendar text-16 mr-1"></i>이름</p>
                                        <span>{{userInfo.username}}</span>
                                    </div>
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Edit-Map text-16 mr-1"></i>Email</p>
                                        <span style="white-space:nowrap;">{{userInfo.userEmail}}</span>
                                    </div>
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i>성별</p>
                                        <div v-if="userInfo.gender=='1'">
                                            <span>남자</span>
                                        </div>

                                        <div v-if="userInfo.gender=='2'">
                                            <span>여자</span>
                                        </div>
                                    </div>
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Professor text-16 mr-1"></i>등급</p>
                                        <span><span class="badge badge-danger">Pro</span></span>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> 도시 </p>
                                        <span>{{userInfo.gugunId.sidoId.sidoName}} {{userInfo.gugunId.gugunName}}</span>
                                    </div>
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i>누적 거리</p>
                                        <span>512km</span>
                                    </div>
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Cloud-Weather text-16 mr-1"></i> 누적 런닝</p>
                                        <span>62회</span>
                                    </div>
                                    <div style="text-align:center" class=" mb-30">
                                        <p class="text-primary mb-1"><i class="i-Face-Style-4 text-16 mr-1"></i>누적 시간</p>
                                        <span>589시간</span>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    
                                    
                                </div>
                            </div>
                             <b-button variant="outline-info" style="padding:0.2em" @click="goUserInfosEdit()">회원 정보 수정</b-button>
                       

                        </b-tab>
                       <b-tab title="회원 탈퇴" >
                            <b-card title="회원 탈퇴">
                                <div class=" my-3">
                                    <b-button variant="danger" id="popover-out-check"
                                    title="Popover Title"
                                    >회원 탈퇴하기
                                    </b-button>
                                    <b-popover target="popover-out-check" triggers="hover" placement="bottom">
                                    <template #title> 정말 탈퇴하시겠습니까? </template>
                                    <b>다시 되돌릴수 없습니다.</b>
                                    <input type="password" v-model="inputPass" placeholder="비밀번호를 입력하세요"/>
                                    <br>
                                    <b-button @click="memberOut()" variant="danger ripple m-1">탈퇴 확인</b-button>

                                    </b-popover> 
                                </div>
                            </b-card>

                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapActions } from "vuex";

export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Profile"
  },
  data() {
    return {
      inputPass: "",
      }
  },
   computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo"]),
  },

  mounted() {
  },
  methods: {
    ...mapActions(["signOut"]),
    memberOut(){
        var data = this.userInfo 
        data["user_pw"] = this.inputPass
        console.log(data)
        http.delete(`users`,data)  
        .then(data => {
            this.signOut();
            console.log("i'm gone..")
        })
      },
      goUserInfoEdit() {
          this.$router.push("/app/mypages/myUserInfoEdit");
      },
      goUserInfosEdit(){
          this.$router.push("/app/mypages/myUserInfosEdit");
      },
  },
}
</script>
<style scoped>

</style>
