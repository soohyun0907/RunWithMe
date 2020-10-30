import axios from "axios";

// axios 객체 생성
export default axios.create({
  //baseURL: "http://6ee31f41f76b.ngrok.io/",
  baseURL: "http://localhost:8080/",
    headers: {
      AUTH:localStorage.getItem("auth")
    }
});