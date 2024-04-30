import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
import redisClient from '../utils/redisClient.js';

export const getAllProductsAPI=async (req,res)=>{
    const college = req.params.college;
    const redisKey = `products:${college}`; // Redis key based on the college parameter

    try {
        // Try fetching from Redis first
        const cachedProducts = await redisClient.get(redisKey);
        if (cachedProducts) {
            console.log("Using cached data");
            return res.status(200).json({ data: JSON.parse(cachedProducts) });
        }

        // If not cached, fetch from database
        let query = {};
        if (college && college !== "-") {
            const usersWithCollege = await Users.find({ college_name: college });
            const userIds = usersWithCollege.map(user => user._id);
            query = { id: { $in: userIds } };
        }

        const products = await Products.find(query).sort({_id: -1});

        // Store the results in Redis with an expiration (e.g., 600 seconds)
        await redisClient.setEx(redisKey, 120, JSON.stringify(products));

        res.status(200).json({ data: products });
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}