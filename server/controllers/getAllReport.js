// import Products from "../db/Models/Products";
import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";

export const getallreportAPI = async (req, res) => {
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

        const allProducts = await Products.find(query); 
        
      
        const pr = allProducts.filter(product => product.report.length >= 1);
        const formattedProducts = pr.map(product => ({
            name: product.name,
            id: product._id, //id is of the product
            reportCount: product.report.length,
            image_id: product.img_id.length > 0 ? product.img_id[0] : null 
        }));
        formattedProducts.sort((a, b) => b.reportCount - a.reportCount);

        res.status(200).json({reports : formattedProducts}); // Send the filtered products as JSON response
    } catch (error) {
        console.error(`${error.message}!!`);
        res.status(404).send(`${error.message}!!`);
    }
}
