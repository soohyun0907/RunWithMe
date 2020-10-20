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
            class="contacts-scrollable perfect-scrollbar  rtl-ps-none ps scroll"
          >
            <div>
              <div
                class="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                그룹 채팅 목록
              </div>
              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="chatroom in filterChatroom"
                :key="chatroom.roomID"
              >
               <h6>{{chatroom.roomName}}</h6>
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
                v-for="chatroom2 in filterChatroom"
                :key="chatroom2.roomID"
              >
               <h6>{{chatroom2.roomName}}</h6>
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
          <div class="d-flex align-items-center">
            <img
              :src="getSelectedUser.avatar"
              alt=""
              class="avatar-sm rounded-circle mr-2"
            />
            <p class="m-0 text-title text-16 flex-grow-1">
              {{ getSelectedUser.name }}
            </p>
          </div>
        </div>
        <vue-perfect-scrollbar
          :settings="{ suppressScrollX: true, wheelPropagation: false }"
          class="chat-content perfect-scrollbar rtl-ps-none ps scroll"
        >
          <div>
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
          </div>
        </vue-perfect-scrollbar>

        <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
          <form class="inputForm">
            <div class="form-group">
              <textarea
                class="form-control form-control-rounded"
                placeholder="Type your message"
                name="message"
                id="message"
                cols="30"
                rows="3"
                spellcheck="false"
              ></textarea>
            </div>
            <div class="d-flex">
              <div class="flex-grow-1"></div>
              <button class="btn btn-icon btn-rounded btn-primary mr-2">
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
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import store from "@/store/modules/groupchat.js";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "GroupChat"
  },
  data() {
    return {
      recentContacts: [],
      search: "",
      isMobile: false
    };
  },
  methods: {
    ...mapActions(["changeSelectedUser"]),
    ...mapMutations(["selectUserLists", "createAndSelectChatroom"]),
    console() {
      console.log(this.test);
    },

    choice: function(uid){
      console.log(this.createAndSelectChatroom());
    }
    
  },

  computed: {
    ...mapGetters([
      "getContactLists",
      "getRecentUser",
      "getCurrentUser",
      "getSelectedUser",
      "getChatRoom"
    ]),

    filterContacts() {
      return this.getContactLists;
      // return this.getContactLists.filter(contact => {
      //   return contact.name.toLowerCase().match(this.search.toLowerCase());
      // });
    },

    filterChatroom(){
      return this.getChatRoom;
    }
  },

  created: function() {
    console.log("TTTT");
    console.log(this.getContactLists);
    // this.getCurrentUser.forEach(currentUser => {
    //   currentUser.chatInfo.forEach(user => {
    //     this.getContactLists.filter(contact => {
    //       if (user.contactId == contact.id) {
    //         this.recentContacts.push(contact);
    //       }
    //     });
    //   });
    // });

  

    // DB에서 그룹채팅 목록 불러오기
    // this.selectUserLists();


  }
};
</script>

<style>
</style>

