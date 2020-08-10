const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');
const {getUserStatus, verifyToken} = require('../controllers/auth');
const {savePet, getOnePet, getMyPets} = require('../controllers/pet');




    router.post('/create',async (req, res)=>{
       const pet = await savePet(req, res);
        res.send(pet)
    })
    router.get('/details/:id' ,  async (req, res)=>{
       
            console.log
            const id = req.params.id;
            // const obj = verifyToken(req, res);
            const pet = await getOnePet(id);
            res.send(pet);
        
    })

    router.get('/delete/:id', async (req, res)=>{
        const id = req.params.id;
        await Pet.deleteOne({_id:id});
        res.redirect('/');
    })
    router.get('/my-pets/:id', async (req, res)=>{
        const id = req.params.id;
        const user = req.headers.username;
        const myPets = await getMyPets(user);
        res.send(myPets);
    })

    router.get('/edit/:id',getUserStatus, async (req, res)=>{
        const id = req.params.id;
        const play =  await getOnePlay(id);
        let status = ''
        if (play.isPublic) {
            status = 'checked';
        }
        res.render('play/edit', {
            ...play,
            status, 
            isLogin: req.isLoggedIn
        });
    })

    router.post('/edit/:id',async (req, res)=>{
        const id = req.params.id;
        const {type, description, imageUrl, price} = req.body;
        const pet = await Pet.findByIdAndUpdate(id, { "$set": {type, description, imageUrl, price} });
        res.send(pet)
     })

     router.get('/like/:id',async (req, res)=>{
        const id = req.params.id;
        const obj = await verifyToken(req);
        const play =  await Pet.findByIdAndUpdate(id, { $addToSet:{usersLiked: [obj.userId]} });
        // TODO for user
        res.redirect(`/`);
     })

    router.get('/sortByL', async (req, res)=>{
        const plays = await getAllPlays();
        plays.forEach(e=>{
            e["likes"] = e.usersLiked.length
        })
        const ordPl = sortPlays(plays);
        res.render('user-home',{
            plays,
            isLogin: true
        })
    })
    router.get('/sortByD', async (req, res)=>{
        const plays = await getAllPlays();
        plays.forEach(e=>{
            e["likes"] = e.usersLiked.length
        })
        const ordPl = plays.sort((a,b)=>b.createdAt - a.createdAt);
        res.render('user-home',{
            plays: ordPl,
            isLogin: true
        })
    })

   

   
module.exports = router;