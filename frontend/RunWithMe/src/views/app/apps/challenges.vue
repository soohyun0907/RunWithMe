<template>
    <div class="main-content">
        <breadcumb :page="'Challenges'" :folder="'Apps'" />

        <b-tabs>
            <b-tab active>
                <template slot="title">
                    <b-spinner type="grow" small></b-spinner>
                    <strong>진행 중</strong>
                </template>
                <b-row v-for="(challenge, index) in challenges" :key="index">
                    <b-col lg="4" class="mb-30">
                        <b-card class="ul-border__bottom">
                            <div class="text-center">
                                <h5 class="card-title text-primary">
                                    {{challenge.title}}
                                </h5>
                                <!-- <p>기간: 2020.10.26 ~ 2020.11.13</p> -->
                                <a class="text-default collapsed" v-b-toggle="'collapse-'+index">
                                    <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                                </a>
                            </div>
                            <b-collapse :id="'collapse-'+index" class="mt-3 text-center">
                                <img :src="challenge.img" />
                                <p>기간: 2020.10.26 ~ 2020.11.13</p>
                                <p>불쌍한 복순이를 위해 모금에 함께해주세요!</p>
                                <h6>모인 금액</h6>
                                <b-progress class="mb-3"
                                    variant="success"
                                    :max="challenge.max"
                                    :value="challenge.value.toFixed(2)"
                                    animated show-progress>
                                </b-progress>
                                <h6>전체 달성률</h6>
                                <b-progress class="mb-3"
                                    variant="warning"
                                    :max="challenge.max"
                                    :value="challenge.value.toFixed(2)"
                                    animated show-progress>
                                </b-progress>
                                <h6>개인 달성률</h6>
                                <b-progress class="mb-3"
                                    variant="danger"
                                    :max="challenge.max"
                                    :value="challenge.value.toFixed(2)"
                                    animated show-progress>
                                </b-progress>
                                <b-button variant="info ripple m-1">신청하기</b-button>
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
                <p class="p-3">준비중입니다.</p>
            </b-tab>

            <b-tab>
                <template slot="title">
                    <b-spinner type="border" small></b-spinner>
                    진행 종료
                </template>
                <p class="p-3">다음에 참여해주세요.</p>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    name: 'challenges',
    data() {
        return {
            challenges: [
                {
                    title : "복순이 살리기",
                    img : require('@/assets/images/photo-long-1.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "동해 앞바다 정화하기",
                    img : require('@/assets/images/photo-long-2.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "커플 마라톤",
                    img : require('@/assets/images/photo-long-3.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "세계 소녀의 달",
                    img : require('@/assets/images/photo-long-4.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "challenge 5",
                    img : require('@/assets/images/photo-long-1.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "challenge 6",
                    img : require('@/assets/images/photo-long-2.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "challenge 7",
                    img : require('@/assets/images/photo-long-3.jpg'),
                    value: 75,
                    max: 100
                },
                {
                    title : "challenge 8",
                    img : require('@/assets/images/photo-long-4.jpg'),
                    value: 75,
                    max: 100
                },
            ]
        }
    }
}
</script>

<style>

</style>