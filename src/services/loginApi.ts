import axios from "axios";

export const loginApi = axios.create({
  baseURL: "http://localhost:3000/app/login"
});
