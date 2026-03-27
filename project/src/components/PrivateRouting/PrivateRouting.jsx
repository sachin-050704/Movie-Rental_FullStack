import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";



const PrivateRouting = () => {
    const token = localStorage.getItem("access")
    const isExpired = (token) => {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return Date.now() >= payload.exp * 1000;
    };
    return (
        <>
            {token && !isExpired(token) ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRouting;


// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Navigate } from "react-router-dom";



// const PrivateRouting = () => {
//     const [user, setUser] = useState(false);
//     const token = localStorage.getItem("access")
//     const reftoken = localStorage.getItem("refresh")

//     const refreshToken = async () => {
//         const res = await axios.post(
//             "http://127.0.0.1:8000/api/token/refresh/",
//             {
//                 refresh: reftoken   // ✅ correct
//             }
//         );
//         setUser(true)
//     }

//     if (token) {
//         setUser(true)
//     } else if (reftoken) {
//         refreshToken();
//     } else {
//         setUser(false)
//     }

//     return (
//         <>
//             {user ? <Outlet /> : <Navigate to="/login" />}
//         </>
//     )
// }

// export default PrivateRouting;


// import { Outlet, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {jwtDecode} from "jwt-decode";

// const PrivateRouting = () => {
//   const [isAuth, setIsAuth] = useState(null); // null = loading

//   useEffect(() => {
//     const checkAuth = async () => {
//       let access = localStorage.getItem("access");
//       const refresh = localStorage.getItem("refresh");

//       if (!access || !refresh) {
//         setIsAuth(false);
//         return;
//       }

//       try {
//         const decoded = jwtDecode(access);
//         const isExpired = decoded.exp * 1000 < Date.now();

//         // 🔥 If expired → refresh it
//         if (isExpired) {
//           const res = await axios.post(
//             "http://127.0.0.1:8000/api/token/refresh/",
//             { refresh }
//           );

//           access = res.data.access;
//           localStorage.setItem("access", access);
//         }

//         setIsAuth(true);
//       } catch (err) {
//         console.error("Auth check failed", err);
//         localStorage.clear();
//         setIsAuth(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   // ⏳ While checking
//   if (isAuth === null) return <div>Loading...</div>;

//   return isAuth ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRouting;