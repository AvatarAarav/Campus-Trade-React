import Users from "../db/Models/User.js";
import Products from "../db/Models/Products.js";

export const UnWhisListAPI=async (req,res)=>{
    try {
        const uid=req.params.uid;
        const id=req.params.id;  //url parameters id
        const userData=await Users.findById(uid)
        const product=await Products.findById(id)
        let index = userData.ads.indexOf(id);
        if (index > -1) { // only splice array when item is found
            userData.ads.splice(index, 1); // 2nd parameter means remove one item only
        }
        index=product.likes.indexOf(uid)
        if (index > -1) { // only splice array when item is found
            product.likes.splice(index, 1); // 2nd parameter means remove one item only
        }
        await userData.save()
        await product.save()
        // console.log(userData.ads)
        res.status(200).json({ad:product,user:userData});


res.status(200)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).json(`${error.message}!!`)
    }
}