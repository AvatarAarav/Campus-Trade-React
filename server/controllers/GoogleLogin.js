import Users from "../db/Models/User.js";
export const GoogleLoginAPI = async (req, res) => {
    const email = req.body.email
    
    const userData = await Users.findOne({ email: email });
    if (userData) {
      if (userData.password == req.body.sub) {
        res.status(200).json({id:userData[0]._id});
      } else {
        res.status(200).json({id:-1});
      }
    }
    else{
        const newUser={
            name:req.body.name,
            email:req.body.email,
            password:req.body.sub,
        }
        const userDat = await Users(newUser)
        userDat.save()
            .then((data) => {
                res.status(200)
                res.json({id:userDat.id});
            })
            .catch(() => {
                console.log("failed")
            })
    }
};
