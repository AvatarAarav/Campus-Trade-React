import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";

export const DelUserAPI = async (req, res) => {
    try {
        const id = req.body.id; // url parameters id

        // Find the user
        const udata = await Users.findOne({ _id: id });

        if (!udata) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete each ad associated with the user
        for (const adId of udata.ads) {
            await Products.deleteOne({ id: adId });
        }

        // Delete the user
        await Users.deleteOne({ _id: id });

        res.status(200).json({ message: "User and associated ads deleted successfully" });
    } catch (error) {
        console.error(`${error.message}!!`);
        res.status(500).json({ message: "Internal server error" });
    }
};
