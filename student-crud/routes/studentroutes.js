const express = require('express');
const {addStudent, getAllStudent} = require('../controllers/studentcontroller')

//initiating the router
const router = express.Router();

//defining the route path of add student API
router.post('/addstudent',addStudent)
//route of getting all the students
router.get('/allstudents',getAllStudent)


module.exports = router;