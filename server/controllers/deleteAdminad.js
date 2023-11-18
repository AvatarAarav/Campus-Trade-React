import Products from "../db/Models/Products.js";
import Admins from "../db/Models/Admins.js";
export const deleteAdminadAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        const aid = req.params.aid;
        await Products.deleteOne({_id:id})
        const admindata =await Admins.findOne({_id: aid})
        res.status(200).render('adminPortal',{user:admindata})
    } catch (error) {
        console.error(`${error.message}!!`)
        res.render('index',{user : undefined});
    }
}