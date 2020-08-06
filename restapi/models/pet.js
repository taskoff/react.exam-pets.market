const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 150
    },
    imageUrl:{
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    messages: [ 
        
    ],
    createdAt:{
        type: Date,
        required: true,
    },
    creator: {
       type:String
    }
    
})

module.exports = mongoose.model('Pet', petSchema)