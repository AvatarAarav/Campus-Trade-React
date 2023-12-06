import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type:String,
            unique:true
        },
        password: String,
        college_name: String,
        ads:[String],
        report:[String],
        year: Number,
        branch:String
    }
);

const Users = mongoose.model("Users", UserSchema);

export default Users;
