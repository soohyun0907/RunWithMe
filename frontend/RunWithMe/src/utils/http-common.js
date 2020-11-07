import axios from "axios";

// axios 객체 생성
export default axios.create({
	baseURL: "https://k3a303.p.ssafy.io:8443/",
  // baseURL: "http://fe8330147a8b.ngrok.io/",
    headers: {
      AUTH:localStorage.getItem("auth")
    },
    xhrFields: {
      withCredentials: true
    }
});

