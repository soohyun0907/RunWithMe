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
        <p> 기간: {{ challenge.startTime | moment('YYYY.MM.DD') }} ~ {{ challenge.endTime | moment('YYYY.MM.DD') }} <br>
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
        <h6>전체 달성률 {{ challenge.distanceCurrent.toFixed(2) }} / {{ challenge.distanceGoal }} KM</h6>
        <b-progress class="mb-3"
            variant="warning"
            :max="challenge.distanceGoal"
            :value="challenge.distanceCurrent"
            animated show-progress>
        </b-progress>
        <router-link :to="{name:'editChallenge', query:{challengeId:challenge.challengeId}}">
            <b-button class="float-right" size="sm" variant="dark m-1">수정</b-button>
        </router-link>
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
            challenge: {},
        }
    },
    computed: {
        ...mapGetters(["userInfo"])
    },
    mounted() {
        this.$store.commit('closeSidebar');
        this.getChallengeDetail();
        console.log(this.userInfo);
    },
    methods: {
        ...mapMutations(["closeSidebar"]),
        getChallengeDetail() {
            http
            .get("challenges/"+this.$route.query.challengeId)
            .then(({data}) => {
                if(data.status == 200){
                    // console.log(data.data);
                    this.challenge = data.data.challengeId;
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