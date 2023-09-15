import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        soldOut:{type:Number,default:0},
        reportedAds:{type:Number,default:0}
    }
);

const Admins = mongoose.model("Admins", AdminSchema);

export default Admins;
