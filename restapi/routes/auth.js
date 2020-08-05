const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/auth');
const {getUserStatus, guestAccess} = require('../controllers/auth');


router.get('/login', getUserStatus, guestAccess, (req, res)=>{
    
        res.render('user/login');
})

router.post('/login', async (req, res)=>{
    console.log(req.body)
    await loginUser(req, res);
})



router.post('/register', async (req, res)=>{
    
    try{
        await registerUser(req, res)
    }catch(error){
        
        console.log(error);
    }
})

router.get('/logout', (req, res) => {
    
  })


module.exports = router