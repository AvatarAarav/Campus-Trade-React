import Users from "../db/Models/User.js";
export const getUserPage=async (req,res)=>{
    try {
        const userData=await Users.find({_id:req.params.userId})
        res.status(200).render('index',{user :userData[0]});
        
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
}