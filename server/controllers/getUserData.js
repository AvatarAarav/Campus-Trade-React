import Users from "../db/Models/User.js"
export const getUserData=async (req,res)=>{
    try {
        const userData=await Users.findById(req.body.userId)
        res.status(200).json(userData)
    } catch (error) {
        console.error(`${error.message}!!`)
    }
}