<template>
  <div class="main-content">
    <breadcumb :page="'프로필 수정'" :folder="'My Page'" />
    <div class="card user-profile o-hidden mb-30">
      <div class="header-cover" style="background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg"></div>
        <div class="user-info">
          <div v-if="userInfo.profile!=null">
            <img class="profile-picture avatar-lg mb-2" :src="userInfo.profile">
          </div>
          <div v-else>
            <img class="profile-picture avatar-lg mb-2" :src="defaultProfile">
          </div>
          <input type="file" id="files" ref="files" style="margin-left:70px" v-on:change="handleFileUpload()" accept="image/*" />
          <b-button variant="primary ripple m-1" v-on:click="submitFile(userInfo)">프로필 변경 확인</b-button>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 col-6">
            </div>
            <div class="col-md-4 col-6">
            <div class=" mb-30">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "프로필 수정"
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo","defaultProfile"]),
  },
  mounted() {
    this.$store.commit('closeSidebar')
  },
  methods: {
    ...mapMutations(["mutateProfile","closeSidebar"]),

    handleFileUpload() {
        this.file = this.$refs.files.files;
    },
    submitFile(userInfo){
      let formData = new FormData();
      formData.append('profile', this.file[0]);
      http
        .put('users/'+ userInfo.userId + '/profile', formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then(({ data }) => {
          if(data.status == 200){
            //console.log(data)
            this.$store.commit('mutateProfile',data.data.profile)
            //console.log(data.data.profile)
            this.$router.go(-1)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '오류가 발생했습니다.',
            })
            return;
          }
        })
    },
  },
}
</script>
<style scoped>

</style>
