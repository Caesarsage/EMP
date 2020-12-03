const express = require('express');
const path = require('path');
const MethodOverride = require('method-override');
const chalk = require('chalk');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

const employeeRoute = require('./routes/employeeRoute');
const jobRoute = require('./routes/jobListRoute');

const ExpressError = require('./utils/ExpressError');

const app = express();

// Creating DB
mongoose.connect('mongodb://localhost:27017/EMP',{useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(chalk.yellow('CONNECTED CORRECTLY'));
})
.catch(err => {
  console.log('error occur');
  console.log(err);
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/font-awesome')))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(MethodOverride('_method'));

app.get('/', (req, res)=>{
  res.render('dashboard/index')
})

// Routes
app.use('/admin/employee', employeeRoute);
app.use('/admin/jobs', jobRoute)

app.all('*', (req, res, next)=>{ 
  next(new ExpressError('Page not found', 404))
})

app.use((err, req, res, next)=>{
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!!!, it's not your fault but ours" 
  res.status(statusCode);
  console.log(err);
  // res.render('404', {
  //   err
  // })
});

// Listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`connecting at port ${chalk.yellow(PORT)}`);
})