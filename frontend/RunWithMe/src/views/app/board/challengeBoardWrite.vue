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
        <br>
        <div v-if="updateBoardImg">
            <input type="file" id="files" ref="files" v-on:change="handleFileUpload()"
                accept="image/*" />
        </div>

        </b-form-group>
            <b-col md="12" v-if="!updateBoardImg">
                <b-button class="m-1" type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
                <b-button size="sm" class="float-right m-1" variant="secondary" @click="backToList()">작성 취소</b-button>
            </b-col>

            <b-col md="12" v-if="updateBoardImg">
                <b-button class="m-1" variant="primary" @click="submitFile()">File Submit</b-button>
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
        //console.log(this.userInfo);
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
            updateBoardImg : false,
            file: [],
        }
    },
    methods: {
        ...mapMutations(["closeSidebar"]),
        onSubmit(el) {
            let x = el.preventDefault();
            //console.log(this.userInfo);
            this.board.writerId = this.userInfo.userId;
            http
                .post('/boards/board', 
                    this.board
                )
                .then(({ data }) => {
                    if(data.status == 200){
                        Swal.fire({
                            icon: 'success',
                            text: '게시글 등록이 완료되었습니다. 이미지를 등록해주세요.'
                        });
                        this.boardId = data.data.boardId;
                        this.updateBoardImg = true;
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: '게시글 등록 중 오류가 발생하였습니다.'
                        });
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
        submitFile(){
            let formData = new FormData();
            formData.append('files', this.file[0]);
            http
                .post('boards/board/'+ this.boardId,
                     formData, 
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                    }
                })
                .then(({ data }) => {
                    if(data.status == 200){
                        Swal.fire({
                            icon: 'success',
                            text: '이미지 업로드가 완료되었습니다.'
                        });
                        this.$router.push("/app/board/challengeBoard");
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: '이미지 업로드 중 오류가 발생하였습니다.'
                        });
                        return;
                    }
                })
        },
        handleFileUpload() {
            this.file = this.$refs.files.files;
            // console.log(this.file);
        },
        backToList() {
            this.$router.push("/app/board/challengeBoard");
        }
    }
}
</script>

<style>

</style>