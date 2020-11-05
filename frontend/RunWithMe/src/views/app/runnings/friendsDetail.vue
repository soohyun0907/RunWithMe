<template>
    <div class="main-content">
        <div class="user-profile-img">
            <img class="profile-picture mb-2" src="/img/1.jpg" />
        </div>
        <p class="m-0 text-24" style="text-align:center;">기명택</p>
        <div class="col" style="text-align:center;">
            총 킬로미터
            <h2>112KM</h2>
        </div>
        <br>
        <div
            ref="rowView"
            class="row "
            :class="{ 'list-grid': isListView, 'list-horizontal': !isListView }"
        >
            <div
                :class="{ 'col-md-6  col-lg-4 col-xl-3': isListView,
                            'col-md-12': !isListView }"
                class="list-item "
                :key="index"
                v-for="(item, index) in items"
                transition="list"
            >
                <router-link :to="`/app/runnings/runningResult`">
                    <div
                        class="card o-hidden mb-30 d-flex "
                        :class="{ 'flex-column': isListView, 'flex-row': !isListView }"
                    >
                        <div class="list-thumb d-flex">
                            <img alt="" :src="item.img" />
                        </div>
                        <div
                            class="flex-grow-1 "
                            :class="{ 'd-bock': isListView, 'pl-2 d-flex': !isListView }"
                        >
                            <div
                                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"
                                :class="{ 'flex-lg-row': !isListView }"
                            >
                                <div class="item-title">
                                    <b-avatar class="mr-2" variant="info" src="/img/2.jpg"></b-avatar>
                                    {{ item.title }}
                                </div>
                                <br>
                                <p class="m-0 text-muted text-small w-15 w-sm-100">
                                {{ item.total_distance }}KM &nbsp; &nbsp; &nbsp; &nbsp;
                                {{convertToTime(item.running_avg_pace)}} &nbsp;
                                {{item.accumulcated_time}}
                                </p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
const items = [
  {
    img: "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png",
    title: "기명택",
    total_distance: "8",
    running_avg_pace : 325,
    accumulcated_time: "51:11"
  },
  {
    img: "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png",
    title: "기명택",
    total_distance: "10",
    running_avg_pace : 305,
    accumulcated_time: "60:11"
  },
  {
    img: "https://soonirwm.s3.ap-northeast-2.amazonaws.com/thumbnail/2020/10/23/7dfd9d9e-1_staticmap.png",
    title: "기명택",
    total_distance: "5",
    running_avg_pace : 365,
    accumulcated_time: "30:11"
  },
];

export default {
    name: 'userDetail',
    data() {
        return {
            items: items,
            isListView: false,
            records : [
                {
                    runningDate: new Date(),
                    accDistance: 8,
                    avg_pace: 441,
                    // startTime: LocalDateTime.of(2020, 10, 22, 12, 55, 42),
                    // endTime: LocalDateTime.of(2020, 10, 22, 13, 57, 42)
                },
                {
                    runningDate: new Date(),
                    accDistance: 8,
                    avg_pace: 441,
                    // startTime: LocalDateTime.of(2020, 10, 22, 12, 55, 42),
                    // endTime: LocalDateTime.of(2020, 10, 22, 13, 57, 42)
                },
            ],
        }
    },
    methods: {
        getRunningTime(startTime, endTime) {
            var runningTime = "";
            runningTime += parseInt(endTime.hour() - startTime.hour()) + ":";
            runningTime += parseInt(endTime.minute() - startTime.minute());
            return runningTime;
        },
        convertToTime(origin){
            var time = "";
            time += parseInt(origin/60) + "\'";
            time += origin%60 + "\"";
            return time;
        },
    }
}
</script>
<style scoped>
.user-profile-img {
    margin-bottom: 10%;
}
</style>