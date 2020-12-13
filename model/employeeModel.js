const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema ({
  firstName: String,
  lastName : String,
  email: String,
  phoneNum: Number,
  // ##################### add later
  // DOB: Date,
  // gender: {
  //   type: String,
  //   enum: ['Male', 'Female', 'Prefer Not to Say']
  // },
  job: [{
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }]
},
{timestamps: true}
);

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee