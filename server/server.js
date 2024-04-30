import express from "express"; //module to make requests
import bodyParser from "body-parser"; //module to read the body of post request
import http from 'http'
import {Server} from 'socket.io'
import mongoose from "mongoose";
import cors from "cors";
import apiRouter from "./Router/apiRouter.js";
import { getUserPage } from "./controllers/getUserPage.js";
import { getDevsPage } from "./controllers/getDevsPage.js";
const app = express(); //function to handle requests , app is an object to handle requests
import { dirname } from "path"; //function to get directory name
import { fileURLToPath } from "url";
import morgan from "morgan"
import rfs from "rotating-file-stream"
import path from "path"
const __dirname = dirname(fileURLToPath(import.meta.url)); //saving the directory name
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import schemas from "./db/schemas.js";


var accessLogStream = rfs.createStream("access.log",
{
    interval: '1d',
    path:path.join(__dirname,'log')
})

app.use(morgan('combined',{stream:accessLogStream}))
app.set('view engine', 'ejs')

const server = http.createServer(app);
const io = new Server(server);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.urlencoded({ extended: false })); //decoding the data in body
app.use(bodyParser.json()); //for post requests //decoding the data in body

// Swagger definition
const swaggerDefinition = {
  "openapi": "3.0.0",
  "info": {
    "title": "API Documentation for CAMPUSTRADE",
    "version": "1.0.0",
    "description": "This is the API documentation for my application."
  },
  "servers": [
    {
      "url": "http://localhost:8000",
      "description": "server"
    }
  ],
  "components": {schemas}
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./Router/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Serve swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", apiRouter); // calling /api calls different from different file


app.get("/user/home/:userId", getUserPage);

app.get("/devs/:userId", getDevsPage);



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


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

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
  export default app
  export { server };