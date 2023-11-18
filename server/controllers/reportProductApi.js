import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const reportProductApi=async (req,res)=>{
    try {
        const uid=req.params.uid;
        const id=req.params.id;  //url parameters id
        const userData=await Users.findById(uid)
        const product=await Products.findById(id)
        product.report=product.report+1;
        userData.report.unshift(product._id);
        await userData.save()
        await product.save()
        res.status(200).render('ad_details',{ad:product,user:userData});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}