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

module.exports = {addStudent};