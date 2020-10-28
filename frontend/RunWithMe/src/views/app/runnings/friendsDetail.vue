<template>
    <div class="main-content">
        <div class="user-profile-img">
            <img class="profile-picture mb-2" src="/img/1.jpg" />
        </div>
        <p class="m-0 text-24" style="text-align:center;">Timothy Carlson</p>
        <div class="col" style="text-align:center;">
            총 킬로미터
            <h2>100KM</h2>
        </div>
        <div v-for="(record, index) in records" :key="index" style="margin-bottom: 5%;">
            <!-- <b-card class="h-100" v-bind:title=record.runningDate.toLocaleDateString()>
                <b-button  variant="primary ripple m-1" v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
                <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
                    <template v-slot:footer="{ hide }">
                        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                            <strong class="mr-auto">Footer</strong>
                            <b-button size="sm" @click="hide">Close</b-button>
                        </div>
                    </template>
                    <div class="px-3 py-2">
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <img
                        src="@/assets/images/photo-long-2.jpg"
                        alt=""
                        />
                    </div>
                </b-sidebar>
            </b-card> -->
            <b-card class="h-100" v-bind:title=record.runningDate.toLocaleDateString()>
                <b-card-text>
                    Set the <strong class="text-danger">right</strong> prop to  <strong class="text-danger">true</strong>  
                </b-card-text>
                <b-button variant="primary ripple m-1" v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
                <b-sidebar id="sidebar-right" title="Sidebar" bg-variant="white" right  shadow>
                    <div class="px-3 py-2">
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <img src="@/assets/images/photo-long-2.jpg" />
                    </div>
                </b-sidebar>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'userDetail',
    data() {
        return {
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