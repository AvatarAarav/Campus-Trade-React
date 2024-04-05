import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";

export const del_ad_adminAPI = async (req, res) => {
    try {
        const id = req.body.id;  // url parameters id

        // Find the product
        const pdata = await Products.findOne({ _id: id });

        if (!pdata) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Delete the product
        await Products.deleteOne({ _id: id });

        res.status(200).json({ message: "product deleted" });
    } catch (error) {
        console.error(`${error.message}!!`);
        res.status(500).json({ message: "Internal server error" });
    }
};
