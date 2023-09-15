import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema(
    {
        name: String,
        type: String,
        description: String,
        email: String,
        age: String,
        price: Number,
        img_type: String,
        chats:[{
            from:String,message:String
        }],
        report:{type:Number,default:0},
        img_content: { type: Buffer, contentType: String },
    }
);

const Products = mongoose.model("Products", ProductSchema);

export default Products;
