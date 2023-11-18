import Products from "../db/Models/Products.js";
import Admins from "../db/Models/Admins.js";
export const getadadmindetailAPI=async (req,res)=>{
    try {
      
        const admindata=await Admins.findById(req.params.aid)
        const product=await Products.findById(req.params.id)
        res.status(200).render('ad_control_admin',{ad:product,admin:admindata});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}