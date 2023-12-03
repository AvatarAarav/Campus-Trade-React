import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const getUserCardsAPI=async (req,res)=>{
    try {
        const products1=await Products.find({id: req.params.id})
        const buyingAds=await Users.findById(req.params.id)
        console.log(products1.length)
        console.log(buyingAds)
        const products2=await Products.find({_id:{$in:buyingAds.ads}})
        res.status(200).json({sellAds:products1,buyAds:products2});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}