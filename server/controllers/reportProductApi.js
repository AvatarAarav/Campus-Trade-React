import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
import Admins from "../db/Models/Admins.js";
export const reportProductApi=async (req,res)=>{
    try {
        const uid=req.params.uid;
        const id=req.params.id;  //url parameters id
        const userData=await Users.findById(uid)
        const product=await Products.findById(id)
        // const admin = await Admins.findOne();
        product.report=product.report+1;
        userData.report.unshift(product._id);
        product.report.unshift(uid);
        if(product.report.length == 0)
        {
            await Admins.updateMany({}, { $inc: { reportedAds: 1 } });

        }
        await userData.save()
        await product.save()
        res.status(200).json({ad:product,user:userData});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}