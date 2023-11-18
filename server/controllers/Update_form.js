import Products from "../db/Models/Products.js";
import fs from 'fs'
import Users from "../db/Models/User.js";

export const updateFormAPI=async (req,res)=>{
    try {
        const photo = req.file;
        const productId = req.params.id; // assuming you have an input field for productId in your form
        const Updating_product = await Products.findById(productId);
       
        if (!Updating_product) {
            return res.status(404).render('error', { message: 'Product not found' });
        }
        Updating_product.name = req.body.name;
        Updating_product.type = req.body.type;
        Updating_product.description = req.body.description;
        Updating_product.price = req.body.price;
        Updating_product.age = req.body.age;
        if(photo){
        Updating_product.img_type = photo.mimetype;
        Updating_product.img_content = fs.readFileSync(photo.path);
        }
        await Updating_product.save();
        const udata = await Users.find({ email: req.params.email });

        res.status(200).render('USER_PROFILE', { user: udata[0] });
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(500).render('error', { message: 'Internal server error' });
    }
}
