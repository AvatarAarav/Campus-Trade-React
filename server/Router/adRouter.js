import express from "express";
import { getAdFormAPI } from "../controllers/getAdForm.js";
import { getAdObjectAPI } from "../controllers/getAdObject.js";
import { getUpdateAdAPI } from "../controllers/getUpdateAd.js";
import { postAddChatAPI } from "../controllers/postAddChat.js";
import { getProductChatsAPI } from "../controllers/getProductChats.js";
import { UnWhisListAPI } from "../controllers/unWhishListproduct.js";

const router = express.Router();

/**
 * @openapi
 * /api/user/adCreate:
 *   post:
 *     tags: [Ad]
 *     summary: Create a new advertisement
 *     description: Submit a new advertisement form to create an ad.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Advertisement created successfully.
 *       400:
 *         description: Error in form submission.
 */
router.post("/user/adCreate", getAdFormAPI);

/**
 * @openapi
 * /api/adObject/{id}:
 *   get:
 *     tags: [Ad]
 *     summary: Retrieve an advertisement object
 *     description: Fetch an advertisement object by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Advertisement ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Advertisement object retrieved successfully.
 *       404:
 *         description: Advertisement not found.
 */
router.get("/adObject/:id", getAdObjectAPI);

/**
 * @openapi
 * /api/user/ad_update/{email}/mail/{id}:
 *   get:
 *     tags: [Ad]
 *     summary: Update an advertisement
 *     description: Update advertisement details based on the provided email and advertisement ID.
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email associated with the advertisement.
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: Advertisement ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Advertisement updated successfully.
 *       404:
 *         description: Advertisement not found.
 */
router.get("/user/ad_update/:email/mail/:id", getUpdateAdAPI);

/**
 * @openapi
 * /api/ad/chat/post:
 *   post:
 *     tags: [Ad]
 *     summary: Post a chat message in an advertisement
 *     description: Send a chat message related to a specific advertisement.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChatMessage'
 *     responses:
 *       201:
 *         description: Chat message posted successfully.
 *       400:
 *         description: Error posting chat message.
 */
router.post("/ad/chat/post", postAddChatAPI);

/**
 * @openapi
 * /api/ad/chat/{id}:
 *   get:
 *     tags: [Ad]
 *     summary: Get chat messages for an advertisement
 *     description: Retrieve all chat messages related to a specific advertisement ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Advertisement ID for which to retrieve chats.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chat messages retrieved successfully.
 *       404:
 *         description: No chat messages found.
 */
router.get("/ad/chat/:id", getProductChatsAPI);

/**
 * @openapi
 * /api/ad/unbuy/{id}/uid/{uid}:
 *   get:
 *     tags: [Ad]
 *     summary: Remove an advertisement from the wishlist
 *     description: Remove an ad from the user's wishlist by providing advertisement and user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Advertisement ID to remove from the wishlist.
 *         schema:
 *           type: string
 *       - in: path
 *         name: uid
 *         required: true
 *         description: User ID who wishes to remove the ad.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Advertisement removed from wishlist successfully.
 *       404:
 *         description: Advertisement not found.
 */
router.get("/ad/unbuy/:id/uid/:uid", UnWhisListAPI);

export default router;
