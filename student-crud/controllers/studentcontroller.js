//import the student model
const Student = require('../models/student');

//function/API to add student into database
const addStudent = async (req,res) => {
    try{
        const {name,email,course,marks,city} = req.body;

        //validation 
        if(!name || !email || !course || !marks){
            return res.status(400).json({
                success:false,
                message:'Please fill out all fields'
            })
        }
        //saving the data into database
        const student = await Student.create({name,email,course,marks,city})
        return res.status(201).json({
                success:true,
                message:'Data has been saved successfully!'
            })
    }catch(error){

    }
}

//API for getting all the students
const getAllStudent = async (req,res) => {
    try{
        const students = await Student.find();
        res.status(200).json({
            success:true,
            message:'All students detail',
            //total count of student
            count: students.length,
            //for printing the students data
            data: students
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Something went wrong!',
            //getting error dynamically
            error: error.message
        })
    }
}

module.exports = {addStudent, getAllStudent};