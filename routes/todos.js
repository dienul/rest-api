const express = require('express')
const routes = express.Router()
const TodoController = require('../controller/todosController')
const Authentication = require('../middleware/Authentication')

routes.use(Authentication)
routes.get('/',TodoController.findAll)
routes.get('/:id',TodoController.findByPk)
routes.post('/',TodoController.create)
routes.delete('/:id',TodoController.delete)
routes.put('/:id',TodoController.update)
routes.patch('/:id',TodoController.update)

module.exports = routes