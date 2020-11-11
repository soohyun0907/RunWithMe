<template>
  <div class="main-content">
    <breadcumb :page="'Chat'" :folder="'apps'" />

    <div class="card chat-sidebar-container sidebar-container">
      <div class="chat-sidebar-wrap sidebar" :class="{ 'ml-0': isMobile }">
        <div class="border-right">
          <div
            class="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"
          >
            <a class="link-icon d-md-none" @click="isMobile = !isMobile">
              <i class="text-20 i-Letter-Close"></i>
            </a>
            <div class="form-group m-0 flex-grow-1">
              <input
                type="text"
                class="form-control form-control-rounded"
                id="search"
                v-model="search"
                placeholder="Search contacts"
              />
            </div>
          </div>

          <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            class="contacts-scrollable perfect-scrollbar  rtl-ps-none ps scroll"
          >
            <div>

              <div
                class="mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                Contacts
              </div>

              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="contact in filterContacts"
                :key="contact.userId"
              >
                <!-- <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                /> -->
                <h6 @click ="choice(contact.userId)" class="">{{ contact.username }}</h6>
              </div>


              <div
                class="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                Matching
              </div>
              <div style="margin : 0 80px;">
              <button type="button" class="btn round btn-dribble btn-icon rounded-circle m-1"
                @click ="matching('female')"
                style="width:40px; height:40px;">
                      <span class="ul-btn__icon" ><i class="text-20 i-Girl"></i></span>
              </button>
              <button type="button" class="btn round btn-twitter btn-icon rounded-circle m-1"
                 @click ="matching('male')"
                style="width:40px; height:40px;">
                  <span class="ul-btn__icon" ><i class="text-20 i-Cool-Guy"></i></span>
              </button>
              </div>
              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="contact in matchUsers"
                :key="contact.username"
                :class="contact.status"
              >
                <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                />
                <h6 @click ="choice(contact.userId)" class="">{{ contact.username }}</h6>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </div>
      </div> 
      <!-- 채팅사이드 바 -->

      <div class="chat-content-wrap sidebar-content">
        <div
          class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"
        >
          <a class="link-icon d-md-none" @click="getContactList()">
            <i class="text-20 i-Reddit"> </i>
          </a>
          <div class="d-flex align-items-center">
            <!-- <img
              :src="getSelectedUser.avatar"
              alt=""
              class="avatar-sm rounded-circle mr-2"
            /> -->
            <p class="m-0 text-title text-16 flex-grow-1">
               {{ roomName }} <!--+ "/" + roomDetail.roomId}} -->
            </p>
          </div>
        </div>
        <vue-perfect-scrollbar
          :settings="{ suppressScrollX: true, wheelPropagation: false }"
          class="chat-content perfect-scrollbar rtl-ps-none ps scroll"
          id="chatContainer"
        >

          <div>
            <div onscroll="chat_on_scroll()"
              class="list-group-item"
              v-for="(message, index) in messages"
              :key="index"
            >
              <div class="d-flex mb-30" v-if="back === message.sender">
                <div>{{ message.sender }} - {{ message.message }}</div>
              </div>

              <!-- START 나의 채팅 메시지 -->
              <div class="d-flex mb-20" v-if="testUserId === message.sender">
                <div class="message flex-grow-1" style="width: 70%">
                  <div class="d-flex">
                    <p class="mb-1 text-title text-16 flex-grow-1">
                      {{ message.sender }}
                    </p>
                    <!-- <span class="text-small text-muted">25 min ago</span> -->
                  </div>
                  <p class="m-0" >{{ message.message }}</p>
                </div>
                <img
                  :src="message.img"
                  alt=""
                  class="avatar-sm rounded-circle ml-3"
                />
              </div>
              <!-- END 나의 채팅 메시지 -->
              <!-- START 상대방의 메시지 -->
              <div
                class="d-flex mb-30 user"
                v-if="testUserId != message.sender && back != message.sender"
              >
                <img
                  :src="message.img"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                />
                <div class="message flex-grow-1" style="width: 70%">
                  <div class="d-flex">
                    <p class="mb-1 text-title text-16 flex-grow-1">{{message.sender}}</p>
                    <!-- <span class="text-small text-muted">24 min ago</span> -->
                  </div>
                  <p class="m-0">{{ message.message }}</p>
                </div>
              </div>
              <!-- END 상대방의 메시지 -->
            </div>
          </div>
        </vue-perfect-scrollbar>
        <!-- START 메시지 보내기 -->
        <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
          <form class="inputForm" onsubmit="return false">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-rounded"
                placeholder="메세지를 입력하세요"
                name="message"
                id="message"
                v-model="message"
                v-on:keypress.enter="sendMessage('TALK')"
              />
            </div>
            <div class="d-flex">
              <div class="flex-grow-1"></div>
              <button
                class="btn btn-icon btn-rounded btn-primary mr-2"
                type="button"
                @click="sendMessage('TALK')"
              >
              </button>
            </div>
          </form>
        </div>
        <!-- END 메시지 보내기 -->
      
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { isMobile } from 'mobile-device-detect';
import http from "@/utils/http-common";
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';
//import authData from '@/store/modules/authData';



