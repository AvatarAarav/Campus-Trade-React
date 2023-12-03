import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema(
    {
        name: String,
        type: String,
        description: String,
        id: String,
        age: String,
        price: Number,
       subname : String,
        tags : [String],
        features : [String],
        views : {type: Number,default:0 },
        likes : {type: Number,default:0 },
        chats:[{
            from:String,message:String
        }],
        report:{type:Number,default:0},
       img_id : [String]
    }
);

const Products = mongoose.model("Products", ProductSchema);

export default Products;
