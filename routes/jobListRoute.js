const express = require('express');
const Job = require('../model/jobListModel');
const Employee = require('../model/employeeModel');

const catchAsync = require('../utils/asyncCatch');

const router = express.Router();

router.route('/')
.get(catchAsync(async(req, res)=>{
  const jobs = await Job.find({});
  const employee = await Employee.find({});
  console.log(employee);
  res.render('jobsList/show',{
    jobs
  }
)
}))
.post( catchAsync(async(req, res)=>{
  const {name, description, validThrough, employmentType, baseSalary} = req.body;
  const jobs = new Job({
    name,
    description,
    validThrough, 
    employmentType, 
    baseSalary
  });

  await jobs.save();
  res.redirect(`/admin/jobs`);
}));

router.route('/:id')
.put(catchAsync(async(req, res)=>{
  const { id }= req.params;
  const {name, description, validThrough, employmentType, baseSalary} = req.body;
  const job = await Job.findByIdAndUpdate(id, {name, description, validThrough, employmentType, baseSalary});
  await job.save();
  console.log(job);
  res.redirect('/admin/jobs')
}))
.delete(async(req, res)=>{
  const {id}= req.params;
  const job = await Job.findByIdAndDelete(id);
  res.redirect(`/admin/jobs`);  
})


module.exports = router;