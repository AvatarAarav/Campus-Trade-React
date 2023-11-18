import Users from "../db/Models/User.js";

export const ProfileUpdateAPI=async (req,res)=>{
    try {
       
        const userData=await Users.find({email:req.body.email})
      
        res.status(200).render('Update_profile',{user :userData[0]});
    } catch (error) {
        console.error(`${error.message}!!`)
       
        res.render('index',{user : undefined});
    }
}