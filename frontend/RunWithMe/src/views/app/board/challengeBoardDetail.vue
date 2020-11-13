<template>
    <div class="app">
      <div class="btn col">
        <div class="btn-group float-right" role="group" aria-label="Basic example" style="margin-bottom: 5px;">
          <b-button size="sm" variant="secondary" @click="goPrevChallengeBoard()">이전글</b-button>
          <b-button size="sm" variant="secondary" @click="goNextChallengeBoard()">다음글</b-button>
          <b-button size="sm" variant="secondary" @click="goChallengeBoard()">목록</b-button>
        </div>
      </div>
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
                {{ board.boardRegdate | moment('YYYY.MM.DD HH:mm') }}
              </p>
            </div>
          </div>
        </slot>
      </div>
      <hr style="margin-bottom:1px;">
      <div class="main-content">
        <img :src="board.boardImage" />
        <p>
          {{ board.boardContent }}
        </p>
      </div>
      <hr style="margin-bottom:5px;">
      <div v-if="isWriter">
        <div class="float-right">
          <router-link :to="{name:'challengeBoardEdit', query:{boardId:board.boardId}}">
            <b-button size="sm" variant="dark m-1">수정</b-button>
          </router-link>
          <b-button size="sm" variant="dark m-1" @click="deleteBoard()">삭제</b-button>
        </div>
      </div>
      <div class="reply" style="margin-top:30px;">
        <h6>댓글( {{ board.replyCount }} )</h6>
        <!-- <div class="replies"> -->
          <b-list-group class="list-group-flush" v-for="reply in allReply" :key="reply.replyId">
            <b-list-group-item>
              <!-- <div class="row"> -->
            <div class="writer_img col">
              <p>
                <img v-if="reply.replyWriterProfile == null" class="profile-picture rounded-circle avatar-sm" :src="defaultProfile"/>
                <img v-else class="profile-picture rounded-circle avatar-sm" :src="reply.replyWriterProfile" />
                {{ reply.replyWriter }}
              </p>
            </div>
              <!-- </div> -->
            <div class="col">
              <b-collapse visible :id="'collapse-'+reply.replyId">
                <h5>{{ reply.content}}</h5>
              </b-collapse>
              <b-collapse :id="'collapse-'+reply.replyId">
                <b-textarea v-model="reply.content"></b-textarea>
                <b-button-group size="sm" class="mr-1">
                  <b-button @click="updateReply(reply.replyId, reply.content)">수정</b-button>
                  <b-button v-b-toggle="'collapse-'+reply.replyId">취소</b-button>
                </b-button-group>
                <!-- <b-button size="sm" variant="dark m-1">수정</b-button> -->
              </b-collapse>
              {{ reply.regdate | moment('YYYY.MM.DD HH:mm') }}
              <div v-if="userInfo.userId == reply.replyWriterId" class="float-right">
                  <a href @click="deleteReply(reply.replyId)" style="margin-right:15px;">삭제</a> &nbsp;
                  <a v-b-toggle="'collapse-'+reply.replyId">수정</a>
              </div>
            </div>
            </b-list-group-item>
          </b-list-group>
        <!-- </div> -->
        <div class="inputBox">
          <b-input-group class="mt-3" style="margin-bottom: 20px;">
            <b-form-input v-model="replyInfo.content"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="postReply()">댓글 등록</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "challengeBoardDetail",
  },
  data() {
    return {
      havePrev: true,
      haveNext: true,
      prevBoardId: 0,
      nextBoardId: 0,
      board: {},
      replyInfo: {
        boardId: "",
        content: "",
        replyDepth: 0,
        parentId: 0,
        replyOrder: 0
      },
      allReply: [],
      isWriter: false,
      deleteModal: ""
    }
  },
  computed: {
    ...mapGetters(["defaultProfile", "userInfo"])
  },
  mounted() {
    this.$store.commit('closeSidebar');
    this.getBoardInfo();
    this.getReplyInfo();
    this.getBoards();
  },
  methods:{
    ...mapMutations(["closeSidebar"]),
    goBack() {
      this.$router.push("/app/board/challengeBoard");
    },
    postReply() {
      this.replyInfo.boardId = this.board.boardId;
      http
        .post("replies/reply", this.replyInfo)
        .then(({data}) => {
          if(data.status == 200) {
            Swal.fire({
              icon: 'success',
              text: '댓글이 등록되었습니다.'
            });
            // alert("댓글 등록 성공!");
            this.replyInfo.content = "";
            // console.log(data.data);
            var obj = new Object();
            obj.replyId = data.data.replyId;
            obj.content = data.data.content;
            obj.regdate = data.data.regdate;
            obj.replyWriter = data.data.user.username;
            obj.replyWriterProfile = data.data.user.profile;
            this.allReply.push(obj);
            this.board.replyCount += 1;
          } else {
            Swal.fire({
              icon: 'error',
              text: '댓글 등록에 실패하였습니다.'
            });
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
          if(data.data.writerId == this.userInfo.userId)
            this.isWriter = true;
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
            obj.replyWriterId = element.user.userId;
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
    },
    getBoards() {
      http
        .get("boards")
        .then(({data}) => {
          // console.log(data.data[0].boardId);
          for(var i=0;i<data.data.length; i++){
            if(data.data[i].boardId == this.$route.query.boardId){
              if(i == 0) this.havePrev = false;
              if(this.havePrev)
                this.prevBoardId = data.data[i-1].boardId;
              
              if(i==data.data.length-1) this.haveNext =false;
              if(this.haveNext)
                this.nextBoardId = data.data[i+1].boardId;

              break;
            }
          }

          // console.log(this.prevBoardId + " " + this.nextBoardId);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    },
    goChallengeBoard() {
      // console.log("이동!");
      this.$router.push("/app/board/challengeBoard");
    },
    goPrevChallengeBoard() {
      if(this.havePrev) {
        this.$router.push("/app/board/challengeBoardDetail?boardId="+this.prevBoardId);
        this.$router.go(0)
      } else {
        Swal.fire({
          title: 'Oops...',
          text: '이전글이 존재하지 않습니다.'
        });
        // alert("이전글이 존재하지 않습니다.");
      }
    },
    goNextChallengeBoard() {
      if(this.haveNext) {
        this.$router.push("/app/board/challengeBoardDetail?boardId="+this.nextBoardId);
        this.$router.go(0)
      } else {
        Swal.fire({
          title: 'Oops...',
          text: '다음글이 존재하지 않습니다.'
        });
        // alert("다음글이 존재하지 않습니다.");
      }
    },
    deleteBoard() {
      this.deleteModal = "";
      this.$bvModal
        .msgBoxConfirm("삭제하면 되돌릴 수 없습니다.", {
          title: "삭제하시겠습니까?",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          this.deleteModal = value;
          if(this.deleteModal) {
            http
            .delete("boards/board/" + this.$route.query.boardId)
            .then(({data}) => {
              if(data.status == 200) {
                Swal.fire({
                  icon: 'success',
                  text: '게시글이 삭제되었습니다.'
                });
                this.$router.push("/app/board/challengeBoard");
              }
            })
            .catch((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '삭제 중 오류가 발생하였습니다' + error
              });
              console.log(error);
              return;
            })
          }
        })
        .catch(err => {
          // An error occurred
          console.log(error);
        });
    },
    deleteReply(replyId) {
      http
      .delete("replies/reply/" + replyId)
      .then(({data}) => {
        if(data.status == 200) {
          Swal.fire({
            icon: 'success',
            text: '댓글이 삭제되었습니다.'
          });
          // console.log("댓글삭제 완료!");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      })
    },
    updateReply(replyId, content) {
      http
        .put("replies/reply", {
          replyId: replyId,
          boardId: this.board.boardId,
          content: content,
          replyDepth: 0,
          parentId: 0,
          replyOrder: 0
        })
        .then(({data}) => {
          if(data.status == 200) {
            Swal.fire({
              icon: 'success',
              text: '댓글이 수정되었습니다.'
            });
            // alert("댓글 수정 성공!");
            this.$router.go(0)
          } else {
            Swal.fire({
              icon: 'error',
              text: '댓글 수정 중 오류가 발생하였습니다.'
            });
            return;
          }
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