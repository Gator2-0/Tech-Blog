const router = require('express').Router();
const { json } = require('sequelize');
const { Comments } = require('../../models');

router.post('/', (req,res) => {
  console.log(req.body);
  try {
    const request = {
      "content" : req.body.comment,
      "user_id" : req.session.user_id,
      "blog_id" : req.body.blog_id
    }
    const commentData = Comments.create(request);

    res.status(200),json(commentData);

  } catch (err) {
    res.status(400).json(err);
  }
})

router.get('/', async (req,res) => {
  try {
    const commentData = await Comments.findAll();
    res.status(200).json(commentData)
  } catch (err) {
    res.status(400).json(err);
  }

})

module.exports = router;