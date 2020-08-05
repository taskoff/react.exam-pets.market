const Play = require('../models/pet');
const {verifyToken} = require('./auth');

const savePet  = async (req, res)=>{
    const {
        type,
        description,
        imageUrl,
        price
    } = req.body;
    const obj = verifyToken(req);
    const pet = await new Play({type, description, imageUrl, price, createdAt: new Date()} ).save();
    return pet;
}

// const sortPlays = (plays)=>{
//     const ordPlays = plays.sort((a,b)=> b.usersLiked.length - a.usersLiked.length)
//     return ordPlays;
// }
const getPets = async (pet)=>{
    const pets = await Pet.find({type: `${pet}`}).lean();
    // const ordPlays = plays.sort((a,b)=> b.usersLiked.length - a.usersLiked.length)
    return pets;
}

// const getOnePlay = async (id)=>{
//     const play = await Play.findById(id).lean()
//     return play;
// }

// const getOnePlayWithFriends = async (id)=>{
//     const play = await Play.findById(id).populate('usersLiked').lean()
//     return play
// }


module.exports = {
    savePet,
    getPets,
    // getOnePlay,
    // getOnePlayWithFriends,
    // sortPlays
}