const express = require('express');
const path = require('path');
const MethodOverride = require('method-override');
const chalk = require('chalk');
const ejsMate = require('ejs-mate');

const app = express();

app.engine('ejs', ejsMate);
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(MethodOverride('_method'));



// Listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`connecting at port ${chalk.yellow(PORT)}`);
})