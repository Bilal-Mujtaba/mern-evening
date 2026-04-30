const express= require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const connectDB=require('./config/db')

//configuring the database so we can use it here
connectDB();

//configuring the env file so we can use it here
dotenv.config();

//using our express file as a middleware (we can make APIs)
const app = express();

//telling express to use the APIa in JSON format (we can use APIs in JSON format)
app.use(express.json());
//now enabling the CORS so our APIs can run on another PORT 
app.use(cors());

//fetching our PORT number from .env file
const PORT =process.env.PORT;

//now starting our node.js server on the port that we have defined in .env file
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
