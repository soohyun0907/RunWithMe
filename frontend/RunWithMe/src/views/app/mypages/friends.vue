<template>
  <div class="main-content">
    <breadcumb :page="'Friends List'" :folder="'MyPage'" />
    <!-- <div class="wrapper"> -->
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
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
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
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Task Manager"
  },
  data() {
    return {
      foods: ["apple", "orrange"],
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
          label: "나이",
          field: "age"
        },
        {
          label: "성별",
          field: "gender"
        },
        {
          label: "Button",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right"
        }
      ],
      rows: [
         {
          id: 1,
          avatar: require("@/assets/images/faces/3.jpg"),
          name: "택택",
          email: "hyungtaik@gmail.com",
          span: '<span class="badge badge-danger">Pro</span>',
          age:"27",
          gender:"남성",
        },
        {
          id: 2,
          avatar: require("@/assets/images/faces/4.jpg"),
          name: "수니",
          email: "sooni0110@gmail.com",
          span: '<span class="badge badge-primary">Beginner</span>',
          age:"28",
          gender:"여성",
        },
        {
          id: 3,
          avatar: require("@/assets/images/faces/5.jpg"),
          name: "두현",
          email: "hyuns@gmail.com",
          span: '<span class="badge badge-success">Runner</span>',
          age:"27",
          gender:"여성",
        },
      ]
    };
  },
  methods: {
    addFile() {
      console.log("hello");
    }
  }
};
</script>
<style >
</style>
