import axios from "axios";
import { toast } from "react-toastify";

export const SERVER_URL = "http://localhost:4000";

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined") {
      toast?.error(
        error.response?.data?.message || error?.message || "خطایی رخ داد",
      );
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong!",
    );
  },
);

export default axiosInstance;
console.log(axiosInstance);
