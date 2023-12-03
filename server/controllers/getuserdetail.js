import Users from "../db/Models/User.js"
import Admins from "../db/Models/Admins.js"
export const getuserdetailAPI=async (req,res)=>{
    try {
        const userData=await Users.findById(req.params.id)
      const admindata = await Admins.findById(req.params.aid)
        res.status(200).json({user:userData,admin:admindata})
    } catch (error) {
       
        console.error(`${error.message}!!`)
        //Not returning error but rendaering the same page with no change
        res.json({user : undefined});
    }
}
