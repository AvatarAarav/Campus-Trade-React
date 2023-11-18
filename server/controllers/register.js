
import Users from "../db/Models/User.js";
export const addUserAPI=async (req,res)=>{
    try {
        const userData= await Users(req.body)
        // console.log("User Added")
        userData.save()
            .then(()=>{
                res.status(200).render('index',{user :userData});
            })
            .catch(()=>{
                res.render(`index`,{user : undefined})
            })
        
    } catch (error) {
        console.error(`${error.message}!!`)
        res.render(`index`,{user : undefined})
    }
}