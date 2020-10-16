<template>
  <div class="main-content">
    <breadcumb :page="'Contact List'" :folder="'App'" />

    <b-row>
      <b-col md="12">
        <b-card no-body>
          <b-card-header class="gradient-purple-indigo o-hidden pb-80">
            <div class="pt-4">
              <b-row>
                <h4 class="col-md-4 text-white">Contacts</h4>
                <b-form-input
                  type="text"
                  class="form-control-rounded col-md-4 ml-3 mr-3"
                  placeholder="search contacts...."
                ></b-form-input>
              </b-row>
            </div>
          </b-card-header>
          <b-card-body>
            <div class="ul-contact-list-body">
              <div class="ul-contact-main-content d-flex">
                <div class="ul-contact-left-side" :class="{'contact-list-mobile' : isCLoseMenu }">
                  <b-card class="ul-contact-vh">
                    <div class="contact-close-mobile-icon float-right mb-2">
                      <i
                        @click="isCLoseMenu =!isCLoseMenu"
                        class="i-Close-Window text-15 font-weight-600"
                      ></i>
                    </div>
                    <div class="ul-contact-list">
                      <b-button
                        variant="outline-secondary"
                        class="mb-30"
                        block
                        @click="onContactListBtn"
                        v-b-modal.contact-list-table-modal
                      >ADD CONTACT</b-button>
                      <b-modal
                        id="contact-list-table-modal"
                        centered
                        title="BootstrapVue"
                        hide-footer
                        ref="my-modal"
                      >
                        <b-form @submit="onContactListSubmit" @reset="onReset">
                          <b-form-group id="input-group-1" label-for="input-1">
                            <b-form-input
                              id="input-1"
                              v-model="contactListForm.name"
                              type="text"
                              required
                              placeholder="enter your name...."
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group id="input-group-1" label-for="input-1">
                            <b-form-input
                              id="input-1"
                              v-model="contactListForm.email"
                              type="email"
                              required
                              placeholder="Enter email"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-2" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              type="text"
                              v-model="contactListForm.phone"
                              required
                              placeholder="phone number..."
                            ></b-form-input>
                          </b-form-group>
                          <b-form-group>
                            <b-button v-if="isSaveBtn" type="submit" variant="success">Submit</b-button>
                            <b-button v-else-if="isUpdateBtn" type="submit" variant="success">Update</b-button>
                          </b-form-group>
                        </b-form>
                      </b-modal>
                      <b-list-group flush>
                        <b-list-group-item
                          button
                          class="d-flex justify-content-between align-items-center"
                        >Cras justo odio</b-list-group-item>

                        <b-list-group-item
                          button
                          class="d-flex justify-content-between align-items-center"
                        >Dapibus ac facilisis in</b-list-group-item>

                        <b-list-group-item
                          button
                          class="d-flex justify-content-between align-items-center"
                        >Morbi leo risus</b-list-group-item>
                      </b-list-group>
                    </div>
                  </b-card>
                </div>

                <div class="ul-contact-content">
                  <b-card>
                    <div class="navbar-header clearfix">
                      <i
                        @click="openMenu"
                        class="nav-icon i-Align-Justify-All text-25 ul-contact-mobile-icon float-left"
                      ></i>
                    </div>
                    <vue-good-table
                      :line-numbers="false"
                      :columns="columns"
                      :pagination-options="{
                        enabled: true,
                        mode: 'records'
                        }"
                      styleClass="tableOne vgt-table"
                      :rows="rows"
                    >
                      <template slot="table-row" slot-scope="props">
                        <!-- <pre>
                          {{props.row}}
                        </pre>-->

                        <span v-if="props.column.field == 'img'">
                          <img
                            class="rounded"
                            :src="props.row.img"
                            style="width:50px ; height:50px"
                            alt="corrupted img"
                          />
                        </span>

                        <span v-else-if="props.column.field == 'action'">
                          <b-dropdown
                            id="dropdown-left"
                            variant="link"
                            text="Left align"
                            toggle-class="text-decoration-none"
                            size="sm"
                            dropleft
                            no-caret
                          >
                            <template v-slot:button-content class="_r_btn border-0">
                              <span class="_dot _r_block-dot bg-dark"></span>
                              <span class="_dot _r_block-dot bg-dark"></span>
                              <span class="_dot _r_block-dot bg-dark"></span>
                            </template>
                            <b-dropdown-item
                              v-b-modal.contact-list-table-modal-2
                              @click="editContactlist(props.row)"
                            >
                              <i class="nav-icon i-Pen-2 text-success font-weight-bold mr-2"></i>
                              Edit
                            </b-dropdown-item>

                            <b-dropdown-item @click="deleteContactList(props.index)">
                              <i class="nav-icon i-Close-Window text-danger font-weight-bold mr-2"></i>
