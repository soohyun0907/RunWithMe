<template>
    <div class="main-content">
        <breadcumb :page="'프로필 수정'" :folder="'My Page'" />
        
         <div class="card user-profile o-hidden mb-30">
       
          <div class="header-cover" style="background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg"></div>
            <div class="user-info">
                <img class="profile-picture avatar-lg mb-2" :src="userInfo.profile">
                   
                   <b-form-group label="이름">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    v-model.trim="$v.fName.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.fName.minLength"
                    >이름을 {{ $v.fName.$params.minLength.min }}글자 이상
                    입력해주세요.</b-alert
                  >
                </b-form-group>

                <b-row>
                  <b-col md="8" class=" mb-30">
                   <b-card class="h-100" title="주 활동지역 선택">

                    <b-dropdown size="sm" variant="primary" id="dropdown-1" text="시도 선택" class="mb-2">
                      <div v-for="(sido, index) in sidos" v-bind:key="index">
                        <b-dropdown-item @click="sidoSelected(sido)">{{
                          sido.sidoName
                        }}</b-dropdown-item>
                      </div>
                    </b-dropdown>

                    <b-dropdown size="sm" variant="primary" id="dropdown-2" text="구군 선택" class="mb-2">
                      <div v-for="(gugun, index) in guguns" v-bind:key="index">
                        <b-dropdown-item @click="gugunSelected(gugun)">{{
                          gugun.gugunName
                        }}</b-dropdown-item>
                      </div>
                    </b-dropdown>
                  </b-card>
                  </b-col>
                </b-row>

              <label class="d-block text-12 text-muted">성별</label>
                <div class="col-md-6 offset-md-6 pr-0 mb-30">
                  <label class="radio radio-reverse radio-danger">
                    <input
                      type="radio"
                      name="orderStatus"
                      value=2
                      v-model="gender"
                    />
                    <span>여자</span>
                    <span class="checkmark"></span>
                  </label>

                  <label class="radio radio-reverse radio-success">
                    <input
                      type="radio"
                      name="orderStatus"
                      value=1
                      v-model="gender"
                    />
                    <span>남자</span>
                    <span class="checkmark"></span>
                  </label>
                </div>
                <b-form-group label="Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model.trim="$v.password.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.minLength"
                    >비밀번호는
                    {{ $v.password.$params.minLength.min }} 이상이어야
                    합니다.</b-alert
                  >
                </b-form-group>

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
    title: "Profile"
  },
   computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo"]),
  },
  mounted() {
  },
  methods: {
    ...mapMutations(["mutateProfile"]),
  },
}
</script>
<style scoped>

</style>
