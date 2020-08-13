const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const generateToken = (data)=>{
    const token = jwt.sign(data, config.development.privateKey);
    return token;
}

const verifyToken = (req, res, next)=>{
    const token = req.headers['authorization']
    const obj = jwt.verify(token, config.development.privateKey);
    return obj;
}

const registerUser = async (req, res)=> {
    const {
        email,
        password,
        repassword
        } = req.body ;
    
        if (password !== repassword) {
          
          return
        }
        
        bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            try{
                const user = await new User({email, password:hash}).save();
                console.log(user)
                const userId = user._id;
                const token = generateToken({email, userId})
                res.header("Authorization", token).send(user);
               
               
            } catch(error){
              if(error.code === 11000){
                res.status(409).json({msg:'This email is already registered!'})
              }
                return
            }
            
        })
    })

   
}

const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    

      const user = await User.findOne({email});
      const status = await bcrypt.compare(password, user.password);
      
      if (status) {
          const userId = user._id
          const token = generateToken({ email, userId })
          res.header("Authorization", token).send(user);
        }
    
          
      

}

const getUserStatus = (req, res, next) => {
    const token = req.cookies['uinfo']
    if (!token) {
      req.isLoggedIn = false
      
    }
    
    try {
      jwt.verify(token, config.development.privateKey)
      req.isLoggedIn = true
    } catch(e) {
      req.isLoggedIn = false
    }
  
    next()
  }

const guestAccess = (req, res, next) => {
    const token = req.cookies['uinfo']
    if (token) {
      return res.redirect('/')
    }
    next()
  }
// const authAccess = (req, res, next) => {
//     const token = req.cookies['uinfo']
//     if (!token) {
//       return res.redirect('/')
//     }
// }
module.exports ={
    registerUser,
    generateToken,
    getUserStatus,
    loginUser,
    verifyToken,
    guestAccess,
    // authAccess
}