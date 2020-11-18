<template>
    <div class="main-content">
        <breadcumb :page="'My Challenges'" :folder="'Apps'" />

        <b-tabs>
            <b-tab active>
                <template slot="title">
                    <b-spinner type="grow" small></b-spinner>
                    <strong>참여 중</strong>
                </template>
                <div v-if="!haveChallengesIng">
                    <p>아직 참여 중인 챌린지가 없습니다.</p>
                    <p>챌린지에 함께 해주세요!</p>
                    <router-link tag="a" class to="/app/board/challenges">
                        <b-button variant="outline-dark m-1">챌린지 구경하러 가기</b-button>
                    </router-link>
                </div>
                <b-row v-for="challenge in challengesIng" :key="challenge.challengeId">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{ challenge.title }}
                                </h5>
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+challenge.challengeId">
                                    <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                                </a>
                            </div>
                            <b-collapse :id="'collapse-'+challenge.challengeId" class="mt-3 text-center">
                                <img :src="challenge.img" />
                                <p> 기간: {{ challenge.startTime | moment('YYYY.MM.DD') }} ~ {{ challenge.endTime | moment('YYYY.MM.DD') }} </p>
                                <p> 설명: {{ challenge.content }} </p>
                                <p> 현재 참여 인원: {{ challenge.participant }} </p>
                                <p> 개인당 목표 거리: {{ challenge.personalDistanceGoal }} KM </p>
                                <h6>모인 금액 {{ challenge.donateCurrent |makeComma}} / {{ challenge.donateGoal |makeComma}} 원</h6>
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
                                <h6>개인 달성률 {{ challenge.personalDistance }} / {{ challenge.personalDistanceGoal }} KM</h6>
                                <b-progress class="mb-3"
                                    variant="warning"
                                    :max="challenge.personalDistanceGoal"
                                    :value="challenge.personalDistance"
                                    animated show-progress>
                                </b-progress>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-tab>

            <b-tab>
                <template slot="title">
                    <b-spinner type="border" small></b-spinner>
                    참여 예정
                </template>
                <div v-if="!haveChallengesSoon">
                    <p>참여 예정인 챌린지가 없습니다.</p>
                    <p>챌린지에 함께 해주세요!</p>
                    <router-link tag="a" class to="/app/board/challenges">
                        <b-button variant="outline-dark m-1">챌린지 구경하러 가기</b-button>
                    </router-link>
                </div>
                <b-row v-for="challenge in challengesSoon" :key="challenge.challengeId">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{ challenge.title }}
                                </h5>
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+challenge.challengeId">
                                    <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                                </a>
                            </div>
                            <b-collapse :id="'collapse-'+challenge.challengeId" class="mt-3 text-center">
                                <img :src="challenge.img" />
                                <p> 기간: {{ challenge.startTime | moment('YYYY.MM.DD') }} ~ {{ challenge.endTime | moment('YYYY.MM.DD') }} </p>
                                <p> 설명: {{ challenge.content }} </p>
                                <p> 현재 참여 인원: {{ challenge.participant }} </p>
                                <p> 개인당 목표 거리: {{ challenge.personalDistanceGoal }} KM </p>
                                <h6>모인 금액 {{ challenge.donateCurrent |makeComma}} / {{ challenge.donateGoal|makeComma }} 원</h6>
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
                                <h6>개인 달성률 {{ challenge.personalDistance }} / {{ challenge.personalDistanceGoal }} KM</h6>
                                <b-progress class="mb-3"
                                    variant="warning"
                                    :max="challenge.personalDistanceGoal"
                                    :value="challenge.personalDistance"
                                    animated show-progress>
                                </b-progress>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-tab>

            <b-tab>
                <template slot="title">
                    <b-spinner type="border" small></b-spinner>
                    참여 종료
                </template>
                <div v-if="!haveChallengesDone">
                    <p>참여 종료된 챌린지가 없습니다.</p>
                    <p>챌린지에 함께 해주세요!</p>
                    <router-link tag="a" class to="/app/board/challenges">
                        <b-button variant="outline-dark m-1">챌린지 구경하러 가기</b-button>
                    </router-link>
                </div>
                <b-row v-for="challenge in challengesDone" :key="challenge.challengeId">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{ challenge.title }}
                                </h5>
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+challenge.challengeId">
                                    <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                                </a>
                            </div>
                            <b-collapse :id="'collapse-'+challenge.challengeId" class="mt-3 text-center">
                                <img :src="challenge.img" />
                                <p> 기간: {{ challenge.startTime | moment('YYYY.MM.DD') }} ~ {{ challenge.endTime | moment('YYYY.MM.DD') }} </p>
                                <p> 설명: {{ challenge.content }} </p>
                                <p> 참여 인원: {{ challenge.participant }} </p>
                                <p> 개인당 목표 거리: {{ challenge.personalDistanceGoal }} KM </p>
                                <h6>모인 금액 {{ challenge.donateCurrent|makeComma }} / {{ challenge.donateGoal|makeComma }} 원</h6>
                                <b-progress class="mb-3"
                                    variant="success"
                                    :max="challenge.donateGoal"
                                    :value="challenge.donateCurrent"
                                    animated show-progress>
                                </b-progress>
                                <h6>전체 달성률</h6>
                                <b-progress class="mb-3"
                                    variant="warning"
                                    :max="challenge.distanceGoal"
                                    :value="challenge.distanceCurrent"
                                    animated show-progress>
                                </b-progress>
                                <h6>개인 달성률 {{ challenge.personalDistance }} / {{ challenge.personalDistanceGoal }} KM</h6>
                                <b-progress class="mb-3"
                                    variant="warning"
                                    :max="challenge.personalDistanceGoal"
                                    :value="challenge.personalDistance"
                                    animated show-progress>
                                </b-progress>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";

