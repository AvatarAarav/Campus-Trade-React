import Products from "../db/Models/Products.js";
import Admins from "../db/Models/Admins.js";
import Users from "../db/Models/User.js";

export const deleteAdminuserAPI=async (req,res)=>{
    try {
        const email=req.params.email;  //url parameters id
        const aid = req.params.aid;
       
        const userData = await Users.findOne({email : email})
        const admindata = await Admins.findOne({_id : aid})
       const ads = await Products.find({email : email})
       
       ads.forEach(async ad =>{
await Products.deleteOne({_id : ad._id})
       })
        
       await Users.deleteOne({_id : userData._id})
    
        res.status(200).render('adminPortal',{user:admindata})
    } catch (error) {
        console.error(`${error.message}!!`)
        res.render('index',{user : undefined});
    }
} 