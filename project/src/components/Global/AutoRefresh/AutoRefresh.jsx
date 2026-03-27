import { useEffect } from "react";
import axios from "axios";

const useAutoRefresh = () => {
  useEffect(() => {
    const refreshToken = async () => {
      const refresh = localStorage.getItem("refresh");

      if (!refresh) return;

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/refresh/",
          {
            refresh: refresh,
          }
        );

        localStorage.setItem("access", res.data.access);
        console.log("Token refreshed ✅");

      } catch (err) {
        console.log("Refresh failed ❌");
      }
    };

    const interval = setInterval(refreshToken, 60000);

    return () => clearInterval(interval);
  }, []);
};

export default useAutoRefresh;