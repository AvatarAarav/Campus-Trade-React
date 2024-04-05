import Users from "../db/Models/User.js";

export const ProfileUpdateAPI=async (req,res)=>{
    try {
       
        const userData=await Users.findById(req.body.id)
      userData.branch = req.body.branch;
      userData.year = req.body.year;
      userData.name = req.body.name;
      userData.college_name = req.body.collegeName;
      userData.save()
    //   console.log(userData)
        res.status(200).json({user :userData[0]});
    } catch (error) {
        console.error(`${error.message}!!`)
       
        res.json({user : undefined});
    }
}