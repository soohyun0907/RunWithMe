<template>
    <div class="main-content">
        <h3>결제가 완료되었습니다!</h3>
        <b-row>
            <b-col lg="3" md="6" sm="12">
                <b-card
                class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                    <i class="i-Financial"></i>
                        <div class="content">
                            <p class="text-muted mt-2 mb-0">Mileage</p>
                            <p class="text-primary text-24 line-height-1 mb-2">{{mileage}}</p>
                        </div>
                </b-card>
            </b-col>
        </b-row>

        <router-link :to="`/app/apps/challenges`">
            <b-button block variant="primary">챌린지 구경하러 가기</b-button>
        </router-link>
    </div>
</template>

<script>
import http from "@/utils/http-common";
import axios from "axios";

export default {
    name: "Done Payment",
    data() {
        return {
            mileage: 0
        }
    },
    created() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            http
                .get('/users')
                .then(({data}) => {
                    this.mileage = data.data.mileage;
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