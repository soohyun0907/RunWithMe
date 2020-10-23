<template>
  <div class="main-content">
    <breadcumb :page="'Group Chat'" :folder="'apps'" />

    <div class="card chat-sidebar-container sidebar-container">
      <div class="chat-sidebar-wrap sidebar" :class="{ 'ml-0': isMobile }">
        <div class="border-right">
          <div
            class="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"
          >
            <a class="link-icon d-md-none" @click="isMobile = !isMobile">
              <i class="icon-regular ml-0 mr-3 i-Left"></i>
            </a>

            <!-- 그룹 채팅방 이름 검색 -->
            <div class="form-group m-0 flex-grow-1">
              <input
                type="text"
                class="form-control form-control-rounded"
                id="search"
                v-model="search"
                placeholder="Search Group Name"
              />
            </div>
          </div>

          <!-- 그룹 채팅 목록 -->
          <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            class="contacts-scrollable perfect-scrollbar rtl-ps-none ps scroll"
          >
            <div>
              <div
                class="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                그룹 채팅 목록
              </div>
              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="chatroom in this.getChatRoom"
                :key="chatroom.roomId"
              >
                <h6 @click="choice(chatroom.roomId)" class="">
                  {{ chatroom.name }}
                </h6>
              </div>
              <!-- <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="contact in getRecentUser"
                :key="contact.name"
                :class="contact.status"
              > -->

              <!-- <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                />
                <h6 class="">{{ contact.name }}</h6> -->
              <!-- </div> -->

              <div
                class="mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                인기있는 그룹 채팅
              </div>

              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="chatroom2 in this.getChatRoom"
                :key="chatroom2.roomID"
              >
                <h6>{{ chatroom2.name }}</h6>
              </div>
              <!-- :class="contact.status"
              > -->
              <!-- @click="changeSelectedUser(contact.id)"
              > -->
              <!-- <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                /> -->
            </div>
          </vue-perfect-scrollbar>
        </div>
      </div>

      <!-- 채팅사이드 바 -->
      <div class="chat-content-wrap sidebar-content">
        <div
          class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"
        >
          <a class="link-icon d-md-none" @click="isMobile = !isMobile">
            <i class="icon-regular i-Right ml-0 mr-3"></i>
          </a>
          <!-- START 채팅 방 이름 -->
          <div class="d-flex align-items-center">
            <img
              :src="getSelectedUser.avatar"
              alt=""
              class="avatar-sm rounded-circle mr-2"
            />
            <p class="m-0 text-title text-16 flex-grow-1">
              {{ this.getSelectedChatroom.name }}
            </p>
          </div>
          <!-- END 채팅방 이름 -->
        </div>
        <vue-perfect-scrollbar
          :settings="{ suppressScrollX: true, wheelPropagation: false }"
          class="chat-content perfect-scrollbar rtl-ps-none ps scroll"
        >
          <div>
            <div
              class="list-group-item"
              v-for="(message, index) in messages"
              :key="index"
            >
              <div class="d-flex mb-30" v-if="back === message.sender">
                <div>{{ message.sender }} - {{ message.message }}</div>
              </div>

              <!-- START 나의 채팅 메시지 -->
              <div
                class="d-flex mb-30"
                v-if="testUserId === message.sender"
              >
                <div class="message flex-grow-1">
                  <div class="d-flex">
                    <p class="mb-1 text-title text-16 flex-grow-1">
                      {{ message.sender }}
                    </p>
                    <span class="text-small text-muted">25 min ago</span>
                  </div>
                  <p class="m-0">{{message.message}}</p>
                </div>
                <img
                  :src="getSelectedUser.avatar"
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
                  src="@/assets/images/faces/1.jpg"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                />
                <div class="message flex-grow-1">
                  <div class="d-flex">
                    <p class="mb-1 text-title text-16 flex-grow-1">Suns</p>
                    <span class="text-small text-muted">24 min ago</span>
                  </div>
                  <p class="m-0">너의 메시지</p>
                </div>
              </div>
              <!-- END 상대방의 메시지 -->
            </div>
          </div>
        </vue-perfect-scrollbar>

        <!-- START 메시지 보내기 -->
        <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
          <form class="inputForm">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-rounded"
                placeholder="Type your message"
                name="message"
                id="message"
                cols="30"
                rows="3"
                spellcheck="false"
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
        </div>
        <!-- END 메시지 보내기 -->
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import store from "@/store/modules/groupchat.js";
import { isMobile } from "mobile-device-detect";
import http from "@/utils/http-common";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";

