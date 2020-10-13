import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Room from "../views/Room.vue";
import RoomList from "../views/RoomList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/room",
    name: "Room",
    component : Room
  },
  {
    path: "/rooms",
    name: "Roomlist",
    component : RoomList
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
