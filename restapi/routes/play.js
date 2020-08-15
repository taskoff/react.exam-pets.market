const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');
// const {getUserStatus, verifyToken} = require('../controllers/auth');
const {savePet, getOnePet, getMyPets} = require('../controllers/pet');




    router.post('/create',async (req, res)=>{
       const pet = await savePet(req, res);
        res.send(pet)
    })
    router.get('/details/:id' ,  async (req, res)=>{
       
            const id = req.params.id;
            // const obj = verifyToken(req, res);
            const pet = await getOnePet(id);
            res.send(pet);
        
    })

    router.get('/delete/:id', async (req, res)=>{
        const id = req.params.id;
        const result = await Pet.deleteOne({_id:id});
        res.send(result)
    })
    router.get('/my-pets/:id', async (req, res)=>{
        const id = req.params.id;
        const user = req.headers.username;
        const myPets = await getMyPets(user);
        res.send(myPets);
    })


    router.post('/edit/:id',async (req, res)=>{
        const id = req.params.id;
        const {type, description, imageUrl, price} = req.body;
        const pet = await Pet.findByIdAndUpdate(id, { "$set": {type, description, imageUrl, price} });
        res.send(pet)
     })

    router.post('/message/:id',async (req, res)=>{
        const id = req.params.id;
        const message = req.body;
        const pet = await Pet.findByIdAndUpdate(id, { $addToSet:{messages: [message]} });
        res.send(pet);
    })
     
    

   

   
module.exports = router;