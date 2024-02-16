import Admins from "../db/Models/Admins.js"
export const getAdminData=async (req,res)=>{
    try {
        const adminData=await Admins.findById(req.body.adminId)
        delete adminData.password
        res.status(200).json(adminData)
    } catch (error) {
        console.error(`${error.message}!!`)
    }
}