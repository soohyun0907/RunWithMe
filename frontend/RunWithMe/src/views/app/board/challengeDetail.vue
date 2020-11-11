<template>
    <div class="main-content">
        <div class="text-center">
            <h5 class="card-title text-primary">
                {{ challenge.title }}
            </h5>
        </div>
                            
        <img :src="challenge.challengeImg" />
        <p> 기간: {{ challenge.startTime.substring(0,10) }} ~ {{ challenge.endTime.substring(0,10) }} </p>
        <p> 설명: {{ challenge.content }} </p>
        <p> 현재 참여 인원: {{ challenge.participant }} </p>
        <p> 개인당 목표 거리: {{ challenge.personalDistanceGoal }} KM </p>
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
        <!-- <b-button v-if="!challenge.isParticipate" variant="info ripple m-1" @click="showConfirmModal(challenge.challengeId, challenge.title, challenge.personalDistanceGoal)">신청하기</b-button> -->
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
    mounted() {
        this.$store.commit('closeSidebar');
        this.getChallengeDetail();
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