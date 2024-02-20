// import Products from "../db/Models/Products";
import Products from "../db/Models/Products.js";
// import Products from "../db/Models/Products";

export const getallreportAPI = async (req, res) => {
    try {
    
        const allProducts = await Products.find({}); 
        
      
        const pr = allProducts.filter(product => product.report.length >= 1);
        const formattedProducts = pr.map(product => ({
            name: product.name,
            id: product.id, //id is of the product
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
