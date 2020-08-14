const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
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


module.exports = mongoose.model('User', userSchema)