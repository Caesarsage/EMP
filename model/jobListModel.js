const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  name:String,
  description: String,
},
{timestamps: true}
);

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;