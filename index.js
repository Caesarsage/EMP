const express = require('express');
const path = require('path');
const MethodOverride = require('method-override');
const chalk = require('chalk');
const ejsMate = require('ejs-mate');

const adminRoute = require('./routes/adminRoute');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/font-awesome')))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(MethodOverride('_method'));

app.get('/', (req, res)=>{
  res.redirect('/admin')
})

// Routes
app.use('/admin', adminRoute);

// Listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`connecting at port ${chalk.yellow(PORT)}`);
})