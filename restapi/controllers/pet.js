const Pet = require('../models/pet');
const {verifyToken} = require('./auth');

const savePet  = async (req, res)=>{
    const {
        type,
        description,
        imageUrl,
        price,
        creator
    } = req.body;
    const obj = verifyToken(req);
    const pet = await new Pet({type, description, imageUrl, price, createdAt: new Date(), creator} ).save();
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

const getMyPets = async (myId)=>{
    const myPets = await Pet.find({creator:myId})
    return myPets;
}
// creator: {id: "5f30f73a44815c2d0c9c69e4", username: "test"}

const getOnePet = async (id)=>{
    const pet = await Pet.findById(id).lean()
    return pet;
}

// const updatePet = (data)=>{
//     const id = req.params.id;
//     const pet = await Pet.updateOne({ _id: id }, { data })
//     return pet;
// }

// const getOnePlayWithFriends = async (id)=>{
//     const play = await Play.findById(id).populate('usersLiked').lean()
//     return play
// }


module.exports = {
    savePet,
    getPets,
    getOnePet,
    getMyPets
    // updatePet
    // getOnePlayWithFriends,
    // sortPlays
}