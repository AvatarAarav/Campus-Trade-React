import Users from "../db/Models/User.js"
import Products from "../db/Models/Products.js"
export const getUserData=async (req,res)=>{
    try {
        const userData=await Users.findById(req.body.userId)
        const adsPosted = await Products.countDocuments({id : req.body.userId})
        const adsBought = await Products.countDocuments({buyer : req.body.userId})

        const earnings = await Products.find({ id: req.body.userId,sold : true })
        .select('price')
        .then(products => products.reduce((total, product) => total + product.price, 0))
        .catch(error => {
            console.error('Error calculating earnings:', error.message);
            return 0;
        });
        const adsBoughtMoney = await Products.find({ buyer: req.body.userId })
            .select('price')
            .then(products => products.reduce((total, product) => total + product.price, 0))
            .catch(error => {
                console.error('Error calculating adsBoughtMoney:', error.message);
                return 0;
            });

// console.log(userData)
           
            // console.log(adsPosted);
            // console.log(adsBought);
            // console.log(earnings)
            // console.log(adsBoughtMoney)
// console.log("this is the ",userData)
const udata = {

    
        _id: userData._id,
       
        name: userData.name,
    email: userData.email,
    password: userData.password,
    college_name: userData.college_name,
    year: userData.year,
    branch: userData.branch,
    ads: userData.ads,
    report: userData.report,
   
    adsPosted: adsPosted,
    adsBought: adsBought,
    earnings: earnings,
    adsBoughtMoney: adsBoughtMoney

}
console.log(udata)
        res.status(200).json(udata)
    } catch (error) {
        console.error(`${error.message}!!`)
    }
}