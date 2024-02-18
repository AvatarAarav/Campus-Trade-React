import express from "express";
import path from "path";
import multer from "multer"; //module to handle file submission
import { submitForm } from "../controllers/Add_Product.js";
import { addUserAPI } from "../controllers/register.js";
import { checkLoginAPI } from "../controllers/login.js";
import { getUserData } from "../controllers/getUserData.js";
import { getAllProductsAPI } from "../controllers/getAllProducts.js";
import { getAdFormAPI } from "../controllers/getAdForm.js";
import { getProductAPI } from "../controllers/getProduct.js";
import { getAdObjectAPI } from "../controllers/getAdObject.js";
import { getUserCardsAPI } from "../controllers/getUserCards.js";
import { getAdminData } from "../controllers/getAdminData.js";
import { getSearchResultAPI } from "../controllers/getSearchResult.js";
import { getUpdateAdAPI } from "../controllers/getUpdateAd.js";
import { updateFormAPI } from "../controllers/Update_form.js";
import { delProductAPI } from "../controllers/deleteAd.js";
import { buyProductApi } from "../controllers/buyProductApi.js";
import { ProfileUpdateAPI } from "../controllers/ProfileUpdate.js";
import { ChangeProfileAPI } from "../controllers/ChangeProfile.js";
import { getAdminProductAPI } from "../controllers/AdminProduct.js";
import { getAllUsersAPI } from "../controllers/getAllUsers.js";
import { getAdminUserAPI } from "../controllers/getAdminUser.js";
import { removeProductApi } from "../controllers/removeProduct.js";
import { postAddChatAPI } from "../controllers/postAddChat.js";
import { getProductChatsAPI } from "../controllers/getProductChats.js";
import { reportProductApi } from "../controllers/reportProductApi.js";
import { getAllUsersEmailAPI } from "../controllers/getAllUsersEmail.js";
import { getuserdetailAPI } from "../controllers/getuserdetail.js";
import { getadadmindetailAPI } from "../controllers/getadadmindetail.js";

// import { deleteAdminadAPI } from "../controllers/deleteAdminad.js";
import { deleteAdminuserAPI } from "../controllers/deleteAdminuser.js";
import { sendOTP } from "../controllers/Mailer.js";
import { Payment } from "../controllers/Payment.js";
import { GoogleLoginAPI } from "../controllers/GoogleLogin.js";
import { boughtAdAPI } from "../controllers/bought_add.js";
import { UnbuyAPI } from "../controllers/unbuy_product.js";
// import { reportadApi } from "../controllers/report_ad.js";
import { del_ad_adminAPI } from "../controllers/delete_ad_admin.js"; 
import { DelUserAPI } from "../controllers/del_user_admin.js";
import { getAllreportAPI } from "../../CampusTradeClient/src/apis/index.js";
import { getallreportAPI } from "../controllers/getAllReport.js";
const router = express.Router();

router.get("/products", getAllProductsAPI);

// Set up the multer middleware to handle file uploads
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("hi there")
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/ad/:id", getProductAPI);
router.get("/ad/buy/:id/uid/:uid", buyProductApi);
router.get("/ad/report/:id/uid/:uid", reportProductApi);
router.get("/ad/remove/:id/uid/:uid", removeProductApi);
router.get("/ad/delete/:id/mail/:eid", delProductAPI);
router.post("/form", upload.array("images", 5), submitForm);
// router.get("/ad/report/:id/uid/:uid",reportadApi)
router.post(
  "/update_form",
  updateFormAPI
);
router.post("/user/register", addUserAPI);
router.post("/user/login", checkLoginAPI);
router.get("/user/allEmail", getAllUsersEmailAPI);
router.post("/user", getUserData);
router.post("/admin", getAdminData);
router.get("/allusers", getAllUsersAPI);
router.get("/user/:id", getUserCardsAPI);
router.post("/user/adCreate", getAdFormAPI);
router.get("/adObject/:id", getAdObjectAPI);
router.get("/search_result", getSearchResultAPI);
router.get("/admin_product", getAdminProductAPI);
router.get("/search_admin_user", getAdminUserAPI);
router.get("/user/ad_update/:email/mail/:id", getUpdateAdAPI);
router.post("/user/UpdateProfile", ProfileUpdateAPI);
router.post("/user/changeProfile", ChangeProfileAPI);
router.post("/ad/chat/post", postAddChatAPI);
router.get("/ad/chat/:id", getProductChatsAPI);
router.get("/ad/unbuy/:id/uid/:uid",UnbuyAPI);
router.get("/user/adminlink/:id/admin/:aid", getuserdetailAPI);
router.get("/admin_ads/:id/admin/:aid", getadadmindetailAPI);

router.get("/user/allEmail/", getAllUsersEmailAPI);

// router.get("/admin/:id/delete/:aid", deleteAdminadAPI);
router.get("/admin/:email/deleteuser/:aid", deleteAdminuserAPI);

router.post("/user/google", GoogleLoginAPI);
router.post("/send-otp", sendOTP);

router.post("/create-order", Payment);
router.post("/ad/bought", boughtAdAPI);
router.post("/delete/ad",del_ad_adminAPI);
router.post("/delete/user",DelUserAPI)
router.get("/getallreport",getallreportAPI);
export default router;
