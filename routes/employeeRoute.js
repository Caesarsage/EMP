const express = require('express');
const Employee = require('../model/employeeModel');

const router = express.Router();

const catchAsync = require('../utils/asyncCatch');

router.route('/')
.get(catchAsync(async(req, res)=>{
  const employees = await Employee.find({}).populate('job');
  console.log(employees);
  res.render('employee/show',{
      employees
    }
  )
}))
.post(async(req, res)=>{
  const employee = new Employee(req.body);
  await employee.save();
  res.redirect('/admin/employee');
});

router.route('/:id')
.get(async (req, res)=>{
  const {id} = req.params;
  const employee = await Employee.findById(id)
  res.render('employee/detailPage',{
    employee
  })
})
.put(async(req, res)=>{
  const {id}= req.params;
  const employee = await Employee.findByIdAndUpdate(id, req.body);
  await employee.save()
  res.redirect(`/admin/employee`);
})
.delete(async(req, res)=>{
  const {id}= req.params;
  const employee = await Employee.findByIdAndDelete(id);
  console.log(employee);
  res.redirect(`/admin/employee`);  
})

module.exports = router;