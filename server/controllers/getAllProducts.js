import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const getAllProductsAPI=async (req,res)=>{
    const college=req.params.college;
    try {

        let query = {};

        if (college && college !== "-") {
            // Find the users with the specified college name
            const usersWithCollege = await Users.find({ college_name: college });
            const userIds = usersWithCollege.map(user => user._id);
            
            // Query for products with userId in the list of userIds
            query = { id: { $in: userIds } };
        }


        const products=await Products.find(query).sort({_id:-1})
        res.status(200).json({data:products});//sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}