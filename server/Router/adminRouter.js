import express from "express";
import { getAdminData } from "../controllers/getAdminData.js";
import { getAllUsersAPI } from "../controllers/getAllUsers.js";
import { getAdminProductAPI } from "../controllers/AdminProduct.js";
import { getAdminUserAPI } from "../controllers/getAdminUser.js";
import { getallreportAPI } from "../controllers/getAllReport.js";
import { deleteAdminuserAPI } from "../controllers/deleteAdminuser.js";
import { del_ad_adminAPI } from "../controllers/delete_ad_admin.js";
import { DelUserAPI } from "../controllers/del_user_admin.js";
import { sendAnnouncement } from "../controllers/Mailer.js";
import { getadadmindetailAPI } from "../controllers/getadadmindetail.js";

const router = express.Router();

/**
 * @openapi
 * /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Access admin data
 *     description: Fetch administrative data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin data retrieved successfully.
 */
router.post("/admin", getAdminData);

/**
 * @openapi
 * /api/allusers/{college}:
 *   get:
 *     tags: [Admin]
 *     summary: List all users by college
 *     description: Fetch a list of all users associated with a specific college.
 *     parameters:
 *       - in: path
 *         name: college
 *         required: true
 *         description: College identifier to fetch users for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 */
router.get("/allusers/:college", getAllUsersAPI);

/**
 * @openapi
 * /api/admin_product:
 *   get:
 *     tags: [Admin]
 *     summary: Get admin product data
 *     description: Fetch data about products managed by admin.
 *     responses:
 *       200:
 *         description: Product data retrieved successfully.
 */
router.get("/admin_product", getAdminProductAPI);

/**
 * @openapi
 * /api/search_admin_user:
 *   get:
 *     tags: [Admin]
 *     summary: Search for an admin user
 *     description: Perform a search for an administrative user by criteria.
 *     responses:
 *       200:
 *         description: Admin user found successfully.
 */
router.get("/search_admin_user", getAdminUserAPI);

/**
 * @openapi
 * /api/admin/getReported/{college}:
 *   get:
 *     tags: [Admin]
 *     summary: Get reported issues by college
 *     description: Retrieve reported issues and items for a specific college.
 *     parameters:
 *       - in: path
 *         name: college
 *         required: true
 *         description: College identifier for which to retrieve reports.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reported issues retrieved successfully.
 */
router.get("/admin/getReported/:college", getallreportAPI);

/**
 * @openapi
 * /api/admin/{email}/deleteuser/{aid}:
 *   get:
 *     tags: [Admin]
 *     summary: Delete a user by admin
 *     description: Allows an admin to delete a user account by specifying the user's email and admin ID.
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: User email to delete.
 *         schema:
 *           type: string
 *       - in: path
 *         name: aid
 *         required: true
 *         description: Admin ID performing the deletion.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 */
router.get("/admin/:email/deleteuser/:aid", deleteAdminuserAPI);

/**
 * @openapi
 * /api/admin/delete/ad:
 *   post:
 *     tags: [Admin]
 *     summary: Delete an advertisement by admin
 *     description: Admin functionality to delete an advertisement.
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
 *         description: Advertisement deleted successfully.
 */
router.post("/admin/delete/ad", del_ad_adminAPI);

/**
 * @openapi
 * /api/admin/delete/user:
 *   post:
 *     tags: [Admin]
 *     summary: Delete a user by admin
 *     description: Allows an admin to delete a user account.
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
 *         description: User account deleted successfully.
 */
router.post("/admin/delete/user", DelUserAPI);

/**
 * @openapi
 * /api/admin/announcement:
 *   post:
 *     tags: [Admin]
 *     summary: Send an announcement
 *     description: Send an announcement to all users or a specific group.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Announcement sent successfully.
 */
router.post("/admin/announcement", sendAnnouncement);

/**
 * @openapi
 * /api/admin_ads/{id}/admin/{aid}:
 *   get:
 *     tags: [Admin]
 *     summary: Get advertisement details for admin
 *     description: Retrieve detailed information about an advertisement for administrative purposes by ad and admin ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Advertisement ID.
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
 *         description: Advertisement details retrieved successfully.
 */
router.get("/admin_ads/:id/admin/:aid", getadadmindetailAPI);

export default router;
