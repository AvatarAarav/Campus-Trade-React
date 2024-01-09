import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const reportadApi=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        // const userData=await Users.find({email:email})
        const product=await Products.findById(id)
        product.views = product.views + 1
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        console.error(`${error.message}!!`)
        // res.status(404).send(`${error.message}!!`)
    }
}