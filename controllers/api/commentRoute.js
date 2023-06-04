const router = require('express').Router();
const { json } = require('sequelize');
const { Comments } = require('../../models');

router.post('/', (req,res) => {
  try {
    const commentData = Comments.create(req.body);

    res.status(200),json(commentData);

  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;