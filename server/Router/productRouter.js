import express from "express";
import { getAllProductsAPI } from "../controllers/getAllProducts.js";
import { getProductAPI } from "../controllers/getProduct.js";
import { whishListProductApi } from "../controllers/whishListProductApi.js";
import { reportProductApi } from "../controllers/reportProductApi.js";
import { removeProductApi } from "../controllers/removeProduct.js";
import { delProductAPI } from "../controllers/deleteAd.js";

const router = express.Router();

/**
 * @openapi
 * /api/products/{college}:
 *   get:
 *     tags: [Product]
 *     summary: Returns a list of all products for a specific college
 *     description: Retrieve a wide array of products available in a specific college campus.
 *     parameters:
 *       - in: path
 *         name: college
 *         required: true
 *         description: College identifier to fetch products for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: No products found for the college.
 */
router.get("/products/:college", getAllProductsAPI);

/**
 * @openapi
 * /api/ad/{id}/{uid}:
 *   get:
 *     tags: [Product]
 *     summary: Returns details of a specific product
 *     description: Retrieve details of a product including seller information by ID and user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID.
 *         schema:
 *           type: string
 *       - in: path
 *         name: uid
 *         required: true
 *         description: User ID of the product owner.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed product information.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 */
router.get("/ad/:id/:uid", getProductAPI);

/**
 * @openapi
 * /api/ad/buy/{id}/uid/{uid}:
 *   get:
 *     tags: [Product]
 *     summary: Adds a product to the user's wishlist
 *     description: Add a specified product to the wishlist of the user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID to add to wishlist.
 *         schema:
 *           type: string
 *       - in: path
 *         name: uid
 *         required: true
 *         description: User ID who is adding the product to the wishlist.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product added to wishlist successfully.
 *       404:
 *         description: Product not found.
 */
router.get("/ad/buy/:id/uid/:uid", whishListProductApi);

/**
 * @openapi
 * /api/ad/report/{id}/uid/{uid}:
 *   get:
 *     tags: [Product]
 *     summary: Reports a product as inappropriate
 *     description: Mark a product as inappropriate or report it for review by providing product ID and user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID to report.
 *         schema:
 *           type: string
 *       - in: path
 *         name: uid
 *         required: true
 *         description: User ID reporting the product.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product reported successfully.
 *       404:
 *         description: Product not found.
 */
router.get("/ad/report/:id/uid/:uid", reportProductApi);

/**
 * @openapi
 * /api/ad/remove/{id}/uid/{uid}:
 *   get:
 *     tags: [Product]
 *     summary: Removes a product from the user's list
 *     description: Remove a specified product from the user's list by ID and user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID to remove.
 *         schema:
 *           type: string
 *       - in: path
 *         name: uid
 *         required: true
 *         description: User ID who is removing the product.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product removed successfully.
 *       404:
 *         description: Product not found.
 */
router.get("/ad/remove/:id/uid/:uid", removeProductApi);

/**
 * @openapi
 * /api/ad/delete/{id}/mail/{eid}:
 *   get:
 *     tags: [Product]
 *     summary: Deletes a product advertisement
 *     description: Delete a product advertisement by product ID and email ID of the advertiser.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID of the advertisement to delete.
 *         schema:
 *           type: string
 *       - in: path
 *         name: eid
 *         required: true
 *         description: Email ID of the advertiser.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Advertisement deleted successfully.
 *       404:
 *         description: Advertisement not found.
 */
router.get("/ad/delete/:id/mail/:eid", delProductAPI);

export default router;
