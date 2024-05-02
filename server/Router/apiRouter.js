import express from "express";
import multer from "multer";
import path from "path";
import { submitForm } from "../controllers/Add_Product.js";
import { updateFormAPI } from "../controllers/Update_form.js";
import { getSearchResultAPI } from "../controllers/getSearchResult.js";
import { sendOTP } from "../controllers/Mailer.js";
import { Payment } from "../controllers/Payment.js";
import { boughtAdAPI } from "../controllers/bought_add.js";
import productRouter from './productRouter.js'
import userRouter from './userRouter.js'
import adminRouter from './adminRouter.js'
import adRouter from './adRouter.js'

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

/**
 * @openapi
 * /api/form:
 *   post:
 *     tags: [Special Services]
 *     summary: Submit a form with images
 *     description: Allows submission of a form along with up to 5 images for a product.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Form submitted successfully.
 *       400:
 *         description: Error in form submission.
 */
router.post("/form", upload.array("images", 5), submitForm);

/**
 * @openapi
 * /api/update_form:
 *   post:
 *     tags: [Special Services]
 *     summary: Update a form
 *     description: Update details of a previously submitted form.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 additionalProperties: true
 *     responses:
 *       200:
 *         description: Form updated successfully.
 *       400:
 *         description: Error updating form.
 */
router.post("/update_form", updateFormAPI);

/**
 * @openapi
 * /api/search_result:
 *   get:
 *     tags: [Special Services]
 *     summary: Search for products
 *     description: Execute a search query and return products based on the search criteria.
 *     responses:
 *       200:
 *         description: Search results returned successfully.
 *       404:
 *         description: No results found.
 */
router.get("/search_result", getSearchResultAPI);

/**
 * @openapi
 * /api/send-otp:
 *   post:
 *     tags: [Special Services]
 *     summary: Send OTP
 *     description: Send a one-time password (OTP) to the user's registered email for verification purposes.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: OTP sent successfully.
 *       400:
 *         description: Error sending OTP.
 */
router.post("/send-otp", sendOTP);

/**
 * @openapi
 * /api/create-order:
 *   post:
 *     tags: [Special Services]
 *     summary: Process a payment order
 *     description: Create a payment order for purchasing a product.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaymentOrder'
 *     responses:
 *       201:
 *         description: Order created successfully.
 *       400:
 *         description: Error creating order.
 */
router.post("/create-order", Payment);

/**
 * @openapi
 * /api/ad/bought:
 *   post:
 *     tags: [Special Services]
 *     summary: Record a bought advertisement
 *     description: Mark an advertisement as bought, updating its status in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Advertisement marked as bought successfully.
 *       404:
 *         description: Advertisement not found.
 */
router.post("/ad/bought", boughtAdAPI);

// Including other routers
router.use(productRouter);
router.use(userRouter);
router.use(adminRouter);
router.use(adRouter);

export default router;
