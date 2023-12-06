import Products from "../db/Models/Products.js";
import fs from 'fs'
import Users from "../db/Models/User.js";

export const updateFormAPI=async (req,res)=>{
    try {
      
        const productId = req.body.id; // assuming you have an input field for productId in your form
        const Updating_product = await Products.findById(productId);
       
        if (!Updating_product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        Updating_product.name = req.body.name;
        // Updating_product.type = req.body.type;
        Updating_product.description = req.body.description;
        Updating_product.price = req.body.price;
        Updating_product.age = req.body.age;
        Updating_product.tags = req.body.tags
        Updating_product.features = req.body.features
        Updating_product.subtitle = req.body.subname
     
        await Updating_product.save();
        // const udata = await Users.find({ email: req.params.email });

        res.status(200).json( { user: udata[0] });
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(500).json({ message: 'Internal server error' });
    }
}
