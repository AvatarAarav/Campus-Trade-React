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
      res.status(200).json({ user: userData });
    } else {
      res.json({ user: undefined });
    }
  } catch (error) {
    console.error(`${error.message}!!`);
    res.json({ user: undefined });
  }
};
