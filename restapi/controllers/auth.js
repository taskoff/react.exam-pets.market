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
    console.log(req.headers)
    const obj = jwt.verify(token, config.development.privateKey);
    return obj;
}

const registerUser = async (req, res)=> {
    const {
        username,
        password,
        repeatPassword
        } = req.body ;
    
        // if (password !== repeatPassword) {
        //   // res.redirect('user/register',{
        //   //   error: 'Repead Password not match'
        //   // });
        //   alert('ERROR');
        //   return
        // }
        
        bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            try{
              console.log(2)

                const user = await new User({username, password:hash}).save();
                // console.log(user)
                const userId = user._id;
                const token = generateToken({username, userId})
                console.log(token)
                res.header("Authorization", token).send(user);
               
               
            } catch(error){
                // res.render('user/register',{
                //     error: 'Wrong format or length'
                // });
                return
            }
            
        })
    })

   
}

const loginUser = async (req, res)=>{
    const {username, password} = req.body;
    console.log(username, password)
    const user = await User.findOne({username});
    const status = bcrypt.compare(password, user.password);
    console.log(status)
    if (status) {
        const userId = user._id
        const token = generateToken({ username, userId })
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