import Products from "../db/Models/Products.js";
import Users  from "../db/Models/User.js";
export const getUpdateAdAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        const product=await Products.findById(id)
        const userData=await Users.find({email:req.params.email})
        // console.log(product)
        res.status(200).render('Update_ad',{ad:product,user :userData[0]});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}