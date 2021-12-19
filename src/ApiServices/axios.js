import axios from "axios";
const instance = axios.create({
  baseURL: "https://api-prod.thejerseystores.com/api",
  //baseURL: "https://api-prod.thejerseystores.com/api"
});
export default instance;