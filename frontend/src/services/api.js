import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-ai-system-mok7.onrender.com/api"
});

export default API;