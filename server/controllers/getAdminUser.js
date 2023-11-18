import User from "../db/Models/User.js";
export const getAdminUserAPI=async (req,res)=>{
    try {
        // console.log(req.query.search)
        const page=req?.params?.page || 1;
        const LIMIT=6;
        const startIndex=(Number(page)-1)*LIMIT
        const total=await User.countDocuments({})
        console.log(req.query.search)
        // const searchString = req.query.search.toString();
        // const searchString = req.query.search && req.query.search.search ? req.query.search.search.toString() : "";
        const searchString = req.query.search ? req.query.search.toString() : "";

console.log(searchString.toString())
        
        // const query = { name: { $regex: searchString, $options: "i" }};

        const query = {
            $or: [
              { name: { $regex: searchString, $options: "i" } },

            ],
          };
          
         
 const user = await User.find(query).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

 const user1 =await User.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
 if(searchString === "")
 {
   
    res.status(200).json({data:user1,currentPage:Number(page),numberOfPage:Math.ceil(total/LIMIT)});
 }
 else{
    user.forEach((product) => {
        console.log(product.name);
      });
    // console.log('hi')
        res.status(200).json({data:user,currentPage:Number(page),numberOfPage:Math.ceil(total/LIMIT)});
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