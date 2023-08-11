import axios from "axios";

const apiPADA = axios.create({
  //baseURL: "https://app-vacina-backend-production.up.railway.app",
  baseURL: "http://172.168.10.108:3001",
});

export default apiPADA;
