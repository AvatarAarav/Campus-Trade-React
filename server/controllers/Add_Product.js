import Products from "../db/Models/Products.js";
import fs from 'fs'
import Users from "../db/Models/User.js";
export const submitForm=async (req,res)=>{
    try {
        // console.log(req.body)
        const photo = req.file;
        const newProduct=await Products({...req.body,img_type:photo.mimetype,img_content:fs.readFileSync(photo.path)})
        const udata=await Users.find({email:req.body.email})
        newProduct.save()
            .then(()=>{
                res.status(200).render('index',{user :udata[0]});
            })
            .catch(()=>{
                res.render('index',{user : undefined});
                }
            )
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
    
    
}