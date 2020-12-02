const mongoose = require('mongoose');
const chalk = require('chalk')

const Employee = require('../model/employeeModel');
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
  await Employee.deleteMany({});
  for (let i = 0; i < 5; i++) {
    const blog = new Employee({
      firstName: 'Destiny',
      lastName: 'Erhabor',
      email: 'destinyerhabor6@gmail.com',
      joiningDate: Date.now(),
      phoneNum: 8108968504,
      job: "5fc72308e2f82b21f09cd414"
    });
    await blog.save()
  }
}

seedDB().then(()=>{
  mongoose.connection.close()
})
