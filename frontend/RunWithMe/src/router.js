import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views/app"), //webpackChunkName app
    // beforeEnter: authenticate,
    redirect: "/app/dashboards/main",

    children: [
      {
        path: "/app/dashboards",
        component: () => import("./views/app/dashboards"), //dashboard
        children: [
          {
            path: "main",
            component: () => import("./views/app/dashboards/main")
          },
        ]
      },

      //  apps
      {
        path: "/app/apps",
        component: () => import("./views/app/apps"),
        redirect: "/app/apps/chat",
        children: [
          {
            path: "chat",
            component: () => import("./views/app/apps/chat")
          },
          {
            path: "groupchat",
            component: () => import("./views/app/apps/groupchat")
          },
          {
            path: "challenges",
            component: () => import("./views/app/apps/challenges")
          },
          {
            path: "createChallenge",
            component: () => import("./views/app/apps/createChallenge")
          },
          {
            path: "payChallenge",
            component: () => import("./views/app/apps/payChallenge")
          },
          {
            path: "payment",
            component: () => import("./views/app/apps/payment")
          },
          {
            path: "paymentDone",
            component: () => import("./views/app/apps/paymentDone")
          },
        ]
      },
      // runnings
      {
        path: "/app/runnings",
        component: () => import("./views/app/runnings"),
        redirect: "/app/runnings/kakaomaptest",
        children: [
          {
            path: "runningResult",
            component: () => import("./views/app/runnings/runningResult")
          },
          {
            path: "running",
            component: () => import("./views/app/runnings/running")
          },
          {
            path: "neighborhoodList",
            component: () => import("./views/app/runnings/neighborhoodList")
          },
          {
            path: "friendsDetail",
            component: () => import("./views/app/runnings/friendsDetail")
          },
        ]
      },
      // mypages
      {
        path: "/app/mypages",
        component: () => import("./views/app/mypages"),
        redirect: "/app/mypages/mypageTab",
        children: [
          {
            path: "mypageTab",
            component: () => import("./views/app/mypages/mypageTab")
          },
          {
            path: "friends",
            component: () => import("./views/app/mypages/friends")
          },
          {
            path: "myChallenges",
            component: () => import("./views/app/mypages/myChallenges")
          },
        ]
      },

      // challengeBoard
      {
        path: "/app/board",
        component: () => import("./views/app/board"),
        redirect: "/app/board/challengeBoard",
        children: [
          {
            path: "challengeBoard",
            component: () => import("./views/app/board/challengeBoard")
          },
          {
            path : 'challengeBoardDetail',
            component :()=> import("./views/app/board/challengeBoardDetail") ,
            props: true
          },
        ]
      },

    ]
  },
  // sessions
  {
    path: "/app/sessions",
    component: () => import("./views/app/sessions"),
    redirect: "/app/sessions/signIn",
    children: [
      {
        path: "signIn",
        component: () => import("./views/app/sessions/signIn")
      },
      {
        path: "signUp",
        component: () => import("./views/app/sessions/signUp")
      },
      {
        path: "forgot",
        component: () => import("./views/app/sessions/forgot")
      }
    ]
  },


];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
