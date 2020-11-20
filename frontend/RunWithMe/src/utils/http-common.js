import axios from "axios";

// axios 객체 생성
export default axios.create({
	// baseURL: "https://k3a303.p.ssafy.io:8443/",
  baseURL: "http://localhost:8080/",
<<<<<<< HEAD
  
  // baseURL: "https://878b31284fc1.ngrok.io",
=======
  // baseURL: "https://3acc3dddabba.ngrok.io",
>>>>>>> 6f5e88fbe3eb840b0f072a534bb576fe7cf226a4
    headers: {
      AUTH:localStorage.getItem("auth")
    },
    xhrFields: {
      withCredentials: true
    }
});

