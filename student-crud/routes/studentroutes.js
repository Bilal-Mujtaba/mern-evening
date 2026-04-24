const express = require('express');
const {addStudent, getAllStudent, getStudentbyId, updateStudent, deleteStudent} = require('../controllers/studentcontroller')

//initiating the router
const router = express.Router();

//defining the route path of add student API
router.post('/addstudent',addStudent)
//route of getting all the students
router.get('/allstudents',getAllStudent)
//route of getting specific student
router.get('/getstudent/:id',getStudentbyId);
//route of updating student record
router.put('/update/:id',updateStudent);
//route to delete Student data
router.delete('/delete/:id',deleteStudent);

module.exports = router;