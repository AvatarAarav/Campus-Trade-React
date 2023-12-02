import OTP from "../db/Models/OTP.js";
import Users from "../db/Models/User.js";
export const addUserAPI = async (req, res) => {
    try {
        // const { name, collegename, email, password,otp } = req.body;

        // const userData= await Users(req.body)
        const email = req.body.email

        const existingUser = await Users.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const otpp = req.body.otp

        const existingotp = await OTP.findOne({ otpNumber: otpp })

        if (existingotp) {
            if (email !== existingotp.email) {
                return res.status(400).json({ error: 'invalid otp' });
            }
        }
        else {
            return res.status(400).json({ error: 'invalid otp' });
        }


        // console.log("User Added")
        const { otp, ...userData } = req.body;
        const userDat = await Users(userData)
        userDat.save()
            .then(() => {
                console.log(":success")
                // res.status(200).render('index',{user :userData});
                res.status(200)
                console.log(userDat)
            })
            .catch(() => {
                console.log("failed")
                // res.render(`index`,{user : undefined})
            })

    } catch (error) {
        console.error(`${error.message}!!`)
        
    }
}