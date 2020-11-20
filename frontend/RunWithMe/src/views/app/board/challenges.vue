<template>
    <div class="main-content">
        <breadcumb :page="'Challenges'" :folder="'Apps'" />
        <b-card class="mileage o-hidden card-icon-bg card-icon-bg-primary o-hidden text-center">
            <div>
                <p class="mt-2 mb-0 text-primary">{{userInfo.username}}님의 보유 마일리지:{{userInfo.mileage | makeComma}}</p>
            </div>
        </b-card>
        <b-tabs>
            <b-tab active>
                <template slot="title">
                    <b-spinner type="grow" small></b-spinner>
                    <strong>진행 중</strong>
                </template>
                <div v-if="!haveChallengesIng">
                    <p>진행 중인 챌린지가 없습니다.</p>
                    <p>조금만 기다려주세요!</p>
                </div>
                <b-row v-for="challenge in challengesIng" :key="challenge.challengeId">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{ challenge.title }}
                                </h5>
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+challenge.challengeId">
                                    <b-badge pill variant="success m-2" v-if="challenge.isParticipate">참여 중</b-badge>
                                    <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                                </a>
                            </div>
                            <b-collapse :id="'collapse-'+challenge.challengeId" class="mt-3 text-center">
                                <img :src="challenge.img" />
                                <p> 기간: {{ challenge.startTime | moment('YYYY.MM.DD') }} ~ {{ challenge.endTime | moment('YYYY.MM.DD') }} </p>
                                <p> 설명: {{ challenge.content }} </p>
                                <p> 현재 참여 인원: {{ challenge.participant }} </p>
                                <p> 개인당 목표 거리: {{ challenge.personalDistanceGoal }} KM </p>
                                <h6>모인 금액 {{ challenge.donateCurrent | makeComma }} / {{ challenge.donateGoal |makeComma}} 원</h6>
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
                                <b-button v-if="!challenge.isParticipate" variant="info ripple m-1" @click="showConfirmModal(challenge.challengeId, challenge.title, challenge.personalDistanceGoal)">신청하기</b-button>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-tab>

            <b-tab>
                <template slot="title">
                    <b-spinner type="border" small></b-spinner>
                    진행 예정
                </template>
                <div v-if="!haveChallengesSoon">
                    <p>진행 예정인 챌린지가 없습니다.</p>
                    <p>조금만 기다려주세요!</p>
                </div>
                <b-row v-for="challenge in challengesSoon" :key="challenge.challengeId">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{ challenge.title }}
                                </h5>
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+challenge.challengeId">
                                    <b-badge pill variant="success m-2" v-if="challenge.isParticipate">참여 중</b-badge>
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
                                <b-button v-if="!challenge.isParticipate" variant="info ripple m-1" @click="showConfirmModal(challenge.challengeId, challenge.title, challenge.personalDistanceGoal)">신청하기</b-button>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-tab>

            <b-tab>
                <template slot="title">
                    <b-spinner type="border" small></b-spinner>
                    진행 종료
                </template>
                <div v-if="!haveChallengesDone">
                    <p>진행 종료된 챌린지가 없습니다.</p>
                    <p>조금만 기다려주세요!</p>
                </div>
                <b-row v-for="challenge in challengesDone" :key="challenge.challengeId">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{ challenge.title }}
                                </h5>
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+challenge.challengeId">
                                    <b-badge pill variant="dark m-2" v-if="challenge.isParticipate">참여 완료</b-badge>
                                    <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                                </a>
                            </div>
                            <b-collapse :id="'collapse-'+challenge.challengeId" class="mt-3 text-center">
                                <img :src="challenge.img" />
                                <p> 기간: {{ challenge.startTime | moment('YYYY.MM.DD') }} ~ {{ challenge.endTime | moment('YYYY.MM.DD') }} </p>
                                <p> {{ challenge.content }} </p>
                                <h6>모인 금액 {{ challenge.donateCurrent|makeComma }} / {{ challenge.donateGoal|makeComma }} 원</h6>
                                <b-progress class="mb-3"
                                    variant="success"
                                    :max="challenge.donateGoal"
                                    :value="challenge.donateCurrent"
                                    animated show-progress>
                                </b-progress>
                                <h6>전체 달성률 {{ challenge.distanceCurrent }} / {{ challenge.distanceGoal }} KM </h6>
                                <b-progress class="mb-3"
                                    variant="warning"
                                    :max="challenge.distanceGoal"
                                    :value="challenge.distanceCurrent"
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
    name: 'challenges',
    data() {
        return {
            challengesIng: [],
            challengesSoon: [],
            challengesDone: [],
            haveChallengesIng: true,
            haveChallengesSoon: true,
            haveChallengesDone: true,
            // confirm-message-modal
            confirmModal: ""
        }
    },
    created() {
        this.getChallengesIng();
        this.getChallengesCommingSoon();
        this.getChallengesDone();
        this.getChallengesParticipate();
    },
     computed: {
         ...mapGetters(["userInfo","defaultProfile","userTotal"]),
     },
    mounted() {
        this.$store.commit('closeSidebar')
    },
    methods: {
        ...mapMutations(["mutateMyRunning","closeSidebar"]),
        showConfirmModal(challengeId, challengeTitle, personalDistanceGoal){
            this.confirmModal = "";
            this.$bvModal
                .msgBoxConfirm( challengeTitle + " 챌린지에 " + personalDistanceGoal + "KM 목표로 참여하시겠습니까?", {
                title: "참여하시겠습니까?",
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
                this.confirmModal = value;
                if(this.confirmModal)
                    this.$router.push("/app/apps/payChallenge?no=" + challengeId);
            })
            .catch(err => {
                // An error occurred
                //console.log(error);
            });
        },
        getChallengesIng() {
            http
                .get("challenges/ing")
                .then(({data}) => {
                    if(data.status==200){
                        let obj;
                        data.data.forEach(element => {
                            obj = new Object();
                            obj.challengeId = element.challengeId;
                            obj.title = element.title;
                            obj.content = element.content;
                            obj.img = element.challengeImg;
                            obj.startTime = element.startTime;
                            obj.endTime = element.endTime;
                            obj.distanceGoal = element.distanceGoal;
                            obj.distanceCurrent = (element.distanceCurrent).toFixed(2);
                            obj.donateGoal = element.donateGoal;
                            obj.donateCurrent = element.donateCurrent;
                            obj.personalDistanceGoal = element.personalDistanceGoal;
                            obj.participant = element.participant;
                            obj.isParticipate = false;
                            this.challengesIng.push(obj);
                        });
                        if(this.challengesIng.length == 0)
                            this.haveChallengesIng = false;

                        // //console.log(this.challengesIng);
                    }
                })
                .catch((error) => {
                    //console.log(error);
                    return;
                });
        },
        getChallengesCommingSoon(){
            http
                .get("challenges/comingsoon")
                .then(({data}) => {
                    if(data.status==200){
                        let obj;
                        data.data.forEach(element => {
                            obj = new Object();
                            obj.challengeId = element.challengeId;
                            obj.title = element.title;
                            obj.content = element.content;
                            obj.img = element.challengeImg;
                            obj.startTime = element.startTime;
                            obj.endTime = element.endTime;
                            obj.distanceGoal = element.distanceGoal;
                            obj.distanceCurrent = element.distanceCurrent;
                            obj.donateGoal = element.donateGoal;
                            obj.donateCurrent = element.donateCurrent;
                            obj.personalDistanceGoal = element.personalDistanceGoal;
                            obj.participant = element.participant;
                            obj.isParticipate = false;
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
                .get("challenges/end")
                .then(({data}) => {
                    if(data.status==200){
                        let obj;
                        // console.log(data.data);
                        data.data.forEach(element => {
                            obj = new Object();
                            obj.challengeId = element.challengeId;
                            obj.title = element.title;
                            obj.content = element.content;
                            obj.img = element.challengeImg;
                            obj.startTime = element.startTime;
                            obj.endTime = element.endTime;
                            obj.distanceGoal = element.distanceGoal;
                            obj.distanceCurrent = element.distanceCurrent;
                            obj.donateGoal = element.donateGoal;
                            obj.donateCurrent = element.donateCurrent;
                            obj.personalDistanceGoal = element.personalDistanceGoal;
                            obj.participant = element.participant;
                            obj.isParticipate = false;
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
        getChallengesParticipate() {
            http
                .get("challenges/participation")
                .then(({data}) => {
                    if(data.status==200){
                        // //console.log(data.data);
                        this.challengesIng.forEach(element => {
                            data.data.ingP.forEach(element2 => {
                                if(element.challengeId == element2.challengeId.challengeId)
                                    element.isParticipate = true;
                            })
                        })

                        this.challengesSoon.forEach(element => {
                            data.data.beforeP.forEach(element2 => {
                                if(element.challengeId == element2.challengeId.challengeId)
                                    element.isParticipate = true;
                            })
                        })

                        this.challengesDone.forEach(element => {
                            data.data.afterP.forEach(element2 => {
                                if(element.challengeId == element2.challengeId.challengeId)
                                    element.isParticipate = true;
                            })
                        })
                    }
                })
                .catch((error) => {
                    //console.log(error);
                    return;
                });
        }
    }
}
</script>

<style scoped>
.mt-2{
    margin-top:0 !important;
}
.o-hidden{
    width:80vw;
    left:7%;
    margin-bottom:12px;
    margin-top:-20px !important;
}
</style>
