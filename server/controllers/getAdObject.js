import Products from "../db/Models/Products.js";
export const getAdObjectAPI=async (req,res)=>{
    try {
        const id=req.params.id;
        const product=await Products.findById(id)
        res.status(200).json({ad:product});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}