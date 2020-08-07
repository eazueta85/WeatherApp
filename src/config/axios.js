import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export default axiosClient;
