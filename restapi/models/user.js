const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    pet: [{
        type: 'ObjectId',
        ref: 'Pet'
    }]
    
})
// userSchema.path('username').validate(function(v) {
//     return v.match(/^[a-zA-Z0-9]*$/) ;
//   }, );
// userSchema.path('password').validate(function(v) {
//   return v.match(/^[a-zA-Z0-9]*$/) ;
// }, );

module.exports = mongoose.model('User', userSchema)