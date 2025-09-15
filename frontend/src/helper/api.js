import axios from "axios";

const baseURL =
  process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT"
    ? process.env.REACT_APP_SERVER_DOMAIN_DEV
    : process.env.REACT_APP_SERVER_DOMAIN_PROD;

console.log("Axios BaseURL Configured:", baseURL);

const api = axios.create({
  baseURL,
});

export default api;
