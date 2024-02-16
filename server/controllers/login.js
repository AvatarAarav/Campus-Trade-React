import Users from "../db/Models/User.js";
import Admins from "../db/Models/Admins.js";
import Products from "../db/Models/Products.js";
export const checkLoginAPI = async (req, res) => {
  try {
    if (req.body.admin) {
      const adminData = await Admins.find({ email: req.body.email });
      if (adminData.length === 0)  {
        res.status(200).json({id:-1});
        return
      }
      if (adminData[0].password == req.body.password) {
        res.status(200).json({id:adminData[0]._id});
      } else {
        res.status(200).json({id:-1});
      }
    } else {
      const userData = await Users.find({ email: req.body.email });
      if (userData.length === 0) {
        res.status(200).json({id:-1});
        return;
      }
      if (userData[0].password == req.body.password) {
        res.status(200).json({id:userData[0]._id});
      } else {
        res.status(200).json({id:-1});
      }
    }
    // console.log(`user=${userData}`)
  } catch (error) {
    console.error(`${error.message}!!`);
    res.status(200).json({id:-1});
  }
};
