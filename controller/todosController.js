const { Todo, User } = require('../models')
const bcrypt = require('bcrypt');

class TodoController {
  static findAll(req, res) {    
    Todo
      .findAll()
      .then(value => {
        if (value) {
          res.status(200).json(value)
        } else {
          throw `Invalid Data`
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
  }

  static findByPk(req, res) {
    Todo
      .findByPk(req.params.id)
      .then(value => {
        if (value) {
          res.status(200).json(value)
        } else {
          res.status(404).json({
            msg: `Data Not Found`
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: err.message
        })
      })
  }

  static create(req, res) {
    let checkId = req.isLogin
    console.log("checkId==================",checkId);
    Todo
      .create({
        title: req.body.name,
        description: req.body.description,
        UserId : req.isLogin
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

  static delete(req, res) {
    Todo
      .destroy({
        where: { id: req.params.id }
      })
      .then(value => {
        res.status(200).json(value)
      })
      .catch(err => {
        res.status(404).json({
          msg: err.message
        })
      })
  }

  static update(req, res) {
    Todo
      .update({
        name: req.body.name,
        description: req.body.description,
        UserId : req.isLogin
      }, { where: { id: req.params.id } })
      .then(value=>{
        res.status(200).json(value)
      })
      .catch(err=>{
        res.status(400).json({
          msg : err.message
        })
      })
  }
}

module.exports = TodoController
