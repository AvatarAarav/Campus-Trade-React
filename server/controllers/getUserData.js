import Users from "../db/Models/User.js"
export const getUserData=async (req,res)=>{
    try {
        console.log(req.body)
        const userData=await Users.findById(req.body.userId)
        console.log(userData)
        res.status(200).json(userData)
    } catch (error) {
        console.error(`${error.message}!!`)
    }
}