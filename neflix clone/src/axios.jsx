import axios from "axios"
import {baseUrl} from "./constants/constants.jsx"

const instance = axios.create({
    baseURL: baseUrl,
  });
  export default instance