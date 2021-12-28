import axios from "axios";
const instance = axios.create({
  baseURL: "https://relico-demo.herokuapp.com/api",
  //baseURL: "https://api-prod.thejerseystores.com/api"
});
export default instance;