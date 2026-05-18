// import axios from "axios";
// import toast from "react-hot-toast";

// const instance = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// instance.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     const status = error.response?.status;
//     if (status === 401) {
//       toast.error("Session expired. Please login again.");
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       window.location.href = "/";
//     } else if (status === 403) {
//       toast.error("You are not authorized for this action.");
//     } else if (status >= 500) {
//       toast.error("Server error. Please try again later.");
//     } else if (error.response?.data?.message) {
//       toast.error(error.response.data.message);
//     } else {
//       toast.error("Something went wrong.");
//     }
//     return Promise.reject(error);
//   }
// );

// export default instance;




import axios from "axios";
 
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://smartclassroom-bc1w.onrender.com/api",
  withCredentials: false,
});
 
// Attach JWT token to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
 
// Auto-logout on 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
    }
    return Promise.reject(err);
  }
);
 
export default api;
