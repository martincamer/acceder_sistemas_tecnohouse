import axios from "axios";

const baseURL = "http://localhost:4000/api";

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;
