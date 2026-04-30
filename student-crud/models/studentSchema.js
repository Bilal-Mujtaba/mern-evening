//here we are defining the structure/schema od the student collection
const mongoose =require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please enter your name'],
        unique: true,
        lowercase: true,
        trim: true

    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique: true,
        lowercase:true,
        trim:true
    },
    course:{
        tyoe: String,
        required:[true,'Course is required'],
        enum:{
            values:['MERN','Android','React','AI'],
            message:'We are only offering <ERN, Android, React, I Courses'
        }
    },
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

module.exports=mongoose.model('Students',studentSchema)