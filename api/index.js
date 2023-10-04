import axios from "axios";

const storeApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default storeApi;
