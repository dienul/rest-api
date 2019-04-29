let jwt = require('jsonwebtoken');
module.exports = function(req,res,next){
  console.log(req.headers)
  if(req.headers.token){
    try{
      let decoded = jwt.verify(req.headers.token,process.env.SECRET)
      req.isLogin = decoded.id
      next()
      console.log(decoded);
    } catch (e){
      res.status(400).json({msg : "sing in Error"})
    }
    
  }
}


/*
Token dibuat saat user login/ register

saat login, yang kamu kirim: token
caranya: require, ikutin npm
bikin di controller

// KAMU CEK ROUTE KAMU
bedain antara Authentic, Authorize
Authentic
var decoded = jwt.verify(token, 'shhhhh');

*/