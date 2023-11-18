import Products from "../db/Models/Products.js";
import Users  from "../db/Models/User.js";
export const postAddChatAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        const product=await Products.findById(id)
        const userData=await Users.find({email:req.params.email})
        product.chats.push({from:req.params.email,message:req.body.message})
        await product.save();
        res.status(200).render('ad_details',{ad:product,user :userData[0]});

    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}