<template>
    <div>
        <breadcumb :page="'Scrumboard'" :folder="'App'" />

        <b-row>
            <b-col md="3" class="mb-30">
                <b-card @click="addBoardPage" bg-variant="primary" text-variant="white"  class="text-center cursor-pointer">
                    <div class="mb-30"> 
                        <i class="i-Add text-40"></i>
                    </div>
                    <b-card-text class="text-15">Create New Board</b-card-text>
                </b-card>
            </b-col>
            <!-- <b-col md="3" class="mb-30">
                <b-card  bg-variant="" text-variant=""  class="text-center cursor-pointer">
                    <div class="mb-30"> 
                        <i class="i-Bar-Chart-3 text-40"></i>
                    </div>
                    <b-card-text class="text-15">Untitled Board</b-card-text>
                </b-card>
            </b-col> -->
            <b-col 
                md="3" class="mb-30"
                v-for="(boardList, key) in getBoardList" :key="key"
                @click="editBoardPage(boardList)"
            >
                <b-card 
                    class="text-center cursor-pointer"
                    
                >
                    <div class="mb-30"> 
                        <i class="i-Bar-Chart-3 text-40"></i>
                    </div>
                    <b-card-text class="text-15">{{ boardList.title }}</b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed:{
        ...mapGetters(['getBoardList'])
    },
    data(){
        return{

        }
    },
    methods: {
        ...mapActions(["addBoard","editBoardList"]),
        addBoardPage(){
            // this.$router.push('add-scrumboard');
            this.addBoard();
        },
        editBoardPage(data){
            this.editBoardList(data);
            this.$router.push('edit-scrumboard');
            console.log(data);
            
        }
        
    }
}
</script>