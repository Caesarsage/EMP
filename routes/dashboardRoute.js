const express = require('express');

const router = express.Router();

router.route('/')
.get((req, res)=>{
  res.render('dashboard/index')
})


module.exports = router;