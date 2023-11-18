import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const removeProductApi = async (req, res) => {
    try {
        const uid = req.params.uid;
        const id = req.params.id;  //url parameters id
        const userData = await Users.findById(uid)
        const index = userData.ads.indexOf(id);
        if (index > -1) { // only splice array when item is found
            userData.ads.splice(index, 1); // 2nd parameter means remove one item only
        }
        userData.save()
        res.status(200).render('USER_PROFILE', {user: userData });
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}