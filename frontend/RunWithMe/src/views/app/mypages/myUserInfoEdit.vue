<template>
    <div class="main-content">
        <breadcumb :page="'회원 정보 수정'" :folder="'My Page'" />
        <div class="card user-profile o-hidden mb-30">
            <div class="card-body">
                <p class="text-primary mb-1">프로필 이미지 등록</p>
                <input type="file" id="files" ref="files" v-on:change="handleFileUpload()"
                accept="image/*" />
                <button v-on:click="submitFile(userInfo)">Submit</button>
                <div class="row">
                    <div class="col-md-4 col-6">
                        <div class=" mb-30">
                            <p class="text-primary mb-1"><i class="i-Calendar text-16 mr-1"></i>이름</p>
                            <span>{{userInfo.username}}</span>
                        </div>
                        <div class=" mb-30">
                            <p class="text-primary mb-1"><i class="i-Edit-Map text-16 mr-1"></i>Email</p>
                            <span>{{userInfo.userEmail}}</span>
                        </div>
                        <div class=" mb-30">
                            <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i>성별</p>
                            <div v-if="userInfo.gender=='1'">
                                <span>남자</span>
                            </div>

                            <div v-if="userInfo.gender=='2'">
                                <span>여자</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class=" mb-30">
                            <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> 도시 </p>
                            <span>{{userInfo.gugunId.sidoId.sidoName}} {{userInfo.gugunId.gugunName}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters } from "vuex";

export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Profile"
  },
   computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo"]),
  },
  mounted() {
  },
  methods: {
    handleFileUpload() {
        this.file = this.$refs.files.files;
    },
    submitFile(userInfo){
      let formData = new FormData();
      formData.append('profile', this.file[0]);
      console.log(this.file[0]);
      http
        .put('users/'+ userInfo.userId + '/profile', formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then(({ data }) => {
          if(data.status == 200){
            alert(data.message);
            console.log(data.data);
          } else {
            alert("오류가 발생하였습니다.");
            return;
          }
        })
    },
  },
}
</script>
<style scoped>

</style>
