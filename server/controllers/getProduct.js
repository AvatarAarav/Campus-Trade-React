import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const getProductAPI=async (req,res)=>{
    try {
        const email=req.params.eid;
        const id=req.params.id;  //url parameters id
        const userData=await Users.find({email:email})
        const product=await Products.findById(id)
        res.status(200).render('ad_details',{ad:product,user:userData[0]});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}