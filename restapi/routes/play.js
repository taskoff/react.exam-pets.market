const express = require('express');
const router = express.Router();
const Play = require('../models/pet');
const {getUserStatus, verifyToken} = require('../controllers/auth');
const {savePet, getOnePlay, getOnePlayWithFriends, sortPlays, getAllPlays} = require('../controllers/pet');




    router.post('/create',async (req, res)=>{
       const pet = await savePet(req, res);
        res.send(pet)
    })
    router.get('/details/:id',getUserStatus ,  async (req, res)=>{
        if (req.isLoggedIn) {
            
            const id = req.params.id;
            const obj = verifyToken(req, res)
            const play = await getOnePlayWithFriends(id)
            console.log(play)
            const creator = play.usersLiked[0];
            console.log(creator)
            const likers = play.usersLiked.slice(1)
            console.log(likers)
           
            const friend = likers.find(e=>e.username === obj.username)
                res.render('play/details', {
                    ...play,
                    isCreator: creator.username === obj.username,
                    isLogin: true,
                    isFriend: friend
                });
        }
    })

    router.get('/delete/:id', async (req, res)=>{
        const id = req.params.id;
        await Play.deleteOne({_id:id});
        // TODO for user
        res.redirect('/');
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
        const {title, description, imageUrl, isPublic} = req.body;
        const play = await Play.findByIdAndUpdate(id, { "$set": {title, description, imageUrl, isPublic: isPublic === 'on'} });
        
        res.redirect('/');
     })

     router.get('/like/:id',async (req, res)=>{
        const id = req.params.id;
        const obj = await verifyToken(req);
        const play =  await Play.findByIdAndUpdate(id, { $addToSet:{usersLiked: [obj.userId]} });
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