const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

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
    // creator: {
    //    id: {type:ObjectId},
    //    username: {type: String}
    // }
    creator: 
        {type: String}
     
    
})

module.exports = mongoose.model('Pet', petSchema)