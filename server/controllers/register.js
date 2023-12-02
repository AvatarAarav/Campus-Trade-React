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
        const existingotp = await OTP.findOne({ email })

        if (existingotp) {
            if ( req.body.otp != existingotp.otpNumber) {
                return res.status(400).json({ error: 'invalid otp' });
            }
        }
        else {
            return res.status(400).json({ error: 'invalid otp' });
        }


        const { otp, ...userData } = req.body;
        const userDat = await Users(userData)
        userDat.save()
            .then(() => {
                console.log(":success")
                res.status(200)
                res.json({id:userDat.id});
            })
            .catch(() => {
                console.log("failed")
            })

    } catch (error) {
        console.error(`${error.message}!!`)
        
    }
}