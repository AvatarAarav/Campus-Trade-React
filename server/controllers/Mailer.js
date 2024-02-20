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
            <h2>Receipt for Your Purchase</h2>
            <p>Hello ${buyerDetails.name},</p>
            <p>Thank you for your purchase!</p>
            <p>Here are the details:</p>
            <ul>
                <li><strong>Product Name:</strong> ${productDetails.name}</li>
                <li><strong>Description:</strong> ${productDetails.description}</li>
                <li><strong>Price:</strong> ₹${productDetails.price}</li>
                <li><strong>Seller:</strong> ${productDetails.sellerMail}</li>
            </ul>
            <p>If you have any questions or concerns, feel free to contact us.</p>
            <p>Regards,<br/>The CampusTrade Team</p>
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