export default {

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Chat"
  },
  data() {
    return {
      recentContacts: [],
      search: "",
      isMobile: false,
      roomId: "",
      roomName: "",
      msg: '',
      messages: [],
      testUserId: "",
      back: "[알림]",
      message:"",
      token: '',
      userCount: 0,
      sock : "",
      ws :"",
      matchUsers : []
    };
  },
  methods: {
    ...mapActions(["changeSelectedUser", "createAndSelectChatroomAction","sendMessages", ]),
    ...mapMutations(["selectUserLists","closeSidebar"]),

    matching: function(gender){
      var sex = gender;
      http
      .get("/friends/match/"+sex, 
      )
      .then((data) =>{
        console.log(data);
        this.matchUsers = data.data.data;
      })
    },


    choice: function(uid){
      // this.createAndSelectChatroomAction(uid);
      if(this.ws)
        this.ws.disconnect();
      this.isMobile = false;
      this.messages = []
      console.log(this.auth);
      this.createAndSelectChatroom(uid);
    },

    createAndSelectChatroom: function(uid){
      http
      .post("/match/room", 
      {
          guestId : uid
      })
      .then((data) =>{
          console.log(data);
          var roomInfo = data.data.data;
          this.roomId = roomInfo.roomId;
          this.roomName =  roomInfo.name;
          this.enterChat();
      })
    },

    send : function(type){
      console.log(type)
      console.log(this.msg)
      var payload = {"type": type, "msg":this.msg}
      this.sendMessages(payload);
    },

    getContactList : function(){
      if(this.isMobile == false)
        this.selectUserLists();

      this.isMobile = !this.isMobile;
    },
    chatScroll() {
      console.log("chatScroll");
      var objDiv = document.getElementById("chatList");
      if (this.flag) {
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    },
    chat_on_scroll(){
      var obj = document.getElementById("chatList")
      obj.scrollTop = obj.scroolHeight
      console.log("hihi")
    },
    enterChat: function(){
      var _this = this;

      http
          .get('/match/user').then(response => {
            
              console.log(";;lll")
              console.log(response.data);
              this.testUserId = response.data;

              _this.sock = new SockJS("http://localhost:8080/ws-stomp");
              _this.ws = Stomp.over(_this.sock);
              console.log("들어는 오냐")
              console.log(this.auth);

              _this.token = this.auth;

              console.log("token:" + _this.token)

              console.log("before")
              console.log(_this.ws)
              console.log("after")
              console.log("ri: " + _this.roomId)

              _this.ws.connect({"token":_this.token}, function(frame) {
                console.log("dd")
                _this.ws.subscribe("/sub/chat/room/"+ _this.roomId, function(message) {
                  console.log("subscribe")
                      var recv = JSON.parse(message.body);
                      console.log("sub")
                      console.log(recv)
                      _this.recvMessage(recv);
                });
              }, function(error) {
                  alert("서버 연결에 실패 하였습니다. 다시 접속해 주십시요.");
              });
        });
    },
    sendMessage: function(type) {
      console.log("ri: " + localStorage.getItem("roomId"))
      var payload = {"type": type, "msg":this.message}
      console.log("totototo: " + this.token);
      var header = {"AUTH":this.token};
      var body = JSON.stringify({type:payload.type, roomId: this.roomId, message:payload.msg});
      this.ws.send("/pub/chat/message", body, header);
      this.message = '';
    },
    recvMessage: function(recv) {

        this.userCount = recv.userCount;
        this.messages.push({"type":recv.type,"sender":recv.sender,"message":recv.message, "img": recv.imgUrl})
    }


  },

  computed: {
    ...mapGetters([
      "getContactLists",
      "getRecentUser",
      "getCurrentUser",
      "getSelectedUser",
      "getRoomInfo",
      "getMessages",
      "auth"
    ]),

    filterContacts() {
      return this.getContactLists;
    },

    roomDetail(){
      return this.getRoomInfo;
    },

    updateMessages(){
      return this.getMessages;
    },
    

  },

  created: function() {
    // console.log(this.getSelectedUser);
    this.getCurrentUser.forEach(currentUser => {
      currentUser.chatInfo.forEach(user => {
        this.getContactLists.filter(contact => {
          if (user.contactId == contact.id) {
            this.recentContacts.push(contact);
          }
        });
      });
    });

    
    // 친구목록 불러오기
    this.selectUserLists();

  },
  mounted() {
    this.$store.commit('closeSidebar')
  },
  updated: function () {
    var obj = document.getElementById("chatContainer");
    obj.scrollTop = obj.scrollHeight;
  },
};
</script>

<style>
</style>
