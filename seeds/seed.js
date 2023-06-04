const sequelize = require('../config/connection');
const { User, Blog, Comments } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blog = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  const comment = Comments.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
