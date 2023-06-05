const router = require('express').Router();
const { Blog } = require('../../models');

router.get('/', async (req,res) => {
  try {
    const blogData = await Blog.findAll();
    res.status(200).json(blogData)
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/', async (req,res) => {
  try {
    const request = {
      "title": req.body.title,
      "content" : req.body.content,
      "user_id" : req.session.user_id
    }
    const blogData = await Blog.create(request);
    res.status(200).json(blogData);

  } catch (err) {
    res.status(400).json(err)    
  }
})

module.exports = router;