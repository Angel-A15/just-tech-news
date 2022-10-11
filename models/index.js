const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

//Clarigies that the bond of post model to user to one user not all
Post.belongsTo(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
});

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