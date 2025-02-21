import axios from "axios";

const authAPI = axios.create({
  baseURL: import.meta.env.AUTH_SERVER_URL,
});
const jsonServerAPI = axios.create({
  baseURL: import.meta.env.JSON_SERVER_URL,
});

export default { authAPI, jsonServerAPI };
