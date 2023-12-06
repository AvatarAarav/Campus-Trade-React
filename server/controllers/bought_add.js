import Users from "../db/Models/User.js";
import Products from "../db/Models/Products.js";

export const boughtAdAPI=async (req,res)=>{
    try {
       const pid = req.body.id;
       const uid = req.body.uid;
const product  = await Products.findById(pid)
product.sold = true;
product.buyer = uid;
await product.save()

res.status(200)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).json(`${error.message}!!`)
    }
}