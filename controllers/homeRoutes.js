const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req,res) =>{
  res.render('homepage',{
    logged_in: req.session.logged_in
  })
});

router.get('/dashboard', async (req,res) =>{

  res.render('dashboard',{
    logged_in: req.session.logged_in
  })
});

router.get('/newBlog', async (req,res) =>{
  
  res.render('newBlog',{
    name: req.session.name,
    logged_in: req.session.logged_in
  })
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;