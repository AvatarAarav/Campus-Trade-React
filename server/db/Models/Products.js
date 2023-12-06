import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema(
    {
        name: String,
        type: String,
        description: String,
        id: String,
        sellerMail:String,
        age: String,
        price: Number,
        subname : String,
        tags : [String],
        features : [String],
        views : {type: Number,default:1 },
        likes : {type: Number,default:1 },
        sold : {
            type:Boolean,
            default:false,
        },
        buyer : String,
        chats:[{
            author:{
                username:String,
                id:Number
            },
            text:String,
            type:String,
            timestamp:Number
        }],
        report:{type:Number,default:0},
        img_id : [String]
    }
);

const Products = mongoose.model("Products", ProductSchema);

export default Products;
