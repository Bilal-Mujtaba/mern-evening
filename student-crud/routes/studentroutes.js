const express = require('express');
const {addStudent} = require('../controllers/studentcontroller')

//initiating the router
const router = express.Router();

//defining the route path of add student API
router.post('/add',addStudent)

module.exports = router;