import axios from "axios";

// axios 객체 생성
export default axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: "http://fe8330147a8b.ngrok.io/",
    headers: {
      AUTH:localStorage.getItem("auth")
    },
    xhrFields: {
      withCredentials: true
    }
});