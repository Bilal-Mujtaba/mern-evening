const { default: mongoose } = require('mongoose');
const moongoae = require('mongoose');

//making a function that can establish mongoDB connection
const connectDB = async ()=>{
    try{const conn=await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDB connected successfully')
}catch(error){
    console.error('Something went wrong wuth MongoDB connection');
}
}

//exporting this file/module so we can use it anywhere in the project
module.exports=connectDB;