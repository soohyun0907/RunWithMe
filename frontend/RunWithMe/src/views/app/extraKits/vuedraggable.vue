<template>
  <div class="main-content">
    <breadcumb :page="'Vue Dragabble'" :folder="'Extra Kits'" />
    <b-row>
      <!-- column-one -->
      <b-col md="3" class="mb-30">
        <b-card>
          <div class="d-flex justify-content-between mb-3">
            <p class="card-title m-0">Task List</p>

            <div class="btn-group">
              <b-button variant="primary">Action</b-button>
            </div>
          </div>
          <b-row>
            <b-col md="12">
              <draggable
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group
                  type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <b-card
                    class="mb-30 cursor-pointer"
                    v-for="element in list1"
                    :key="element.name"
                  >
                    <div class="d-flex justify-content-between">
                      <h6 class="text-muted mb-1">{{ element.name }}</h6>
                      <a href>
                        <i class="nav-icon i-Pen-2"></i>
                      </a>
                    </div>
                    <div
                      class="ul-board--description d-flex justify-content-between mt-3"
                    >
                      <div class="ul-board--lDesc d-flex align-items-center">
                        <i class="nav-icon i-Speach-Bubble-3 mr-1"></i>
                        <span class="text-muted">7</span>
                      </div>
                    </div>
                  </b-card>
                </transition-group>
              </draggable>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <!-- column-two -->
      <b-col md="3" class="mb-30">
        <b-card>
          <div class="d-flex justify-content-between mb-3">
            <p class="card-title m-0">In Progress</p>

            <div class="btn-group">
              <b-button variant="primary">Action</b-button>
            </div>
          </div>
          <b-row>
            <b-col md="12">
              <draggable
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group
                  type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <b-card
                    class="mb-30 cursor-pointer"
                    v-for="element in list2"
                    :key="element.name"
                  >
                    <div class="d-flex justify-content-between">
                      <h6 class="text-muted mb-1">{{ element.name }}</h6>
                      <a href>
                        <i class="nav-icon i-Pen-2"></i>
                      </a>
                    </div>
                    <div
                      class="ul-board--description d-flex justify-content-between mt-3"
                    >
                      <div class="ul-board--lDesc d-flex align-items-center">
                        <i class="nav-icon i-Speach-Bubble-3 mr-1"></i>
                        <span class="text-muted">7</span>
                      </div>
                    </div>
                  </b-card>
                </transition-group>
              </draggable>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <!-- column-three -->
      <b-col md="3" class="mb-30">
        <b-card>
          <div class="d-flex justify-content-between mb-3">
            <p class="card-title m-0">In Review</p>

            <div class="btn-group">
              <b-button variant="primary">Action</b-button>
            </div>
          </div>
          <b-row>
            <b-col md="12">
              <draggable
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group
                  type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <b-card
                    class="mb-30 cursor-pointer"
                    v-for="element in list3"
                    :key="element.name"
                  >
                    <div class="d-flex justify-content-between">
                      <h6 class="text-muted mb-1">{{ element.name }}</h6>
                      <a href>
                        <i class="nav-icon i-Pen-2"></i>
                      </a>
                    </div>
                    <div
                      class="ul-board--description d-flex justify-content-between mt-3"
                    >
                      <div class="ul-board--lDesc d-flex align-items-center">
                        <i class="nav-icon i-Speach-Bubble-3 mr-1"></i>
                        <span class="text-muted">7</span>
                      </div>
                    </div>
                  </b-card>
                </transition-group>
              </draggable>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <!-- column-four -->
      <b-col md="3">
        <b-card>
          <div class="d-flex justify-content-between mb-3">
            <p class="card-title m-0">Completed</p>

            <div class="btn-group">
              <b-button variant="primary">Action</b-button>
            </div>
          </div>
          <b-row>
            <b-col md="12">
              <draggable
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group
                  type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <b-card
                    class="mb-30 cursor-pointer"
                    v-for="element in list2"
                    :key="element.name"
                  >
                    <div class="d-flex justify-content-between">
                      <h6 class="text-muted mb-1">{{ element.name }}</h6>
                      <a href>
                        <i class="nav-icon i-Pen-2"></i>
                      </a>
                    </div>
                    <div
                      class="ul-board--description d-flex justify-content-between mt-3"
                    >
                      <div class="ul-board--lDesc d-flex align-items-center">
                        <i class="nav-icon i-Speach-Bubble-3 mr-1"></i>
                        <span class="text-muted">7</span>
                      </div>
                    </div>
                  </b-card>
                </transition-group>
              </draggable>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

// transition
export default {
  display: "Transitions",
  order: 7,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      list3: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 }
      ],

      drag: false
    };
  },
  methods: {},
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
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
</style>
