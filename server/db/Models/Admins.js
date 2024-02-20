import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        college:String,
        password: String,
        soldOut:{type:Number,default:0},
        activity:{
            labels:{type:Array,default: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05']},
            values:{type:Array,default:[5, 8, 12, 6, 10]},
        },
        reportedAds:{type:Number,default:0}
    }
);

const Admins = mongoose.model("Admins", AdminSchema);

export default Admins;
