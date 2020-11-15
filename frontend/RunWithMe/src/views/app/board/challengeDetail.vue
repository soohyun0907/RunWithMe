<template>
    <div class="main-content">
        <breadcumb :page="'챌린지 상세보기'" :folder="'Challenge'" />

        <div class="text-center">
            <h5 class="card-title text-primary">
                {{ challenge.title }}
            </h5>
        </div>
                            
        <img :src="challenge.challengeImg" />
        <br>
        <br>
        <p> 기간: {{ challenge.startTime }} ~ {{ challenge.endTime }} <br>
            설명: {{ challenge.content }} <br>
            현재 참여 인원: {{ challenge.participant }} <br>
            개인당 목표 거리: {{ challenge.personalDistanceGoal }} KM <br>
        <h6>모인 금액 {{ challenge.donateCurrent }} / {{ challenge.donateGoal }} 원</h6>
        <b-progress class="mb-3"
            variant="success"
            :max="challenge.donateGoal"
            :value="challenge.donateCurrent"
            animated show-progress>
        </b-progress>
        <h6>전체 달성률 {{ challenge.distanceCurrent }} / {{ challenge.distanceGoal }} KM</h6>
        <b-progress class="mb-3"
            variant="warning"
            :max="challenge.distanceGoal"
            :value="challenge.distanceCurrent"
            animated show-progress>
        </b-progress>
        <div v-if="userInfo.roles.length == 2">
            <router-link :to="{name:'editChallenge', query:{challengeId:challenge.challengeId}}">
                <b-button class="float-right" size="sm" variant="dark m-1">수정</b-button>
            </router-link>
        </div>
        <div v-else>
            <router-link :to="{name:'payChallenge', query:{no:challenge.challengeId}}">
                <b-button class="float-right" size="sm" variant="success m-1">참여하기</b-button>
            </router-link>
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
            challenge: {
                challengeId: 0,
                title: "",
                content: "",
                challengeImg: "",
                startTime: "",
                endTime: "",
                distanceGoal: 0,
                distanceCurrent: 0,
                donateGoal: 0,
                donateCurrent: 0,
                personalDistanceGoal: 0,
                participant: 0
            },
        }
    },
    computed: {
        ...mapGetters(["userInfo"])
    },
    mounted() {
        this.$store.commit('closeSidebar');
        this.getChallengeDetail();
        //console.log(this.userInfo);
    },
    methods: {
        ...mapMutations(["closeSidebar"]),
        getChallengeDetail() {
            http
            .get("challenges/"+this.$route.query.challengeId)
            .then(({data}) => {
                // console.log(data.data);
                if(data.status == 200){
                    this.challenge.challengeId = data.data.challengeId.challengeId;
                    this.challenge.title = data.data.challengeId.title;
                    this.challenge.content = data.data.challengeId.content;
                    this.challenge.challengeImg = data.data.challengeId.challengeImg;
                    this.challenge.startTime = this.$moment(data.data.challengeId.startTime).format('YYYY.MM.DD');
                    this.challenge.endTime = this.$moment(data.data.challengeId.endTime).format('YYYY.MM.DD');
                    this.challenge.distanceGoal = data.data.challengeId.distanceGoal;
                    this.challenge.distanceCurrent = (data.data.challengeId.distanceCurrent).toFixed(2);
                    this.challenge.donateGoal = data.data.challengeId.donateGoal;
                    this.challenge.donateCurrent = data.data.challengeId.donateCurrent;
                    this.challenge.personalDistanceGoal = data.data.challengeId.personalDistanceGoal;
                    this.challenge.participant = data.data.challengeId.participant;
                }
            })
            .catch((error) => {
                console.log(error);
                return;
            })
        }
    }
}
</script>

<style>

</style>