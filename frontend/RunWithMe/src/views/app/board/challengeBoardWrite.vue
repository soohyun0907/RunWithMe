<template>
  <div class="main-content">
    <breadcumb :page="'글쓰기'" :folder="'Board'" />
        <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
            class="col-md-6 mb-3"
            label="제목"
        >
        <b-form-input
            v-model="board.boardTitle"
            type="text"
            required
            placeholder="제안하고 싶은 챌린지 제목을 입력해주세요." />
        </b-form-group>
        <b-form-group
            class="col-md-6 mb-3"
            label="내용"
        >
        <b-form-textarea
            v-model="board.boardContent"
            placeholder="제안하고자 하는 챌린지 설명, 기간, 목표 거리, 목표 금액, 개인당 목표 거리를 포함해서 작성해주세요."
            rows="8"
        ></b-form-textarea>
        </b-form-group>

            <b-col md="12">
                <b-button class="m-1" type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
        </b-form>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
    metaInfo: {
        title: "Board",
    },
    computed: {
    ...mapGetters(["userInfo"]),
    },
    mounted() {
        console.log(this.userInfo);
        this.$store.commit('closeSidebar')
    },
    data() {
        return {
            board : {
                writerId: "",
                boardTitle: "",
                boardContent: ""
            },
            boardId : "",
            updateBoardImg : false
        }
    },
    methods: {
        ...mapMutations(["closeSidebar"]),
        onSubmit(el) {
            let x = el.preventDefault();
            this.board.writerId = this.userInfo.userId;
            http
                .post('/boards/board', 
                    this.board
                )
                .then(({ data }) => {
                    if(data.status == 200){
                        alert("게시글 완료 이미지를 등록해주세요.");
                        console.log(data);
                        this.boardId = data.data.boardId;
                        this.updateBoardImg = true;
                    } else {
                        alert("오류가 발생하였습니다.");
                        return;
                    }
            })
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.board.boardTitle = "";
            this.board.boardContent = "";
        },
    }
}
</script>

<style>

</style>