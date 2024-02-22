import Users from "../db/Models/User.js"
import Products from "../db/Models/Products.js"
import Admins from "../db/Models/Admins.js"


// Define middleware function to update activity value for today's label
const updateActivity = async () => {
    try {
        const today = new Date().toISOString().split('T')[0];
        const admin = await Admins.find({college:'-'})
        for(let i=0;i<admin.length;i++){
            admin[i].activity.values[admin[i].activity.values.length-1]++;
            await admin[i].save()
        }

    } catch (error) {
        // Handle error
        console.error("Error updating activity value:", error);
    }
};




export const getUserData=async (req,res)=>{
    try {
        updateActivity()
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