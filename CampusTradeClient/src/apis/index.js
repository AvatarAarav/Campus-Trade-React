import { Password } from "@mui/icons-material";

import axios from "axios";
// const url = "http://localhost:8000/api/";
const url = "https://campus-trade-react.onrender.com/api"

const API = axios.create({ baseURL: url });

export const fetchUserDetailsApi = (id) => API.post("/user", { userId: id });
export const fetchAdminDetailsApi = (id) =>API.post("/admin", {adminId:id});
export const fetchAdDetailsApi = (id,uid="-") => API.get(`/ad/${id}/${uid}`);
export const fetchAllAdsApi = (college="-") => API.get("/products/"+college);
export const checkLoginAPI = (admin, email, password) =>
  API.post("/user/login", { admin, email, password });
export const sendOtpAPI = (email) => API.post("/send-otp", { email });
export const signUpAPI = (userData) => API.post("/user/register", userData);
export const productADDAPI = (adData) => API.post("/form", adData);
export const wishlistAPI = (uid,id) => API.get(`/ad/buy/${id}/uid/${uid}`) 
export const googleLoginAPI = (googleObject) =>
  API.post("/user/google", googleObject);
export const boughtAdAPI = (id,uid) => API.post("/ad/bought",{id,uid})
export const chataddAPI = (data) => API.post("/ad/chat/post",data)
export const uwishlistAPI = (uid,id) => API.get(`/ad/unbuy/${id}/uid/${uid}`)
export const updateprofileAPI = (data) => API.post("/user/UpdateProfile",data)
export const updateadAPI = (data) => API.post("/update_form",data)
export const reportAPI = (uid,id) => API.get(`/ad/report/${id}/uid/${uid}`)
export const getalluserAPI = (college="-") => API.get(`/allusers/${college}`)
export const delProductAPI = (id) => API.post("/admin/delete/ad",{id});
export const delUserAPI = (id) => API.post("/admin/delete/user",{id})
export const getAllreportAPI = (college="-") => API.get("/admin/getReported/"+college);
export const sendAnnouncement= (sub,mess)=> API.post('/admin/announcement',{subject: sub , message : mess })
export const doPayment = ()=> API.post("/create-order")