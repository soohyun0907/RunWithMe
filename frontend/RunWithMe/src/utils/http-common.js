import axios from "axios";

// axios 객체 생성
export default axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://7837affded98.ngrok.io",
  headers: {
    "Content-type": "application/json",
    // "authCodeTest":"this is auth token location!!"
  }
});