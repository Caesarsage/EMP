const express = require('express');
const Employee = require('../model/employeeModel');

const router = express.Router();

router.route('/')
.get(async(req, res)=>{
  const employees = await Employee.find({});
  res.render('employee/show',{
      employees
    }
  )
});



router.route('/')


module.exports = router;