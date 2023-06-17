import axios from "axios";

const baseUrl = "http://contabo.foxcode.site:8085";

const axiosClient = axios.create({
  baseURL: baseUrl,
});

export default axiosClient;
