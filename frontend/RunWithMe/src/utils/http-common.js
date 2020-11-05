import axios from "axios";

// axios 객체 생성
export default axios.create({
    baseURL: "http://k3a303.p.ssafy.io/api/",
  // baseURL: "http://fe8330147a8b.ngrok.io/",
    headers: {
      AUTH:localStorage.getItem("auth")
    },
    xhrFields: {
      withCredentials: true
    }
});

// export default function ({ $axios, app, store }) {
//   $axios.onRequest(config => {
//     if (store.state.auth!="") {
//       config.headers.common['AUTH'] = store.state.auth
//     }
//   })
// }
