import Users from "../db/Models/User.js";

export const getAdFormAPI=async (req,res)=>{
    try {
        // console.log(req.body)
        const userData=await Users.find({email:req.body.email})
        // console.log(`user=${userData}`)
        res.status(200).render('product_form',{user :userData[0]});
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
}