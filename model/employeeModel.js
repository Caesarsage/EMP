const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema ({
  firstName: String,
  lastName : String,
  email: String,
  joiningDate: Date,
  phoneNum: Number,
  job: String,
},
{timestamps: true}
);

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee