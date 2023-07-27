const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// belongs to many allows models to query each others
// information in the context of a vote
User.belongsToMany(Post, {
through: Vote,
as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
through: Vote,
as: 'voted_posts',
    foreignKey: 'post_id'
});

// belongs to allows a direct relationship the models
// and displays a total count of votes per post
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});




module.exports = { User, Post, Vote, Comment };