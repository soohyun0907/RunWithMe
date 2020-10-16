<template>
  <div class="main-content">
    <breadcumb :page="'Contact List'" :folder="'Apps'" />
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
            ><i class="i-Add-User text-white mr-2"> </i>Add Contact
          </b-button>

          <b-modal id="modal-1" title="BootstrapVue">
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Food:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group id="checkboxes-4">
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
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
          label: "Name",
          field: "name"
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "Phone",
          field: "phone"
        },
        {
          label: "Span",
          field: "span",
          html: true
        },

        {
          label: "Age",
          field: "age"
        },
        {
          label: "Joining Date",
          field: "join"
        },
        {
          label: "Salary",
          field: "salary"
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
          avatar: require("@/assets/images/faces/1.jpg"),
          name: "John",
          email: "jhonwick_23@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-primary">Primary</span>',
          join: "April 25, 2019",
          age: "35 ",
          salary: "$320,800"
        },
        {
          id: 2,
          avatar: require("@/assets/images/faces/3.jpg"),
          name: "Jane",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-danger">Primary</span>',
          join: "April 34, 2019",
          age: "31",
          salary: "$320,800"
        },
        {
          id: 3,
          avatar: require("@/assets/images/faces/2.jpg"),
          name: "Susan",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-warning">Primary</span>',
          join: "April 34, 2019",
          age: "10",
          salary: "$320,800"
        },
        {
          id: 4,
          avatar: require("@/assets/images/faces/1.jpg"),
          name: "Chris",
          email: "jhonwick_23@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-primary">Primary</span>',
          join: "April 25, 2019",
          age: "20",
          salary: "$320,800"
        },
        {
          id: 5,
          avatar: require("@/assets/images/faces/4.jpg"),
          name: "Dan",
          email: "jhonwick_23@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-danger">Primary</span>',
          join: "April 25, 2019",
          age: "21",
          salary: "$320,800"
        },
        {
          id: 6,
          avatar: require("@/assets/images/faces/5.jpg"),
          name: "John",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-success">success</span>',
          join: "April 25, 2019",
          age: "31",
          salary: "$320,800"
        },
        {
          id: 1,
          avatar: require("@/assets/images/faces/4.jpg"),
          name: "John",
          email: "dan_brown@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-warning">Warning</span>',
          join: "April 25, 2019",
          age: "35 ",
          salary: "$320,800"
        },
        {
          id: 2,
          avatar: require("@/assets/images/faces/3.jpg"),
          name: "Jane",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-info">Info</span>',
          join: "April 25, 2019",
          age: "11",
          salary: "$320,800"
        },
        {
          id: 3,
          avatar: require("@/assets/images/faces/2.jpg"),
          name: "Susan",
          email: "janeswann@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-dark">Dark</span>',
          join: "April 25, 2019",
          age: "2011-10-30",
          salary: "$320,800"
        },
        {
          id: 4,
          avatar: require("@/assets/images/faces/1.jpg"),
          name: "Chris",
          email: "jaasdameswann@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-warning">Warning</span>',
          join: "April 25, 2019",
          age: "20",
          salary: "$320,800"
        },
        {
          id: 5,
          avatar: require("@/assets/images/faces/5.jpg"),
          name: "Dan",
          email: "doomwaytne@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-info">Info</span>',
          join: "April 25, 2019",
          age: "21",
          salary: "$320,800"
        },
        {
          id: 6,
          avatar: require("@/assets/images/faces/3.jpg"),
          name: "John",
          email: "sidsacc@gmail.com",
          phone: "+88012378478",
          span: '<span class="badge badge-primary">Primary</span>',
          join: "April 25, 2019",
          age: "31",
          salary: "$320,800"
        }
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
