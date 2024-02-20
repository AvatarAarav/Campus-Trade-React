import nodemailer from 'nodemailer';
import OTP from '../db/Models/OTP.js';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: "aaravtest97@gmail.com",
        pass: "emijehmazndnlmsg",
    },
});
// Generate OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
export async function sendOTP(req, res) {
    console.log(req.body)
    const { email } = req.body;
    const otp = generateOTP();
    try {
        const info = await transporter.sendMail({
            from: '"CampusTrade" <aaravtest97@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "OTP Verification", // Subject line
            text: "Hello, The following is your secret OTP :" + otp, // plain text body
        });
        const data=await OTP.findOneAndUpdate(
            { email },
            { email, otpNumber: otp },
            {
              new: true,
              upsert: true
            })
        res.status(200).send({ success: true, otp }); // Sending OTP back to the frontend for verification
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ success: false, error: 'Failed to send OTP' });
    }
}
export async function sendReceipt(){

}
