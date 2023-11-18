import Products from "../db/Models/Products.js";
export const getAdminProductAPI=async (req,res)=>{
    try {
        // console.log(req.query.search)

        const page=req?.params?.page || 1;
        const LIMIT=6;
        const startIndex=(Number(page)-1)*LIMIT
        const total=await Products.countDocuments({})
        // console.log(req.query.search)
        // const searchString = req.query.search.toString();
        // const searchString = req.query.search && req.query.search.search ? req.query.search.search.toString() : "";
        const searchString = req.query.search ? req.query.search.toString() : "";

console.log(searchString.toString())
        
        // const query = { name: { $regex: searchString, $options: "i" }};

        const query = {
            $or: [
              { name: { $regex: searchString, $options: "i" } },
             
              { type: { $regex: searchString, $options: "i" } },
             
              { age: { $regex: searchString, $options: "i" } },
            ],
          };
          
         
 const products = await Products.find(query).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

 const products1 =await Products.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
 if(searchString === "")
 {
   
    res.status(200).json({data:products1,currentPage:Number(page),numberOfPage:Math.ceil(total/LIMIT)});
 }
 else{
    products.forEach((product) => {
        console.log(product.name);
      });
    // console.log('hi')
        res.status(200).json({data:products,currentPage:Number(page),numberOfPage:Math.ceil(total/LIMIT)});
 }  
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}


// ,
// description: { $regex: searchString, $options: "i" },
// type:  { $regex: searchString, $options: "i" },
// price:  { $regex: searchString, $options: "i" },
// age:  { $regex: searchString, $options: "i" }