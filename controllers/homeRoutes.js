const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req,res) =>{
  res.render('homepage')
})

module.exports = router;