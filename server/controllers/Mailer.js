import nodemailer from 'nodemailer';
import OTP from '../db/Models/OTP.js';
import Products from '../db/Models/Products.js';
import Users from '../db/Models/User.js';

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

export async function sendReceipt(productId, buyerId) {
    try {
        // Fetch product details
        const productDetails = await Products.findById(productId);
        if (!productDetails) {
            throw new Error('Product not found');
        }

        // Fetch buyer's details
        const buyerDetails = await Users.findById(buyerId);
        if (!buyerDetails) {
            throw new Error('Buyer not found');
        }

        // Create HTML content for the email
        const htmlContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="background-color: #ffffff; border-radius: 10px; padding: 20px;">
                <h2 style="color: #333333; margin-bottom: 20px;">Receipt for Your Purchase</h2>
                <p style="color: #555555; font-size: 16px;">Hello ${buyerDetails.name},</p>
                <p style="color: #555555; font-size: 16px;">Thank you for your purchase!</p>
                <div style="margin-top: 20px;">
                    <p style="color: #555555; font-size: 16px;"><strong>Product Name:</strong> ${productDetails.name}</p>
                    <p style="color: #555555; font-size: 16px;"><strong>Description:</strong> ${productDetails.description}</p>
                    <p style="color: #555555; font-size: 16px;"><strong>Price:</strong> ₹${productDetails.price}</p>
                    <p style="color: #555555; font-size: 16px;"><strong>Seller:</strong> ${productDetails.sellerMail}</p>
                </div>
                <p style="color: #555555; font-size: 16px;">If you have any questions or concerns, feel free to contact us.</p>
                <p style="color: #555555; font-size: 16px;">Regards,<br/>The CampusTrade Team</p>
            </div>
        </div>
    `;

        // Send email with HTML content
        const info = await transporter.sendMail({
            from: '"CampusTrade" <aaravtest97@gmail.com>',
            to: buyerDetails.email,
            subject: "Purchase Receipt",
            html: htmlContent
        });

        console.log('Receipt sent:', info);
        return true;
    } catch (error) {
        console.error('Error sending receipt:', error);
        return false;
    }
}

export async function sendAnnouncement(req,res) {
    try {

        const subject=req.body.subject;
        const message=req.body.message;
        // Fetch all users
        const allUsers = await Users.find();
        
        // Extract email addresses
        const userEmails = allUsers.map(user => user.email);
        
        // Create HTML content for the announcement
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                <div style="background-color: #ffffff; border-radius: 10px; padding: 20px;">
                    <h2 style="color: #333333; margin-bottom: 20px;">${subject}</h2>
                    <p style="color: #555555; font-size: 16px;">${message}</p>
                    <p style="color: #555555; font-size: 16px;">If you have any questions or concerns, feel free to contact us.</p>
                    <p style="color: #555555; font-size: 16px;">Regards,<br/>The CampusTrade Team</p>
                </div>
            </div>
        `;

        // Send announcement email to all users
        const info = await transporter.sendMail({
            from: '"CampusTrade" <aaravtest97@gmail.com>',
            to: userEmails.join(', '), // Join all emails with a comma
            subject: subject,
            html: htmlContent
        });

        console.log('Announcement sent:', info);
        return true;
    } catch (error) {
        console.error('Error sending announcement:', error);
        return false;
    }
}
