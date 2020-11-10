<template>
    <div class="app">
      <div class="header">
        <slot name="header">
          <div class="col">
            <h6>[챌린지 제안]</h6>
            <h1>{{ board.boardTitle }}</h1>
          </div>
          <div class="col">
            <div class="writer_img">
              <p>
                <img v-if="board.writerProfile == null" class="profile-picture rounded-circle" :src="defaultProfile" style="width:35px; height:35px" />
                <img v-else class="profile-picture rounded-circle" :src="board.writerProfile" style="width:35px; height:35px" />
                {{ board.writerName }}
                {{ board.boardRegdate.substring(0,10) }}
                {{ board.boardRegdate.substring(11,16) }}
              </p>
            </div>
          </div>
        </slot>
      </div>
      <hr>
      <div class="main-content">
        <img :src="board.boardImage" />
        <p>
          {{ board.boardContent }}
        </p>
      </div>
      <hr>
      <div class="reply">
        <h6>댓글( {{ board.replyCount }} )</h6>
        <div class="inputBox">
          <b-input-group class="mt-3" style="margin-bottom: 20px;">
            <b-form-input v-model="replyInfo.content"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="postReply()">Button</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <!-- <div class="replies"> -->
          <b-list-group class="list-group-flush" v-for="reply in allReply" :key="reply.replyId">
            <b-list-group-item>
              <!-- <div class="row"> -->
            <div class="writer_img col">
              <p>
                <img v-if="reply.replyWriterProfile == null" class="profile-picture rounded-circle" :src="defaultProfile"/>
                <img v-else class="profile-picture rounded-circle avatar-sm" :src="reply.replyWriterProfile" />
                {{ reply.replyWriter }}
              </p>
            </div>
              <!-- </div> -->
            <div class="col">
              <h5>{{ reply.content}}</h5>
              <div class="float-right">
                  {{ reply.regdate.substring(0,10) }}
                  {{ reply.regdate.substring(11,16) }}
              </div>
            </div>
            </b-list-group-item>
          </b-list-group>
        <!-- </div> -->
      </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "challengeBoardDetail",
  },
  data() {
    return {
      board: {},
      replyInfo: {
        boardId: "",
        content: "",
        replyDepth: 0,
        parentId: 0,
        replyOrder: 0
      },
      allReply: []
    }
  },
  computed: {
    ...mapGetters(["defaultProfile"])
  },
  mounted() {
    this.$store.commit('closeSidebar')
    this.getBoardInfo();
    this.getReplyInfo();
  },
  methods:{
    goBack() {
      this.$router.push("/app/board/challengeBoard");
    },
    postReply() {
      this.replyInfo.boardId = this.board.boardId;
      http
        .post("replies/reply", this.replyInfo)
        .then(({data}) => {
          if(data.status == 200) {
            alert("댓글 등록 성공!");
            this.replyInfo.content = "";
            console.log(data.data);
            var obj = new Object();
            obj.replyId = data.data.replyId;
            obj.content = data.data.content;
            obj.regdate = data.data.regdate;
            obj.replyWriter = data.data.user.username;
            obj.replyWriterProfile = data.data.user.profile;
            this.allReply.push(obj);
          } else {
            alert("댓글 등록 실패");
            return;
          }
        })
    },
    getBoardInfo(){
      http
      .get("boards/board/"+this.$route.query.boardId)
      .then(({data}) => {
        if(data.status == 200){
          this.board = data.data;
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      })
    },
    getReplyInfo() {
      http
      .get("replies/reply/" + this.$route.query.boardId)
      .then(({data}) => {
        if(data.status == 200){
          // this.allReply = data.data;
          // console.log(data.data);
          var obj;
          data.data.forEach(element => {
            obj = new Object();
            obj.replyId = element.replyId;
            obj.content = element.content;
            obj.regdate = element.regdate;
            obj.replyWriter = element.user.username;
            obj.replyWriterProfile = element.user.profile;
            this.allReply.push(obj);
          });
          // this.allReply = this.allReply.reverse();
          // console.log(this.allReply);
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      })
    }
  }
};
</script>

<style scoped>
.header{
  background: transparent;
  align-items: center;
  margin: 0 0 3rem;
  padding: 0;
}
.writer_img {
  float:left;
}
</style>