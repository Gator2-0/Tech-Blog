const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoute');

router.use('/comments', commentRoutes)
router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);

module.exports = router;