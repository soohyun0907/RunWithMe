import http from "@/utils/http-common";
import router from "@/router.js"
import axios from "axios";
import { setTimeout } from "core-js";


export default {
  state: {
    loading: false,
    error: null,
    isLogin:false,
    auth:"",
    userInfo:{},
    userTotal:{},
    myRunning:{},
    defaultProfile:require('@/assets/images/faces/defaultProfile.png')
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error,
    userInfo: state => state.userInfo,
    userTotal:state=>state.userTotal,
    auth: state => state.auth,
    isLogin:state =>state.isLogin,
    myRunning:state=>state.myRunning,
    defaultProfile:state=>state.defaultProfile,
  },
  mutations: {
    mutateMyRunning(state,myRunning){
      state.myRunning = myRunning
    },
    mutateUserTotal(state,userTotal){
      state.userTotal = userTotal
    },
    mutateProfile(state, profile){
      state.userInfo.profile = profile
    },
    mutateIsLogin(state, isLogin) {
      state.isLogin = isLogin
    },
    mutateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      state.loading = false;
      state.error = null;
      state.isLogin = true;
    },
    mutateAuth(state, auth) {
      state.auth = auth
    },
    setLogout(state) {
      state.userInfo = {};
      state.userTotal = {};
      state.loading = false;
      state.error = null;
      state.auth=""
      state.isLogin=false;
      if(localStorage.getItem("userInfo"))
        localStorage.removeItem("userInfo")
      if(localStorage.getItem("auth"))
        localStorage.removeItem("auth")
      // this.$router.push("/");
    },
    setLoading(state) {
      state.loading = false;
      state.error = null;
    },
    setError(state, data) {
      state.error = data;
      state.userInfo = {};
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
 
    login(context, { userEmail, userPw }) {
      context.commit("clearError");
      context.commit("setLoading", true);
      http.post(`users/signin`,{
        userEmail:userEmail,
        userPw:userPw        
      }).then(res => {
          context.commit('mutateUserInfo', res.data.data.userId)
          context.commit('mutateUserTotal', res.data.data)
          context.commit('mutateAuth',res.headers.auth)
          localStorage.setItem("auth",res.headers.auth)
          localStorage.setItem("userInfo",JSON.stringify(res.data.data))
          router.push("/app/dashboards/main")
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error)
        context.commit('mutateUserInfo',{})
        context.commit("setError", error);
        if(localStorage.getItem("userInfo")){
          localStorage.removeItem("userInfo")
        }
        if(localStorage.getItem("auth")){
          localStorage.removeItem("auth")
        }
      });
    },

    signUserUp({commit}, data) {
      commit("setLoading", true);
      commit("clearError");
      var signUpUnit = data.data
      var jsons = JSON.stringify(signUpUnit)
      http.post("users",jsons,{
        headers:{'Content-Type':'application/json'}
      })
        .then(res => {
          commit("setLoading", false);
         
          if(localStorage.getItem("userInfo")){
            localStorage.removeItem("userInfo")
          }
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log("회원가입 실패")
          console.log(error);
          if(localStorage.getItem("userInfo")){
            localStorage.removeItem("userInfo")
          }
          if(localStorage.getItem("auth")){
            localStorage.removeItem("auth")
          }
        });
    },
    signOut(context) {
      http.get(`users/signout`)
      .then(res =>{
      })
      .catch(err => {
        console.log(err)
      })
      if(localStorage.getItem("userInfo")){
        localStorage.removeItem("userInfo")
      }    
      if(localStorage.getItem("auth")){
        localStorage.removeItem("auth")
      }
      context.commit("setLogout");
      setTimeout(() => {
        router.go(0)
      },200);
    },
  },
};
