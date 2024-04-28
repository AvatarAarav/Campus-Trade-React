import express from "express";
import { addUserAPI } from "../controllers/register.js";
import { checkLoginAPI } from "../controllers/login.js";
import { getUserData } from "../controllers/getUserData.js";
import { getUserCardsAPI } from "../controllers/getUserCards.js";
import { ProfileUpdateAPI } from "../controllers/ProfileUpdate.js";
import { ChangeProfileAPI } from "../controllers/ChangeProfile.js";
import { GoogleLoginAPI } from "../controllers/GoogleLogin.js";
import { getuserdetailAPI } from "../controllers/getuserdetail.js";
import { getAllUsersEmailAPI } from "../controllers/getAllUsersEmail.js";

const router = express.Router();

/**
 * @openapi
 * /user/register:
 *   post:
 *     tags: [User]
 *     summary: Register a new user
 *     description: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Error in registration data.
 */
router.post("/user/register", addUserAPI);

/**
 * @openapi
 * /user/login:
 *   post:
 *     tags: [User]
 *     summary: User login
 *     description: Log in a user by verifying their credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCredentials'
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *       401:
 *         description: Invalid credentials.
 */
router.post("/user/login", checkLoginAPI);

/**
 * @openapi
 * /user/allEmail:
 *   get:
 *     tags: [User]
 *     summary: Retrieve all user emails
 *     description: Fetch a list of all registered user emails.
 *     responses:
 *       200:
 *         description: List of user emails.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get("/user/allEmail", getAllUsersEmailAPI);

/**
 * @openapi
 * /user:
 *   post:
 *     tags: [User]
 *     summary: Get user data
 *     description: Retrieve data for the logged-in user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User data retrieved successfully.
 */
router.post("/user", getUserData);

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get user cards
 *     description: Retrieve the cards information of a specific user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User cards retrieved successfully.
 *       404:
 *         description: User not found.
 */
router.get("/user/:id", getUserCardsAPI);

/**
 * @openapi
 * /user/UpdateProfile:
 *   post:
 *     tags: [User]
 *     summary: Update user profile
 *     description: Update the profile information for the logged-in user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserProfile'
 *     responses:
 *       200:
 *         description: Profile updated successfully.
 */
router.post("/user/UpdateProfile", ProfileUpdateAPI);

/**
 * @openapi
 * /user/changeProfile:
 *   post:
 *     tags: [User]
 *     summary: Change user profile
 *     description: Change profile details of the logged-in user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserProfile'
 *     responses:
 *       200:
 *         description: Profile changed successfully.
 */
router.post("/user/changeProfile", ChangeProfileAPI);

/**
 * @openapi
 * /user/google:
 *   post:
 *     tags: [User]
 *     summary: Google login
 *     description: Login or register a user using their Google account credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Google login successful.
 */
router.post("/user/google", GoogleLoginAPI);

/**
 * @openapi
 * /user/adminlink/{id}/admin/{aid}:
 *   get:
 *     tags: [User]
 *     summary: Get detailed user information
 *     description: Retrieve detailed information about a user for administrative purposes.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID.
 *         schema:
 *           type: string
 *       - in: path
 *         name: aid
 *         required: true
 *         description: Admin ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed user information retrieved successfully.
 *       404:
 *         description: User not found.
 */
router.get("/user/adminlink/:id/admin/:aid", getuserdetailAPI);

export default router;
