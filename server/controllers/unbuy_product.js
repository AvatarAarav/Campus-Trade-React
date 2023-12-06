import Users from "../db/Models/User";
import Products from "../db/Models/Products";

export const UnbuyAPI=async (req,res)=>{
    try {
       const pid = req.body.id;
       const uid = req.body.uid;
const product  = await Products.findById(pid)
product.sold = false;
product.buyer = "";
await product.save()

res.status(200)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).json(`${error.message}!!`)
    }
}