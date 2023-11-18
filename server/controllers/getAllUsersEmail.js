import User from "../db/Models/User.js";
export const getAllUsersEmailAPI = async(req, res) => {
    try {
        const user = await User.find({}, { email: 1, _id: 0 });
        var allMails = "";
        for (var i = 0; i < user.length; i++) {
            allMails += user[i].email + ";";
        }
        // console.log(allMails);
        res.status(200).json({ data: allMails }); //sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}