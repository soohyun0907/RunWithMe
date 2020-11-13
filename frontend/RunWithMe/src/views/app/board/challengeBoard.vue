<template>
    <div class="main-content">
      <breadcumb :page="'Challenge Board'" :folder="'Board'" />
      <div class="btn">
        <b-button class="float-right" variant="primary ripple btn-icon" @click="goWrite()">
          <span class="ul-btn__icon"><i class="i-Gear-2"></i></span>
          <span class="ul-btn__text">글쓰기</span>
        </b-button>
      </div>
      <div class="board">
      <b-col xl="8" md="12" class=" mb-30">
        <!-- <b-card class="h-100"> -->
          <div class="ul-widget5" v-for="board in Boards" :key="board.boardId">
            <router-link :to="{name:'challengeBoardDetail', query:{boardId:board.boardId}}">
              <div class="ul-widget__item ">
                <div class="ul-widget5__content">
                  <div class="ul-widget5__pic">
                    <img v-if="board.boardImage != null" :src="board.boardImage" />
                    <img v-else src="@/assets/images/gibu/gibu1.png" />
                  </div>

                  <div class="ul-widget5__section">
                    <div class="ul-widget4__title">
                      [챌린지 제안] {{ board.boardTitle }}
                    </div>
                    <div class="ul-widget5__info">
                      <span>Author:</span>
                      <span class="text-primary"> {{ board.writerName}} </span> <br>
                      <span>Released:</span>
                      <span class="text-primary">{{ board.boardEditdate | moment('YYYY.MM.DD HH:mm') }}</span>
                    </div>
                  </div>
                </div>

                <div class="ul-widget5__content">
                  <div class="ul-widget5__stats">
                    <span class="ul-widget5__number">{{ board.readCount }}</span>
                    <span class="ul-widget5__sales text-mute">
                      조회 수
                    </span>
                  </div>
                  <div class="ul-widget5__stats">
                    <span class="ul-widget5__number"> {{ board.replyCount }} </span>
                    <span class="ul-widget5__sales text-mute">
                      댓글 수
                    </span>
                  </div>
                </div>
              </div>
              <br>
            </router-link>
          </div>
        <!-- </b-card> -->
      </b-col>
      </div>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "challengeBoard",
  },
  data() {
    return {
      Boards : [],
    }
  },
  mounted() {
    this.$store.commit('closeSidebar')
  },
  created() {
    this.getBoards();
  },
  methods: {
  ...mapMutations(['closeSidebar']),
    getBoards() {
      http
        .get("boards")
        .then(({data}) => {
          console.log(data.data);
          this.Boards = data.data;
          this.Boards = this.Boards.reverse();
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    },
    goWrite() {
      this.$router.push("/app/board/challengeBoardWrite");
    }
  },
};

</script>
