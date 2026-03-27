import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); 
  } catch (err) {
    return true;
  }
};
let access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");


api.interceptors.request.use(
  async (config) => {
    let access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    // 🔥 Check if access token is expired BEFORE request
    if (access && isTokenExpired(access) && refresh) {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/token/refresh/",
          { refresh }
        );

        access = res.data.access;

        localStorage.setItem("access", access);
        console.log("Access token refreshed ✅");
      } catch (err) {
        console.error("Refresh token failed ❌", err);

        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    // attach token
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    // if refresh also fails or invalid token
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

console.log("Checking token...");
console.log("Is expired:", isTokenExpired(access));

export default api;