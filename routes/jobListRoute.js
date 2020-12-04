const express = require('express');
const Job = require('../model/jobListModel');

const catchAsync = require('../utils/asyncCatch');

const router = express.Router();

router.route('/')
.get(catchAsync(async(req, res)=>{
  const jobs = await Job.find({});
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
}))



module.exports = router;