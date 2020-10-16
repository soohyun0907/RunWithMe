<template>
  <div>
    <breadcumb :page="'Add Board'" :folder="'Apps'" />

    
      <div class="mb-30">
        <b-card>
          <div class="d-flex justify-content-between align-items-center">
            <b-button @click="back" variant="outline-primary" size="sm">Back</b-button>
            
            <p class="m-0 card-title">{{ getEditBoardList.title }}</p>
            <b-button variant="outline-danger" size="sm">Delete </b-button>
          </div>
        </b-card>
      </div>
   
  
    <div class="editScrumBoardContainer d-flex mb-30">
       
        <!-- <b-col md="12">
        <pre>
          {{ getEdit }}
        </pre>
        </b-col> -->
        <div 
          class="col-md-3 ul-board-item" 
          v-for="(div, key) in getEditBoardList.list" :key="key">
           
          <b-card :title="div.title">
            
            <draggable
              class="list-group"
              group="people"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <!-- <div class v-for="(element, index) in list1" :key="element.name"> -->
                <div v-for="list in div.cardList" :key="list.id">
                  <b-card
                    class="mb-30 cursor-pointer"
                    :img-src="list.coverImage"
                    img-top
                    v-b-modal.modal-center
                    @click="editCardListPage(list)"
                  >
                    <b-card-text>{{ list.title }}</b-card-text>
                    <template v-slot:footer>
                      <small class="text-muted"></small>
                    </template>
                  </b-card>
                </div>
                <!-- </div> -->
              </transition-group>
            </draggable>

            <!-- toggleCard  -->
            <template v-slot:footer>
              <b-button
                @click="toggleCard(key)"
                v-if="selectedListId != key"
                block
                variant="primary"
              >Add Card</b-button>
              <b-input-group v-else-if="selectedListId === key" class="mt-3">
                <b-input-group-append>
                  <b-button
                    :disabled="addBoard.cardList == ''"
                    variant="primary"
                    size="sm"
                    @click="addCard({ list: div, cardListTitle : addBoard.cardList })"
                  >Add</b-button>
                </b-input-group-append>
                <b-form-input
                  v-model="addBoard.cardList"
                  class="ul-scrumboard-form-input"
                  type="text"
                  v-on:keyup.enter="addCard({ list: div, cardListTitle : addBoard.cardList })"
                ></b-form-input>
                <b-input-group-append>
                  <b-button @click="toggleCard" variant="primary" size="sm">X</b-button>
                </b-input-group-append>
              </b-input-group>
            </template>
          </b-card>
           
        </div>

       
        <!-- scrumboard-modal  -->
        <b-modal id="modal-center" size="lg" centered title="Draggable 1" hide-footer>
          <b-form >
            <b-form-group id="input-group-1" label-for="input-1" class="mb-4">
              <b-form-input
                id="input-1"
                type="text"
                required
                v-model="getEditCardList.title"
                placeholder="title"
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-4">
              <b-form-textarea
                id="textarea"
                v-model="getEditCardList.description"
                rows="5"
                placeholder="Description"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group class="mb-4">
              <b-form-input 
                  v-model="addBoard.comment"
                  @keyup.enter="addComment(addBoard.comment)" 
                  id="input-1" 
                  type="text" 
                   placeholder="Write Comments...."
                  
              ></b-form-input>
            </b-form-group>
            
            <b-list-group class="mb-4">
              <div
                class="d-flex w-100 align-items-baseline"
                v-for="comment in getEditCardList.comments"
                :key="comment.id"
              >
                <p class="ul-widget4__img todo-img">
                  <img :src="comment.image" class="rounded-circle" />
                </p>
                <b-list-group-item class="mb-4 w-100">{{comment.text}}</b-list-group-item>
              </div>
            </b-list-group>

            <b-button @click.prevent="onSubmit(getEditCardList)" type="button" variant="primary">Submit</b-button>
            
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-modal>

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
                    @click="addList(addBoard.title)"
                    :disabled="addBoard.title == ''"
                    variant="primary"
                    size="sm"
                  >Add</b-button>
                </b-input-group-append>
                <b-form-input
                  class="ul-scrumboard-form-input"
                  type="text"
                  v-model="addBoard.title"
                  v-on:keyup.enter="addList(addBoard.title)"
                ></b-form-input>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "two-lists",
  display: "Two Lists",

  order: 1,
  components: {
    draggable
  },

  data() {
    return {
      boardTitle:'untitle',
      addBoard: {
        title: "",
        cardList: "",
        comment:""
      },
      selectedListId: null,
      enabled: true,
      isShow: true,
      isCard: false,
      drag: false,
      projectList: ""
    };
  },
  computed: {
    ...mapGetters(["getBoardList", "getEditBoardList", "getEditCardList","getList"]),
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false
      };
    }
  },
  methods: {
    ...mapActions(["editCardList", "addList", "addCard","addComment","updateCardList","updateBoard"]),
    onSubmit(data) {
      console.log("testing");
      this.updateCardList(data)
    },
    toggleCard(data) {
      this.selectedListId = data;
    },
    addProjectList() {},
    editCardListPage(data) {
      this.editCardList(data);
    },
    back(){
      this.$router.push('/app/apps/scrumboard')
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
.editScrumBoardContainer{
  overflow-x: scroll;
}
.ul-board-item{
  min-width: 400px;
}
</style>