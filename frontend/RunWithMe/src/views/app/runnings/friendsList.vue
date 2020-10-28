<template>
    <div class="main-content">
        <breadcumb :page="'Friends List'" :folder="'Apps'" />
        <div class="ul-contact-page">
            <div class="row">
                <b-col lg="12" md="12" class=" mb-30 text-center">
                    <b-form-group id="input-group-2"  label-for="input-2">
                        <b-form-input
                        id="input-2"
                        class="ul-form-input"
                        placeholder="Enter your name...."
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col lg="6" xl="4" md="6" class="mb-30" v-for="(contact, index) in contactlist" :key="index">
                    <router-link :to="`/app/runnings/friendsDetail`">
                    <div class="card">
                        <div class="card-body">
                            <div class="ul-contact-page__profile">
                                <div class="user-profile-img">
                                    <!-- <img class="profile-picture mb-2" src="@/assets/images/faces/1.jpg" alt="" style="width:40%;height:40%;"> -->
                                    <img class="profile-picture mb-2" :src="contact.imgUrl" />
                                </div>
                                <p class="m-0 text-24">{{contact.nickname}}</p>
                                    <div class="col">
                                        총 킬로미터
                                        <h2>{{contact.accumulcated_distance}}</h2>KM
                                    </div>
                                <div class="ul-contact-page__info">
                                    
                                    <div class="row">
                                        <div class="col">
                                            <p class="text-muted mt-3">총 러닝 횟수</p>
                                            {{contact.running_cnt}}
                                        </div>
                                        <div class="col">
                                            <p class="text-muted mt-3">평균 거리</p>
                                            {{contact.avg_distance}} km
                                        </div>
                                        <div class="col">
                                            <p class="text-muted mt-3">평균 페이스</p>
                                            {{convertToTime(contact.avg_pace)}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                </b-col>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contactList',
    data() {
        return {
            contactlist : [
                {
                    nickname: "Timothy Carlson",
                    imgUrl: "/img/1.jpg",
                    accumulcated_distance: 100,
                    running_cnt: 10,
                    avg_pace : 325,
                    avg_distance: 10
                },
                {
                    nickname: "Jaret Leto",
                    imgUrl: "/img/2.jpg",
                    accumulcated_distance: 100,
                    running_cnt: 10,
                    avg_pace : 325,
                    avg_distance: 10
                },
                {
                    nickname: "Kim",
                    imgUrl: "/img/3.jpg",
                    accumulcated_distance: 100,
                    running_cnt: 10,
                    avg_pace : 325,
                    avg_distance: 10
                },
                {
                    nickname: "Lee",
                    imgUrl: "/img/4.jpg",
                    accumulcated_distance: 100,
                    running_cnt: 10,
                    avg_pace : 325,
                    avg_distance: 10
                },
            ]
        }
    },
    methods: {
        convertToTime(origin){
            var time = "";
            time += parseInt(origin/60) + "\'";
            time += origin%60 + "\"";
            return time;
        }
    }
}
</script>
<style scoped>

</style>
