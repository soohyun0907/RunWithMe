<template>
  <div class="main-content">
    <section class="top-bar">
      <breadcumb :page="'Running History'" :folder="'Runnings'" />
      <h4>dy_test?</h4>
    </section>
    <div>{{ this.getChatRooms }}</div>
    <div
      class="chatroom test"
      v-for="(chatroom, index) in this.getChatRooms"
      :key="index"
    >
      <h3>{{ chatroom.roomName }}</h3>
    </div>
  </div>
</template>
<script>
import SERVER from "@/api/api";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Running",
  },
  computed:{
  ...mapGetters(["getChatRooms"]),
  },
  methods: {
  },
};
</script>