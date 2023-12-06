import Products from "../db/Models/Products.js";
import Users  from "../db/Models/User.js";
export const postAddChatAPI=async (req,res)=>{
    try {
        const pid=req.body.pid;  //url parameters id
        const uid = req.body.uid;
        const product=await Products.findById(pid)
        const user = await Users.findById(uid)
        // const userData=await Users.find({email:req.params.email})
        const tt= Date.now()
        product.chats.push({author: {
            username: user.name,
            id: user._id
        },
    text:req.body.text,type:req.body.type,timestamp:tt})
        await product.save();
        res.status(200).json({ad:product,user :userData[0]});

    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}