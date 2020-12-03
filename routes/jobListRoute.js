const express = require('express');
const Job = require('../model/jobListModel');

const router = express.Router();

router.route('/')
.get( async(req, res)=>{
  const jobs = await Job.find({});
  res.render('jobList/show',{
    jobs
  }
)
})



module.exports = router;