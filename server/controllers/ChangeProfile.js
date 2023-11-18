import Users from "../db/Models/User.js";

export const ChangeProfileAPI = async (req, res) => {
  
  try {
   
    const userId = req.body.userId;
    const updateData = req.body;

    const userData = await Users.findOneAndUpdate(
      { _id: userId },
      updateData,
      { new: true }
    );
   
    if (userData) {
      res.status(200).render('USER_PROFILE', { user: userData });
    } else {
      res.render('index', { user: undefined });
    }
  } catch (error) {
    console.error(`${error.message}!!`);
    res.render('index', { user: undefined });
  }
};
