const mongoose = require('mongoose');
const chalk = require('chalk');

const Employee = require('../model/employeeModel');
// Creating DB
mongoose.connect('mongodb://localhost:27017/EMP', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(chalk.yellow('CONNECTED CORRECTLY'));
  })
  .catch(err => {
    console.log('error occur');
    console.log(err);
  });

const seedDB = async () => {
  await Employee.deleteMany({});
  const blog = new Employee({
    firstName: 'Destiny',
    lastName: 'Erhabor',
    email: 'destinyerhabor6@gmail.com',
    joiningDate: Date.now(),
    phoneNum: 8108968504,
    job: 'Web Developer'
  });
  await blog.save()
}

seedDB().then(() => {
  mongoose.connection.close()
})