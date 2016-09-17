var mongoose = require('mongoose');
var User = require('./models/User');

module.exports = mongoose.model('User', {
    email: String,
    pwd: String
});
