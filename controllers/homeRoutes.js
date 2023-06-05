const router = require('express').Router();
const { Blog, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) =>{
  const blogData = await Blog.findAll();
  const blogs = blogData.map((blog) => blog.get({ plain: true }));


  res.render('homepage',{
    blogs,
    logged_in: req.session.logged_in
  })
});

router.get('/dashboard', withAuth, async (req,res) =>{
  const blogData = await Blog.findAll(
    {where : {user_id : req.session.user_id}
  });
  
  const blogs = blogData.map((blog) => blog.get({ plain: true }));

  res.render('dashboard',{
    logged_in: req.session.logged_in,
    blogs
  })
});

router.get('/newBlog', withAuth, async (req,res) =>{
  const blogData = await 
  res.render('newBlog',{
    name: req.session.name,
    logged_in: req.session.logged_in
  })
});

router.get('/blog/:id',  async (req,res) =>{
  try {
    const blogData = await Blog.findByPk(req.params.id,{
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const blog = blogData.get({plain: true});
    console.log('/blog/:id');
    console.log(blog);

    const commentData = await Comments.findAll({
      where: {
        blog_id : req.params.id},
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log('comments');
    console.log(comments);

    res.render('blog',{
      blog,
      logged_in: req.session.logged_in,
      comments
    })
  } catch (err) {
    res.status(500).json(err);
  }
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