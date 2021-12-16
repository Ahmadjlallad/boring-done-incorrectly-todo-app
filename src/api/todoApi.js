import axios from "axios";
import cookie from "react-cookies";

export default axios.create({
  baseURL: "https://todo-jallad.herokuapp.com",
});

export const todoApiWithToken = axios.create({
  baseURL: "https://todo-jallad.herokuapp.com",
  headers: {
    Authorization: `bearer ${cookie.load("auth")}`,
  },
});
