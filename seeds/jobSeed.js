const mongoose = require('mongoose');
const chalk = require('chalk')

const Job = require('../model/jobListModel');
// Creating DB
mongoose.connect('mongodb://localhost:27017/EMP',{useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(chalk.yellow('CONNECTED CORRECTLY'));
})
.catch(err => {
  console.log('error occur');
  console.log(err);
});

const seedDB = async ()=>{
  await Job.deleteMany({});
  for (let i = 0; i < 5; i++) {
    const job = new Job({
     name: 'web master',
     description: 'lorem epsum',
     validThrough: Date.now() + 1000 * 60 * 60 * 24 * 7 ,
     employmentType: 'Contract',
     baseSalary: 50
    });
    // Employee.job.push(job);
    await job.save()
  }
}

seedDB().then(()=>{
  mongoose.connection.close()
})
