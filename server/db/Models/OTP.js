import mongoose from "mongoose";

const OTPschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    otpNumber: {
        type: Number,
        required: true,
    },
});

const OTP = mongoose.model('OTP', OTPschema);

export default OTP;