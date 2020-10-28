import axios from "axios";

// axios 객체 생성
export default axios.create({
  baseURL: "http://6ee31f41f76b.ngrok.io/",
    headers: {
      auth:localStorage.getItem("auth")
    }
});