export default {
    name: 'myChallenges',
    data() {
        return {
            challengesIng: [],
            challengesSoon: [],
            challengesDone: [],
            haveChallengesIng: true,
            haveChallengesSoon: true,
            haveChallengesDone: true,
        }
    },
    created() {
        this.getChallengesIng();
        this.getChallengesCommingSoon();
        this.getChallengesDone();
    },
    mounted() {
      this.$store.commit('closeSidebar')
    },
    methods: {
    ...mapMutations(["mutateMyRunning","closeSidebar"]),
    getChallengesIng() {
        http
            .get("challenges/user/ing")
            .then(({data}) => {
                if(data.status==200){
                    let obj;
                    data.data.forEach(element => {
                        obj = new Object();
                        obj.challengeId = element.challengeId.challengeId;
                        obj.title = element.challengeId.title;
                        obj.content = element.challengeId.content;
                        obj.img = element.challengeId.challengeImg;
                        obj.startTime = element.challengeId.startTime;
                        obj.endTime = element.challengeId.endTime;
                        obj.distanceGoal = element.challengeId.distanceGoal;
                        obj.distanceCurrent = (element.challengeId.distanceCurrent).toFixed(2);
                        obj.donateGoal = element.challengeId.donateGoal;
                        obj.donateCurrent = element.challengeId.donateCurrent;
                        obj.personalDistanceGoal = element.challengeId.personalDistanceGoal;
                        obj.personalDistance = element.accDistance.toFixed(2);
                        obj.participant = element.challengeId.participant;
                        this.challengesIng.push(obj);
                    });
                    if(this.challengesIng.length == 0)
                        this.haveChallengesIng = false;
                }
            })
            .catch((error) => {
                //console.log(error);
                return;
            });
    },
    getChallengesCommingSoon(){
        http
            .get("challenges/user/comingsoon")
            .then(({data}) => {
                if(data.status==200){
                    let obj;
                    data.data.forEach(element => {
                        obj = new Object();
                        obj.challengeId = element.challengeId.challengeId;
                        obj.title = element.challengeId.title;
                        obj.content = element.challengeId.content;
                        obj.img = element.challengeId.challengeImg;
                        obj.startTime = element.challengeId.startTime;
                        obj.endTime = element.challengeId.endTime;
                        obj.distanceGoal = element.challengeId.distanceGoal;
                        obj.distanceCurrent = element.challengeId.distanceCurrent;
                        obj.donateGoal = element.challengeId.donateGoal;
                        obj.donateCurrent = element.challengeId.donateCurrent;
                        obj.personalDistanceGoal = element.challengeId.personalDistanceGoal;
                        obj.participant = element.challengeId.participant;
                        obj.personalDistance = element.accDistance.toFixed(2);
                        this.challengesSoon.push(obj);
                    });
                    if(this.challengesSoon.length == 0)
                        this.haveChallengesSoon = false;
                }
            })
            .catch((error) => {
                //console.log(error);
                return;
            });
    },
    getChallengesDone(){
        http
            .get("challenges/user/end")
            .then(({data}) => {
                if(data.status==200){
                    let obj;
                    data.data.forEach(element => {
                        obj = new Object();
                        obj.challengeId = element.challengeId.challengeId;
                        obj.title = element.challengeId.title;
                        obj.content = element.challengeId.content;
                        obj.img = element.challengeId.challengeImg;
                        obj.startTime = element.challengeId.startTime;
                        obj.endTime = element.challengeId.endTime;
                        obj.distanceGoal = element.challengeId.distanceGoal;
                        obj.distanceCurrent = element.challengeId.distanceCurrent;
                        obj.donateGoal = element.challengeId.donateGoal;
                        obj.donateCurrent = element.challengeId.donateCurrent;
                        obj.personalDistanceGoal = element.challengeId.personalDistanceGoal;
                        obj.participant = element.challengeId.participant;
                        obj.personalDistance = element.accDistance.toFixed(2);
                        this.challengesDone.push(obj);
                    });
                    if(this.challengesDone.length == 0)
                        this.haveChallengesDone = false;
                }
            })
            .catch((error) => {
                //console.log(error);
                return;
            });
        },
    }
}
</script>

<style>

</style>