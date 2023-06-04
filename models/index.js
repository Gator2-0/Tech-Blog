const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./comments');


User.hasmany(Blog,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasmany(Comments,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasmany(Comments,{
  foreignKey: "blog_id",
  onDelete: 'CASCADE'
});

Comments.belongsTo(Blog,{
  foreignKey: "comments_id"
});

Comments.belongsTo(User,{
  foreignKey: "user_id"
});

module.exports = {User,Blog,Comments};