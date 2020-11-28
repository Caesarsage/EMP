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
})
.post(async(req, res)=>{
  const employee = new Employee(req.body);
  await employee.save();
  res.redirect('/employee');
});

router.route('/:id')
.get((req, res)=>{

})

router.route('/')


module.exports = router;