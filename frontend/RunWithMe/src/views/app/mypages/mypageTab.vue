<template>
  <div class="main-content">
    <breadcumb :page="'User Profile'" :folder="'Pages'" />

    <div class="card user-profile o-hidden mb-30">
      <div
        class="header-cover"
        style="
          background-image: url(http://gull-html-laravel.ui-lib.com/assets/images/photo-wide-5.jpeg;;
        "
      ></div>
      <div class="user-info">
        <img
          class="profile-picture avatar-lg mb-2"
          src="http://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg"
          alt=""
        />
        <p class="m-0 text-24">{{ userInfo.username }}</p>
        <p class="text-muted m-0">{{ userInfo.userEmail }}</p>
      </div>
      <div class="card-body">
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="지역별 런닝" active>


            <h3 class="heading text-primary">[관악구]에서의 런닝</h3>
              <section ref="map" class="map"></section>

              <ul class="timeline clearfix">
                <b-card title="최근 런닝 기록" class="heading text-primary mb-30">

                  <div role="tablist">

                    <b-card no-body class="ul-card__border-radius">
                      <!-- 접혀있을때 보이는 부분 -->
                      <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                        <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-1 variant="transparent">
                          <span>
                            <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=50px height=50px/>
                          </span>
                          2020.11.03 13:33 런닝기록
                        </b-button>
                      </b-card-header>
                      
                      <b-collapse id="accordion-2-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=400px height=300px/>
                          <b-card-text>
                             <h4><code>2020.11.02</code> 런닝 기록입니다.</h4>
                          </b-card-text>
                          <b-card-text>총 런닝 시간 : <strong>58:20</strong></b-card-text>
                          <b-card-text>총 런닝 거리 : <strong>6.01 km</strong></b-card-text>
                          <b-card-text>시작 시간 : <strong>12:20</strong> </b-card-text>
                          <b-card-text>종료 시간 : <strong>13:33</strong> </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    
                    <b-card no-body class="ul-card__border-radius">
                      <!-- 접혀있을때 보이는 부분 -->
                      <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                        <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-2 variant="transparent">
                          <span>
                            <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=50px height=50px/>
                          </span>
                          2020.11.02 13:33 런닝기록
                        </b-button>
                      </b-card-header>
                      
                      <b-collapse id="accordion-2-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=400px height=300px/>
                          <b-card-text>
                             <h4><code>2020.11.02</code> 런닝 기록입니다.</h4>
                          </b-card-text>
                          <b-card-text>총 런닝 시간 : <strong>58:20</strong></b-card-text>
                          <b-card-text>총 런닝 거리 : <strong>6.01 km</strong></b-card-text>
                          <b-card-text>시작 시간 : <strong>12:20</strong> </b-card-text>
                          <b-card-text>종료 시간 : <strong>13:33</strong> </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    
                    <b-card no-body class="ul-card__border-radius">
                      <!-- 접혀있을때 보이는 부분 -->
                      <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                        <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-3 variant="transparent">
                          <span>
                            <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=50px height=50px/>
                          </span>
                          2020.11.01 13:33 런닝기록
                        </b-button>
                      </b-card-header>
                      
                      <b-collapse id="accordion-2-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=400px height=300px/>
                          <b-card-text>
                             <h4><code>2020.11.02</code> 런닝 기록입니다.</h4>
                          </b-card-text>
                          <b-card-text>총 런닝 시간 : <strong>58:20</strong></b-card-text>
                          <b-card-text>총 런닝 거리 : <strong>6.01 km</strong></b-card-text>
                          <b-card-text>시작 시간 : <strong>12:20</strong> </b-card-text>
                          <b-card-text>종료 시간 : <strong>13:33</strong> </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                  </div>
                </b-card>
              </ul>

            </b-tab>

            <b-tab title="전체 런닝">


            <h3 class="heading text-primary">모든 지역에서의 런닝</h3>
              <section ref="map2" class="map"></section>

              <ul class="timeline clearfix">
                <b-card title="최근 런닝 기록" class="heading text-primary mb-30">

                  <div role="tablist">

                    <b-card no-body class="ul-card__border-radius">
                      <!-- 접혀있을때 보이는 부분 -->
                      <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                        <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-1 variant="transparent">
                          <span>
                            <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=50px height=50px/>
                          </span>
                          2020.11.03 13:33 런닝기록
                        </b-button>
                      </b-card-header>
                      
                      <b-collapse id="accordion-2-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=400px height=300px/>
                          <b-card-text>
                             <h4><code>2020.11.02</code> 런닝 기록입니다.</h4>
                          </b-card-text>
                          <b-card-text>총 런닝 시간 : <strong>58:20</strong></b-card-text>
                          <b-card-text>총 런닝 거리 : <strong>6.01 km</strong></b-card-text>
                          <b-card-text>시작 시간 : <strong>12:20</strong> </b-card-text>
                          <b-card-text>종료 시간 : <strong>13:33</strong> </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    
                    <b-card no-body class="ul-card__border-radius">
                      <!-- 접혀있을때 보이는 부분 -->
                      <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                        <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-2 variant="transparent">
                          <span>
                            <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=50px height=50px/>
                          </span>
                          2020.11.02 13:33 런닝기록
                        </b-button>
                      </b-card-header>
                      
                      <b-collapse id="accordion-2-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=400px height=300px/>
                          <b-card-text>
                             <h4><code>2020.11.02</code> 런닝 기록입니다.</h4>
                          </b-card-text>
                          <b-card-text>총 런닝 시간 : <strong>58:20</strong></b-card-text>
                          <b-card-text>총 런닝 거리 : <strong>6.01 km</strong></b-card-text>
                          <b-card-text>시작 시간 : <strong>12:20</strong> </b-card-text>
                          <b-card-text>종료 시간 : <strong>13:33</strong> </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    
                    <b-card no-body class="ul-card__border-radius">
                      <!-- 접혀있을때 보이는 부분 -->
                      <b-card-header header-tag="header" class="p-1 header-elements-inline" role="tab">
                        <b-button class="card-title mb-0" block href="#" v-b-toggle.accordion-2-3 variant="transparent">
                          <span>
                            <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=50px height=50px/>
                          </span>
                          2020.11.01 13:33 런닝기록
                        </b-button>
                      </b-card-header>
                      
                      <b-collapse id="accordion-2-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <img class="rounded mb-2" src="@/assets/images/runnings/runningEx1.png" alt="running Path" width=400px height=300px/>
                          <b-card-text>
                             <h4><code>2020.11.02</code> 런닝 기록입니다.</h4>
                          </b-card-text>
                          <b-card-text>총 런닝 시간 : <strong>58:20</strong></b-card-text>
                          <b-card-text>총 런닝 거리 : <strong>6.01 km</strong></b-card-text>
                          <b-card-text>시작 시간 : <strong>12:20</strong> </b-card-text>
                          <b-card-text>종료 시간 : <strong>13:33</strong> </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                  </div>
                </b-card>
              </ul>

            </b-tab>

            <b-tab title="친구 목록">
              <b-card>
                <vue-good-table
                  :columns="columns"
                  :line-numbers="false"
                  :search-options="{
                    enabled: true,
                    placeholder: 'Search this table'
                  }"
                  :pagination-options="{
                    enabled: true,
                    mode: 'records'
                  }"
                  styleClass="tableOne vgt-table"
                  :rows="rows"
                >
                  <div slot="table-actions" class="mb-3">
                    <b-button variant="primary" class="btn-rounded d-none d-sm-block" v-b-modal.modal-1
                      ><i class="i-Add-User text-white mr-2"> </i>친구 추가
                    </b-button>

                    <b-modal id="modal-1" title="Email로 친구 추가">
                      <b-form>
                        <b-form-group
                          id="input-group-1"
                          label="Email address:"
                          label-for="input-1"
                          description="친구의 이메일로 친구추가를 할수있어요."
                        >
                          <b-form-input
                            id="input-1"
                            type="email"
                            required
                            placeholder="Email을 입력하세요"
                          ></b-form-input>
                        </b-form-group>
                      </b-form>
                    </b-modal>
                  </div>

                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'button'">
                      <a href="">
                        <i class="i-Speach-Bubble-3 text-25 text-success mr-2"></i>
                        {{ props.row.button }}</a
                      >
                      <a href="">
                        <i class="i-Close-Window text-25 text-danger"></i>
                        {{ props.row.button }}</a
                      >
                    </span>
                    <span v-else-if="props.column.field == 'name'">
                      <a href="">
                        <div class="ul-widget-app__profile-pic">
                          <img
                            class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                            :src="props.row.avatar"
                            alt=""
                          />
                          {{ props.row.name }}
                        </div>
                      </a>
                    </span>
                  </template>
                </vue-good-table>
              </b-card>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/utils/http-common";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "byArea",
  },
  data() {
    return {
      current: { lat: 0, lng: 0 },
      previous: { lat: 0, lng: 0 },
      watchPositionId: null,
      map: null,
      map2:null,
       columns: [
        {
          label: "이름",
          field: "name"
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "등급",
          field: "span",
          html: true
        },
        {
          label: "Button",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right"
        },
      ],
      rows: [
        {
          id: 1,
          avatar: require("@/assets/images/faces/1.jpg"),
          name: "택택",
          email: "hyungtaik@gmail.com",
          span: '<span class="badge badge-danger">Pro</span>',
        },
        {
          id: 2,
          avatar: require("@/assets/images/faces/3.jpg"),
          name: "수니",
          email: "sooni0110@gmail.com",
          span: '<span class="badge badge-primary">Beginner</span>',
        },
        {
          id: 3,
          avatar: require("@/assets/images/faces/2.jpg"),
          name: "두현",
          email: "hyuns@gmail.com",
          span: '<span class="badge badge-success">Runner</span>',
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["getSideBarToggleProperties", "userInfo"]),
  },

  mounted() {
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => google.maps.load(this.initMap);
    }
  },
  methods: {
    initMap() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.current.lat = position.coords.latitude;
        this.current.lng = position.coords.longitude;

        var startLoc = new google.maps.LatLng(
          this.current.lat,
          this.current.lng
        );

        var map = new google.maps.Map(this.$refs["map"], {
          zoom: 16,
          center: startLoc,
        });

        var map2 = new google.maps.Map(this.$refs["map2"], {
          zoom: 16,
          center: startLoc,
        });

        this.map = map;
        this.map2 = map2;
      });
    },
  },
};
</script>

<style scoped>
.map {
  flex-grow: 1;
  width: 100%;
  height: 400px;
}
</style>