<template>
  <div class="main-content">
    <b-row>
      <b-col md="12 mb-30">
        <b-card title="Matching">
          <form-wizard @on-complete="onComplete" title = "" subtitle = "성별, 티어, 지역 기반 매칭 방식">
            <tab-content title="성별 고르기" icon="i-Administrator">
              <code><strong>매칭할 성별을 골라주세요</strong></code>
              
              <div style="padding-top:15px;" class="custom-control custom-radio">
                <input type="radio" name="jb-radio" id="jb-radio-1" class="custom-control-input" @click="matching('male')">
                <label class="custom-control-label" for="jb-radio-1">남성</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" name="jb-radio" id="jb-radio-2" class="custom-control-input" @click="matching('female')">
                <label class="custom-control-label" for="jb-radio-2">여성</label>
              </div>

            </tab-content>
            <tab-content title="러너 고르기" icon="i-Gear">
              <vue-good-table
                :columns="columns"
                
                :pagination-options="{
                  enabled: false,
                  mode: 'records'
                }"
                styleClass="tableOne vgt-table"
              
                :rows="rows"
              >
                <template slot="table-row" slot-scope="props">
                  <span style="width:10vw" v-if="props.column.field == 'choice'">
                   <input type="radio" name="radio1" @click="selectUser(props.row)"/>
                  </span>
                  
                  <span v-else-if="props.column.field == 'name'">
                   <div class="ul-widget-app__profile-pic" style="text-align:center">
                    <div v-if="props.row.profile!=null">
                      <img
                        class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                        :src="props.row.profile" alt=""/>
                    </div>
                    <div v-else>
                      <img
                        class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                        :src="defaultProfile" alt=""/>
                    </div>
                      <div class="friendList_modal">
                        {{ props.row.username }}
                      </div>
                    </div>
                  </span>
                  <span v-else-if="props.column.field == 'userEmail'">
                    <div class="friendList">
                      {{props.row.userEmail}}
                    </div>
                  </span>
                 
                </template>
     
              </vue-good-table>
            </tab-content>
            <tab-content title="유저 팔로우" icon="i-Thumbs-Up-Smiley">
              <br>
              해당 유저를 팔로우 하시겠습니까?
              <br>
              <div v-if="selectedUser.profile==null">
               <img :src="defaultProfile" style="width:40vw;"> 
                 </div>
              <div v-else>
                <img :src="selectedUser.profile" style="width:40vw;">
                 </div>

               <div style="font-size:20px"> {{selectedUser.username}}</div>
            </tab-content>
          </form-wizard>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import http from "@/utils/http-common";
import { mapGetters,mapMutations } from "vuex";


export default {
  data(){
    return {
      selectGender:false,
      selectRunner:false,
      selectedUser:[],
      matchUsers : [],
      profiles: [],
      columns: [
        {
          label:"",
          field:"choice",
        },
        {
          label: "Name",
          field: "name"
        },
        {
          label: "email",
          field: "userEmail",
        },
      ],
      rows: [
        
      ]
    }
  },
  metaInfo: {
  },
  props: {
  },
   computed: {
    ...mapGetters(["userInfo","defaultProfile"]),
  },
  methods: {
     ...mapMutations(["mutateVisibleModal"]),
    selectUser(user){
      this.selectedUser = user
    },
    onComplete: function() {
      http.post(`/friends/friend/${this.selectedUser.userId}`)
      .then(res => {
        console.log(res)
      })
      this.$swal({
        position: "center",
        type: "success",
        title: "팔로우 성공!",
        text:"해당 유저와 채팅을 할 수 있습니다!",
        icon:"success",
        showConfirmButton: false,
        timer: 1000
      });
      setTimeout(() => {
        this.$store.commit('mutateVisibleModal',false)
        this.$router.go(0)
      }, 1000);

    },
    matching: function (gender) {
      var sex = gender;
      http.get("/friends/match/" + sex)
      .then((data) => {
        this.matchUsers = data.data.data;
        
        //배열 초기화
        this.rows.length=0
        for(var i = 0 ; i < this.matchUsers.length; i++)
          this.rows.push(this.matchUsers[i])
      });

      // http.get(`/friends/contacts`)
      // .then(res => {
  
      //   console.log("this.rows")
      //   console.log(this.rows)
        
      //   var curList = res.data.data
      //   console.log(curList)
        
      //   for(var i=0;i <curList.length; i++){
      //     for(var j=0; j<this.rows.length; j++){
      //       console.log(curList[i].userId+" " + this.rows[j].userId)
      //       if(curList[i].userId==this.rows[j].userId){
      //         this.rows.splice(i,1)
      //         console.log("같은놈")
      //       }
      //     }
        // }
      // })
      // console.log("this.rows")
      // console.log(this.rows)
      // console.log(this.rows.length)
     
    },
  }
};
</script>

<style>
.friendList_modal {
  overflow:scroll;
  white-space:nowrap;
  display:block; 
  width:50px;
}
.card-body{
  padding:1em;
}
.wizard-tab-content{
  padding:5px !important;
}


</style>
