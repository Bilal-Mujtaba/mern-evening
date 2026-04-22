//here we are defining the structure/schema of the Student collection/tabler
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter your name'],
        trim:true,
        minLength:[3,'name must be at least 3 characters'],
        maxLength:[50,'name can not be more than 50 characters']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        lowercase:true,
        trim:true
    },
    course:{
        type:String,
        required:[true,'Course is required'],
        enum:{
            values:['MERN','React','Android','AI'],
            message:'We are only offering MERN, Andoid, React, AI Courses'
        }},
        marks:{
            type:Number,
            required:true,
            min:0,
            max:100
        },
        city:{
            type:String,
            trim:true
        },
        isActive:{
            type:Boolean,
            default:true
        }
    
},{timestamps:true})

//finally exporting our model
module.exports = mongoose.model('Student',studentSchema);