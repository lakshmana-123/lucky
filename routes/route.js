const  express = require('express')
const {getStudent,createStudent} = require('../services/services')



const ROUTER = express.Router();

ROUTER.get('/getStudent',getStudent)
ROUTER.post('/postStudent',createStudent)

module.exports =  ROUTER;
