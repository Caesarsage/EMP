const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  name:String,
  description: String,
  validThrough: Date,
  employmentType: String,
  baseSalary: Number
},
{timestamps: true}
);

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;