Delete
                            </b-dropdown-item>
                          </b-dropdown>
                        </span>
                      </template>
                    </vue-good-table>
                  </b-card>

                  <!-- edit-modal  -->
                  <div class="edit-modal">
                    <b-modal
                      id="contact-list-table-modal-2"
                      centered
                      title="BootstrapVue"
                      hide-footer
                    >
                      <b-form @submit.stop.prevent="onUpdateContactList">
                        <b-form-group id="input-group-1" label-for="input-1">
                          <b-form-input
                            id="input-1"
                            v-model="editContactListForm.name"
                            type="text"
                            required
                            placeholder="enter your name...."
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-1" label-for="input-1">
                          <b-form-input
                            id="input-1"
                            v-model="editContactListForm.email"
                            type="email"
                            required
                            placeholder="Enter email"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            type="text"
                            v-model="editContactListForm.phone"
                            required
                            placeholder="phone number..."
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                          <b-button
                            type="submit"
                            variant="success"
                            @click="onUpdateContactList"
                          >Update</b-button>
                        </b-form-group>
                      </b-form>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCLoseMenu: true,
      show: true,
      isSaveBtn: true,
      isUpdateBtn: false,
      editContactListForm: [],
      contactListFilter: "",
      contactListForm: [
        {
          id: "",
          name: "",
          email: "",
          phone: ""
        }
      ],
      columns: [
        {
          label: "Name",
          field: "name",
          html: true
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "Phone",
          field: "phone",
          type: "number"
        },
        {
          field: "action",
          label: "Action"
        }
      ],
      rows: [
        {
          id: 1,

          name:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          email: "2018-10-29",
          phone: 0.03343
        },
        {
          id: 2,

          name: "Portable Speaker with HD Sound",
          email: "2011-10-31",
          phone: 0.03343
        },
        {
          id: 3,

          name: "Lightweight On-Ear Headphones - Black",
          email: "2011-10-30",
          phone: 0.03343
        },
        {
          id: 4,

          name:
            "Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)",
          email: "2011-10-11",
          phone: 0.03343
        },
        {
          id: 5,

          name: "Automatic-self-wind mens Watch 5102PR-001",
          email: "2011-10-21",
          phone: 0.03343
        },
        {
          id: 6,

          name: "On-Ear Headphones - Black",
          email: "2011-10-31",
          phone: 0.03343
        },
        {
          id: 7,

          name: "In-Ear Headphone",
          email: "2018-10-29",
          phone: 0.03343
        },
        {
          id: 8,

          name: "Duis exercitation nostrud anim",
          email: "2011-10-31",
          phone: 0.03343
        },
        {
          id: 9,

          name: "Doasdlor eu nostrud excepteur",
          email: "2011-10-30",
          phone: 0.03343
        },
        {
          id: 10,

          name:
            "Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset",
          email: "2011-10-11",
          phone: 0.03343
        },
        {
          id: 11,

          name:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          email: "2011-10-21",
          phone: 0.03343
        },
        {
          id: 12,

          name: "Portable Speaker with HD Sound",
          email: "2011-10-31",
          phone: 0.03343
        }
      ]
    };
  },
  computed: {
    filterIcons() {
      return this.rows.filter(iconSearch => {
        return contactListFilter.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  methods: {
    openMenu() {
      this.isCLoseMenu = !this.isCLoseMenu;
    },
    onContactListBtn() {
      this.isUpdateBtn = false;
      this.isSaveBtn = true;
    },
    onContactListSubmit(evt) {
      evt.preventDefault();

      this.rows.push({
        id: this.rows.length + 1,
        name: this.contactListForm.name,
        email: this.contactListForm.email,
        phone: this.contactListForm.phone
      });
      this.onReset();
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "Data Inserted Successfully"
      });
    },

    onReset(evt) {
      (this.contactListForm.name = ""),
        (this.contactListForm.email = ""),
        (this.contactListForm.phone = "");
    },
    editContactlist(data) {
      this.isUpdateBtn = true;
      this.isSaveBtn = false;
      this.editContactListForm = data;
    },
    onUpdateContactList(evt) {
      evt.preventDefault();
      let modifiedList = this.rows.map(row => {
        // console.log(row.id, this.editContactListForm.id);

        

        this.$refs["my-modal"].hide();
        this.$swal({
          position: "top-end",
          type: "warning",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000
        });

        if (row.id == this.editContactListForm.id) {
          return this.editContactListForm;
        } else {
          return row;
        }
      });
      this.rows = modifiedList;
    },

    deleteContactList(data) {
      // console.log(data);

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$delete(this.rows, data);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>
