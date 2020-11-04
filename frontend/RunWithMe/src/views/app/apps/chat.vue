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
              <i class="icon-regular ml-0 mr-3 i-Left"></i>
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
                class="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                Recent
              </div>
              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="contact in getRecentUser"
                :key="contact.name"
                :class="contact.status"
              >
                <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                />
                <h6 class="">{{ contact.name }}</h6>
              </div>





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
                <!-- :class="contact.status"
              > -->
                <!-- @click="changeSelectedUser(contact.id)"
              > -->
                <!-- <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                /> -->
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
            <i class="icon-regular i-Right ml-0 mr-3"></i>
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
        >

          <div v-for=" m in messages">
                <h1> {{m.sender + " " + m.message}} </h1>
          </div>
          <!-- <div>
            <div class="d-flex mb-30">
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">
                    {{ getSelectedUser.name }}
                  </p>
                  <span class="text-small text-muted">25 min ago</span>
                </div>
                <p class="m-0">
                  Do you ever find yourself falling into the “discount trap?
                </p>
              </div>
              <img
                :src="getSelectedUser.avatar"
                alt=""
                class="avatar-sm rounded-circle ml-3"
              />
            </div>

            <div class="d-flex mb-30 user">
              <img
                src="@/assets/images/faces/1.jpg"
                alt=""
                class="avatar-sm rounded-circle mr-3"
              />
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">Jhon Doe</p>
                  <span class="text-small text-muted">24 min ago</span>
                </div>
                <p class="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="d-flex mb-30">
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">
                    {{ getSelectedUser.name }}
                  </p>
                  <span class="text-small text-muted">25 min ago</span>
                </div>
                <p class="m-0">
                  Do you ever find yourself falling into the “discount trap?
                </p>
              </div>
              <img
                :src="getSelectedUser.avatar"
                alt=""
                class="avatar-sm rounded-circle ml-3"
              />
            </div>
            <div class="d-flex mb-30 user">
              <img
                src="@/assets/images/faces/1.jpg"
                alt=""
                class="avatar-sm rounded-circle mr-3"
              />
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">Jhon Doe</p>
                  <span class="text-small text-muted">24 min ago</span>
                </div>
                <p class="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div> -->
        </vue-perfect-scrollbar>
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text">내용</label>
            </div>
            <input type="text" class="form-control" v-model="message" v-on:keypress.enter="sendMessage('TALK')">
            <div class="input-group-append">
                <button class="btn btn-primary" type="button" @click="sendMessage('TALK')">보내기</button>
            </div>
        </div>
        <!-- <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
          <form class="inputForm" @submit.prevent="sendMessage('TALK')">
            <div class="form-group">
              <textarea
                class="form-control form-control-rounded"
                placeholder="Type your message"
                name="message"
                id="message"
                v-model="msg"
                cols="30"
                rows="3"
                spellcheck="false"
              ></textarea>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1"></div>
              <button class="btn btn-icon btn-rounded btn-primary mr-2" type="submit">
                <i class="i-Paper-Plane"></i>
              </button>
              <button
                class="btn btn-icon btn-rounded btn-outline-primary"
                type="button"
              >
                <i class="i-Add-File"></i>
              </button> 
            </div>
          </form>
        </div> -->
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
      message:"",
      token: '',
      userCount: 0,
      sock : "",
      ws :""
    };
  },
  methods: {
    ...mapActions(["changeSelectedUser", "createAndSelectChatroomAction","sendMessages", ]),
    ...mapMutations(["selectUserLists"]),

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
          //this.selectedUser = roomInfo.name;
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

    enterChat: function(){
      var _this = this;

      http
          .get('/chat/user').then(response => {
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
                      //this.userCount = recv.userCount;
                      // state.messages.unshift({"type":recv.type,"sender":recv.sender,"message":recv.message})
                  });
              }, function(error) {
                  alert("서버 연결에 실패 하였습니다. 다시 접속해 주십시요.");
                  // location.href="/chat/room";
              });
        });
    },
    sendMessage: function(type) {
      console.log("ri: " + localStorage.getItem("roomId"))
      var payload = {"type": type, "msg":this.message}
      var header = {"token":this.token};
      var body = JSON.stringify({type:payload.type, roomId: this.roomId, message:payload.msg});
      this.ws.send("/pub/chat/message", body, header);
      this.message = '';
    },
    recvMessage: function(recv) {
        this.userCount = recv.userCount;
        this.messages.unshift({"type":recv.type,"sender":recv.sender,"message":recv.message})
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
      // return this.getContactLists.filter(contact => {
      //   return contact.name.toLowerCase().match(this.search.toLowerCase());
      // });
    },

    roomDetail(){
      return this.getRoomInfo;
    },

    updateMessages(){
      return this.getMessages;
    }


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

  }
};
</script>

<style>
</style>
