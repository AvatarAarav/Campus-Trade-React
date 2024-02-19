import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";

export const DelUserAPI = async (req, res) => {
    try {
        const uid = req.body.id; // url parameters id

   
        await Products.deleteMany({ id :  uid});

        const udata = await Users.findOne({ _id: uid });

        if (!udata) {
            return res.status(404).json({ message: "User not found" });
        }

        
    
        await Users.deleteOne({ _id: uid });

        console.log("user deleted")
        res.status(200).json({ message: "User and associated ads deleted successfully" });
        
    } catch (error) {
        console.error(`${error.message}!!`);
        res.status(500).json({ message: "Internal server error" });
    }
};
