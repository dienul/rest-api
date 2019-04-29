const express = require('express')
const routes = express.Router()
const userController = require('../controller/userController')

routes.get('/',userController.findAll)
routes.post('/signup',userController.signup)
routes.post('/signin',userController.signin)
// routes.get('/',(req,res)=>{
//   res.send(`halaman user`)
// })



module.exports = routes