const dotenv = require("dotenv");
    dotenv.config();
const express = require("express");
const cors= require("cors");
const connectDb=require("./src/db/connectiondb.js");
const userRoutes =require("./src/routes/userRoutes.js");
const adminRoutes =require("./src/routes/adminRoutes.js");


const app = express();
const port = process.env.PORT;
const DATABASE_URL_ATLAS =process.env.DATABASE_URL_ATLAS

let corsOptions = {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  };
  
  app.use(cors(corsOptions))

//json
app.use(express.json());
 
//Database connection
// connectDb(DATABASE_URL_ATLAS);
connectDb(DATABASE_URL_ATLAS);

//for Loading Routes
app.use("/user",userRoutes)
app.use("/admin",adminRoutes)
app.get('/',(req,res)=>{
res.send("hello yogesh")
})

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})