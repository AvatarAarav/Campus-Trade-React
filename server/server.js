import express from "express"; //module to make requests
import bodyParser from "body-parser"; //module to read the body of post request
import http from 'http'
import {Server} from 'socket.io'

import mongoose from "mongoose";
import Users from "./db/Models/User.js";
import Admins from "./db/Models/Admins.js";
import cors from "cors";
import apiRouter from "./Router/apiRouter.js";
import { getUserPage } from "./controllers/getUserPage.js";
import { getDevsPage } from "./controllers/getDevsPage.js";
const app = express(); //function to handle requests , app is an object to handle requests
import { dirname } from "path"; //function to get directory name
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //saving the directory name

const server = http.createServer(app);
const io = new Server(server);
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.urlencoded({ extended: false })); //decoding the data in body
app.use(bodyParser.json()); //for post requests //decoding the data in body

app.get("/", (req, res) => {
  res.json({ name: "kumar" }); //rendering the first request
});

app.post("/checking", (req, res) => {
  console.log(req.body.msg);
  res.json({ sentmessage: req.body.msg });
});

app.use("/api", apiRouter); // calling /api calls different from different file

app.get("/", (req, res) => {
  res.render("index", { user: undefined }); //rendering the first request
});
app.get("/user/home/:userId", getUserPage);

app.get("/devs/:userId", getDevsPage);

app.get("/devs", (req, res) => {
  res.render("devs", { user: undefined });
});

app.get("/login", (req, res) => {
  res.render("login", { user: undefined });
});

app.get("/register", (req, res) => {
  res.render("register", { user: undefined });
});

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('User connected');

  // Handle incoming messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast message to all clients
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


const PORT = 8000;
mongoose
  .connect(
    "mongodb+srv://Parthbh:Parthiiits%40123@cluster0.appxzmy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    }
  )


  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`${err} !!! Can't Connect !!!`);
  });
