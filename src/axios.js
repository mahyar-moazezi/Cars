import axios from "axios";
const Instance = axios.create({
  baseURL: "https://cars-auth-d7163.firebaseio.com/",
});
export default Instance;
