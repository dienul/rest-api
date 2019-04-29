const { User } = require('../models')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

class UserController {
  static findAll(req, res) {
    User
      .findAll()
      .then(value => {
        res.status(200).json(value)
      })
      .catch(err => {
        req.status(500).json({
          msg: err
        })
      })
  }

  static findByPk(req, res) {
    User
      .findByPk(req.params.id)
      .then(value => {
        res.status(200).json(value)
      })
      .catch(err => {
        req.status(500).json({
          msg: err
        })
      })
  }
  static signup(req, res) {
    User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(value => {
        res.status(200).json(value)
      })
      .catch(err => {
        res.status(400).json({
          msg: err.message
        })
      })
  }

  static signin(req, res) {
    User
      .findOne({ where: { username: req.body.username } })
      .then(user=>{
        // console.log(user);
        if(!user){
          res.status(404).json({msg : "user not found"})
        } else {
          if(user.username === req.body.username){
            let check = bcrypt.compareSync(req.body.password,user.password)
            console.log(check);
            if(check){
              let token = jwt.sign({
                id: user.id,
                username: user.username
              }, process.env.SECRET, {expiresIn: '2 days'})
              res.status(200).json({token})
            } else {
              res.status(400).json({msg : "invalid username / password"})
            }
          }
        }
      })
      .catch(err=>{
        res.status(404).json({msg : err.message})
      })
  }
}

module.exports = UserController