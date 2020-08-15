const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/auth');
// const {getUserStatus, guestAccess} = require('../controllers/auth');



router.post('/login', async (req, res)=>{
    try{
        await loginUser(req, res);
    }catch(e){
        res.status(401).json({msg:'Wrong Email or Password!'})
    }
})



router.post('/register', async (req, res)=>{
    
    try{
        await registerUser(req, res)
    }catch(error){
        
        console.log("error:",error, 'end');
    }
})

router.get('/logout', (req, res) => {
    
  })


module.exports = router