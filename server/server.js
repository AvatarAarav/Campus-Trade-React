import express from 'express'; //module to make requests
import bodyParser from 'body-parser'; //module to read the body of post request
import mongoose from 'mongoose';

import Users from './db/Models/User.js';
import Admins from './db/Models/Admins.js';


const app = express(); //function to handle requests , app is an object to handle requests
import { dirname } from 'path'; //function to get directory name
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(
    import.meta.url)); //saving the directory name

app.use(bodyParser.urlencoded({ extended: false })); //decoding the data in body
app.use(bodyParser.json()) //for post requests //decoding the data in body



app.get('/', (req, res) => {
    res.render("index", { user: undefined }) //rendering the first request
})



const PORT = 3000
mongoose.connect('mongodb+srv://Aarav-Nigam:XtwpTt4aolWGmkzn@cluster0.kd8i4tz.mongodb.net/CampusTradeReactDB?retryWrites=true&w=majority',  {
     useNewUrlParser: true, 
     useUnifiedTopology: true,
     family: 4,
 })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`)
        })
    })
    .catch((err) => { console.log(`${err} !!! Can't Connect !!!`) })