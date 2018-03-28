var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        type: String,
        minLength: 1,
        required: true,
        trim: true
    }
});
module.exports = {User};
