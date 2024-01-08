import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const buyProductApi=async (req,res)=>{
    try {
        const uid=req.params.uid;
        const id=req.params.id;  //url parameters id
        const userData=await Users.findById(uid)
        const product=await Products.findById(id)
        userData.ads.unshift(product._id);
        product.likes = product.likes + 1
        await userData.save()
        await product.save()
        // console.log(userData.ads)
        res.status(200).json({ad:product,user:userData});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).json(`${error.message}!!`)
    }
}