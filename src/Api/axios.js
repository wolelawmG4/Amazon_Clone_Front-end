import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-1eb12/us-central1/api",
  //  baseURL:"http://localhost:5000",
  baseURL: "https://amazon-api-deploy-5wtn.onrender.com",
});

export { axiosInstance };
