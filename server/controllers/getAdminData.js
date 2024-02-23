import Products from '../db/Models/Products.js'
import Admins from "../db/Models/Admins.js"
import Users from '../db/Models/User.js'
export const getAdminData = async (req, res) => {
    try {
        const data = await Admins.findById(req.body.adminId)
        const adminData={_id:data._id,name:data.name,activity:data.activity,email:data.email,reportedAds:data.reportedAds,soldOut:data.soldOut,college:data.college}
        
        if(data.college=="-"){
            adminData['userCount'] = await Users.count({});
            adminData['prodCount'] = await Products.count();
        }
        else{
            adminData['userCount'] = await Users.count({college:data.college});
            adminData['prodCount'] = 3
        }
        // Calculate the sum of product prices
        const priceSum = await Products.aggregate([
            { $group: { _id: null, totalPrice: { $sum: "$price" } } }
        ]);

        // Add the sum of product prices to the adminData object
        adminData['revenue'] = priceSum[0] ? priceSum[0].totalPrice : 0;
        console.log(adminData)
        res.status(200).json(adminData)
    } catch (error) {
        console.error(`${error.message}!!`)
    }
}