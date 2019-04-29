const express = require('express')
const app = express()
const port = process.env|| 3000
const index = require('./routes/index')
const todos = require('./routes/todos')
const user = require('./routes/user')
const Authentication = require('./middleware/Authentication')
// require('dotenv').config()

console.log(process.env.SECRET);


app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/',index)
// app.use(Authentication)
app.use('/users',user)
app.use('/todos',todos)





app.listen(port, function(){console.log(`Server Start on ${port}`);})
