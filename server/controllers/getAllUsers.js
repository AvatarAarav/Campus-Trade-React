import User from "../db/Models/User.js";
export const getAllUsersAPI=async (req,res)=>{
    try {
        const page=req?.params?.page || 1;
        const LIMIT=6;
        const startIndex=(Number(page)-1)*LIMIT
        const total=await User.countDocuments({})
      
        const user=await User.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
        res.status(200).json({data:user,currentPage:Number(page),numberOfPage:Math.ceil(total/LIMIT)});//sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}