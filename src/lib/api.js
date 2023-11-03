import axios from "axios";

const api = axios.create({
  base: "http://localhost:3333/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
