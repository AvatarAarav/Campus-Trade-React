import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const getProductAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        const uid=req.params.uid;
        const product=await Products.findById(id)
        if (!product.views.includes(uid) && uid!="-") {
            product.views.push(uid);
        }
        res.status(200).json(product)
    } catch (error) {
        console.error(`${error.message}!!`)
        // res.status(404).send(`${error.message}!!`)
    }
}