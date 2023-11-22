import Users from "../db/Models/User.js";
import Admins from "../db/Models/Admins.js";
import Products from "../db/Models/Products.js";
export const checkLoginAPI = async (req, res) => {
  console.log("login api requested. request body: ", req.body);
  try {
    if (req.body.admin) {
      const adminData = await Admins.find({ email: req.body.email });
      const activeUser = await Users.count();
      const productsCount = await Products.count();
      const reported = await Products.find({ report: { $ne: 0 } }).count();
      console.log(adminData);
      if (adminData.length === 0) return;
      if (adminData[0].password == req.body.password) {
        const data = {
          activeUser: activeUser,
          productsCount: productsCount,
          reported: reported,
          ...adminData[0]._doc,
        };
        console.log(data);
        // res.json(data);
        // res.status(200).render('adminPortal',{user :data});
      } else {
        // res.render('index',{user : undefined});
      }
    } else {
      const userData = await Users.find({ email: req.body.email });
      if (userData.length === 0) return;
      if (userData[0].password == req.body.password) {
        console.log({ user: userData[0] });
        res.status(200).json(userData[0]);
        // res.status(200).render('index',{user :userData[0]});
      } else {
        // res.render('index',{user : undefined});
      }
    }
    // console.log(`user=${userData}`)
  } catch (error) {
    console.error(`${error.message}!!`);
    //Not returning error but rendering the same page with no change
    // res.render('index',{user : undefined});
  }
};
