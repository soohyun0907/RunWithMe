<template>
  <div>
    <breadcumb :page="'Add Board'" :folder="'Apps'" />

    <b-row class="mb-30">
      <b-col md="12" class="mb-30">
        <b-card>
          <div class="d-flex justify-content-between">
            <b-button variant="outline-primary">Back To Board</b-button>
            <b-form-input
              id="input-1"
              class="w-50"
              type="text"
              required
              placeholder="add board name...."
            ></b-form-input>
            <b-button variant="outline-danger">Delete Board</b-button>
          </div>
        </b-card>
      </b-col>

    </b-row>
    <div class="row">
      
      <div class="col-3">
        <draggable>
          <b-card title="Draggable 1">
            <draggable
              class="list-group"
              :list="list1"
              group="people"
              @change="log"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <div class v-for="(element, index) in list1" :key="element.name">
                  <b-card 
                      class="mb-30 cursor-pointer"
                      :img-src="element.img"
                      img-top  
                      v-b-modal.modal-center  
                  >
                    
                    <b-card-text> {{ element.name }} </b-card-text>
                    <template v-slot:footer>
                      <small class="text-muted">{{ index }}</small>
                    </template>
                  </b-card>
                </div>
              </transition-group>
            </draggable>
          </b-card>
        </draggable>
      </div>
      <!-- scrumboard-modal  -->
      <b-modal id="modal-center" centered title="Draggable 1" hide-footer>
        <b-form >
          <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
            class="mb-3"
          >
            <b-form-input
              id="input-1"
              type="text"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group>
             <b-form-textarea
              id="textarea"
              placeholder="Description"
              rows="5"
              max-rows="9"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              
              options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>

      <div class="col-3">
        <draggable>
          <b-card title="Draggable 2">
            <draggable
              class="list-group"
              :list="list2"
              group="people"
              @change="log"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group tag="p" type="transition" :name="!drag ? 'flip-list' : null">
                <div class="" v-for="(element, index) in list2" :key="element.name">
                   <b-card 
                      class="mb-30 cursor-pointer"
                      :img-src="element.img"
                      img-top    
                      
                  >
                    
                    <b-card-text> {{ element.name }} </b-card-text>
                    <template v-slot:footer>
                      <small class="text-muted">{{ index }}</small>
                    </template>
                  </b-card>
                </div>
              </transition-group>
            </draggable>
          </b-card>
        </draggable>
      </div>
      <b-col md="3">
        <b-card class="cursor-pointer">
          <div class="card-title mb-0">
            <b-button
              @click="isShow = !isShow"
              v-if="isShow"
              tag="div"
              class="ul-scrum-btn d-flex align-items-center border-0"
            >
              <i class="i-Add text-20 mr-2"></i>
              <p class="m-0 text-muted">Add Project List</p>
            </b-button>

            <b-input-group v-else class="mt-3">
              <b-input-group-append>
                <b-button
                  @click="addProjectList"
                  :disabled="projectList == ''"
                  variant="primary"
                  size="sm"
                >Add</b-button>
              </b-input-group-append>
              <b-form-input class="ul-scrumboard-form-input" type="text" v-model="projectList"></b-form-input>
              <b-input-group-append>
                <b-button @click="isShow = !isShow" variant="primary" size="sm">X</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-card>
      </b-col>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",

  order: 1,
  components: {
    draggable
  },

  data() {
    return {
      isShow: true,
      drag: false,
      projectList: "",
      list1: [
        { name: "John", id: 1 , img: require("@/assets/images/products/headphone-1.jpg")  },
        { name: "Joao", id: 2 , img: require("@/assets/images/products/iphone-1.jpg") },
        { name: "Jean", id: 3 , img: require("@/assets/images/products/speaker-1.jpg") },
        { name: "Gerard", id: 4 , img: require("@/assets/images/products/watch-1.jpg") }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  computed: {
    
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false
      };
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    btnStatus() {
      if (this.projectList != "") {
        this.isBtnDisable = false;
      }
    },
    addProjectList() {}
  }
};
</script>
<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.ul-scrum-btn:focus {
  box-shadow: none;
  /* box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5); */
}
.ul-scrum-btn:hover {
  box-shadow: none;
}
.ul-scrumboard-form-input:focus {
  box-shadow: none;
}
</style>