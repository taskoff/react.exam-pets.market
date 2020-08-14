const express = require('express');
const router = express.Router();
const {getUserStatus} = require('../controllers/auth');
const {getPets, sortPlays} = require('../controllers/pet');
const { route } = require('./play');


   router.get('/dog', async (req, res)=>{
      const dogs = await getPets('Dog');
      res.send(dogs)
   })

   router.get('/cat', async (req, res)=>{
         const cats = await getPets('Cat');
         res.send(cats)
      })
      
   router.get('/fish', async (req, res)=>{
      const cats = await getPets('Fish');
      res.send(cats)
   })
   router.get('/rabbit', async (req, res)=>{
      const cats = await getPets('Rabbit');
      res.send(cats)
   })
   router.get('/other', async (req, res)=>{
      const cats = await getPets('Other');
      res.send(cats)
   })

module.exports = router;