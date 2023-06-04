const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req,res) =>{
  res.render('homepage')
});

router.get('/dashboard', async (req,res) =>{
  res.render('dashboard')
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;