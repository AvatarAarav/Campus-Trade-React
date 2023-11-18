import Products from "../db/Models/Products.js";
export const getAllProductsAPI=async (req,res)=>{
    try {
        const products=await Products.find().sort({_id:-1})
        res.status(200).json({data:products});//sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}