// var sock = new SockJS("http://localhost:8080/ws-stomp");
// var ws = Stomp.over(sock);

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "GroupChat",
  },
  data() {
    return {
      recentContacts: [],
      search: "",
      isMobile: false,
      currentChatroom: {},
      chatrooms: [],
      isMe: false /* 내가 보낸 메세지: true | 상대방이 보낸 메시지: false */,

      message: "",
      messages: [],
      token: "",
      userCount: 0,
      testUserId: "123",
      back: "[알림]",
      sock: null,
      ws: null,
    };
  },
  methods: {
    ...mapActions([
      "changeSelectedUser",
      "changeGroupChat",
      "selectOneGroupChat",
    ]),
    ...mapMutations(["selectUserLists", "createAndSelectChatroom"]),

    selectAllGroupChat() {
      http.get("/chat/room").then((data) => {
        // this.chatrooms = data.data.data;
        this.$store.commit("selectAllGroupChat", data.data.data);
        console.log(store.state.chatrooms);
      });
    },

    choice(roomId) {
      this.selectOneGroupChat(roomId);
      this.isMobile = false;
      setTimeout(() => {
        this.chat();
      }, 500);
    },
    sendMessage: function (type) {
      console.log("[TEST]");
      console.log(type);
      console.log(this.message);
      console.log(this.getSelectedChatroom.roomId);
      console.log("------------");
      this.ws.send(
        "/pub/chat/message",
        JSON.stringify({
          type: type,
          roomId: this.getSelectedChatroom.roomId,
          message: this.message,
        }),
        { "token": this.token }
      );
      this.message = "";
    },
    recvMessage: function (recv) {
      console.log("들어옴 " + this.testUserId + "**********");
      console.log("들어옴 " + recv.sender + "**********");
      this.userCount = recv.userCount;
      this.messages.unshift({
        type: recv.type,
        sender: recv.sender,
        message: recv.message,
      });
    },

    chat() {
      http.get("/chat/user").then((response) => {
        this.sock = new SockJS("http://localhost:8080/ws-stomp");
        var _ws = Stomp.over(this.sock);
        
        var _this = this;
        // this.token = response.data.token;
        this.token =
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJyb2xlcyI6WyJVU0VSIl0sImp0aSI6IjEyMyIsImlhdCI6MTYwMzQzMDM2NiwiZXhwIjoxNjAzNDMzOTY2fQ.VYKhn6rIfG_pude_ENukj4Sy3SRMRWJ9oOXgK4QYrc4";
        _ws.connect(
          { "token": this.token },
          function (frame) {
            _ws.subscribe(
              "/sub/chat/room/" + _this.getSelectedChatroom.roomId,
              function (message) {
                var recv = JSON.parse(message.body);
                console.log("RECV Sender");
                console.log(recv);
                _this.recvMessage(recv);
              }
            );
          },
          function (error) {
            alert("서버 연결에 실패 하였습니다. 다시 접속해 주십시요.");
          }
        );
        this.ws = _ws;
      });
    },
    // connect() {
    // const serverURL = "http://localhost:8080/ws-stomp"
    // let socket = new SockJS(serverURL);
    // this.stompClient = Stomp.over(socket);
    //   console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
    //   this.stompClient.connect(
    //     {},
    //     frame => {
    //       // 소켓 연결 성공
    //       this.connected = true;
    //       console.log('소켓 연결 성공', frame);
    //       // 서버의 메시지 전송 endpoint를 구독합니다.
    //       // 이런형태를 pub sub 구조라고 합니다.
    //       this.stompClient.subscribe("/send", res => {
    //         console.log('구독으로 받은 메시지 입니다.', res.body);

    //         // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
    //         this.recvList.push(JSON.parse(res.body))
    //       });
    //     },
    //     error => {
    //       // 소켓 연결 실패
    //       console.log('소켓 연결 실패', error);
    //       this.connected = false;
    //     }
    //   );
    // }
  },

  computed: {
    ...mapGetters([
      "getContactLists",
      "getRecentUser",
      "getCurrentUser",
      "getSelectedUser",
      "getChatRoom",
      "getSelectedChatroom",
    ]),

  },

  mounted: function () {
    setTimeout(() => {
      this.selectAllGroupChat();
    }, 100);
  },

  created: function () {
    // this.connect();
    // 현재 채팅방
    // this.getSelectedChatroom
  },
};
</script>

<style>
</style>
