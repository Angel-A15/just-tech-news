const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Clarigies that the bond of post model to user to one user not all
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };