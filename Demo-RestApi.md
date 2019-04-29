# My rest-api 
**REST API built with Express and Sequelize**

### List of routes : 
| Route        | HTTP   | Description                 |
|:-------------|:-------|:----------------------------|
| `/todos`     | GET    | Get all the todos info      |
| `/todos/:id` | GET    | Get a single todo info      |
| `/todos`     | POST   | Create a todo               |
| `/todos/:id` | DELETE | Delete a todo               |
| `/todos/:id` | PUT    | Update a todo with new info |
| `/todos/:id` | PATCH  | Update a todo with new info |
| `/users/` | GET | Get all Users 
| `/users/signup` | POST | Sign up with new user info                           |
| `/users/signin` | POST | Sign in and get an access token based on credentials |



### /users
* HTTP: GET
* Header(s): none
* Body : none
* Description: Get all users

### /users/signup
* HTTP: GET
* Header(s): none
* Body: none
```
username: string (required),
email : string (required)
password: string (required)
```
* Description: Create a user


### /users/signin
* HTTP: POST
* Header(s): none
* Body: 
```
username: string (required),
email : string (required)
password: string (required)
```
* Description: Login a user


## List of todos routes
### **All of the following routes need authentication!**
#### **Authentication can be done with logging in, thus generates a token**
### /todos
* HTTP: POST
* Header(s): Token
* Body: 
```
title: string (required),
description: string (optional)
```
* Description: Create a todo

###/todos
* HTTP: GET
* Header(s): Token
* Body: none
* Description: Get all todos that is owned by the user who is logged in

### **The following routes will only work if the todo is owned by the person who is logged in** ###

###/todos/:id
* HTTP: GET
* Header(s): Token
* Body: none
* Description: Get one todo (Owner's only)

###/todos/:id
* HTTP: DELETE
* Header(s): Token
* Body: none
* Description: Delete a todo (Owner's only)

###/todos/:id
* HTTP: PUT
* Header(s): Token
* Body: 
```
title: string (AND OR)
description: string 
```
* Description: Update a todo with new values

### /todos/:id
* HTTP: PATCH
* Header(s): Token
* Body: 
* Description: Update a todo with new values


heroku : https://enigmatic-fjord-73664.herokuapp.com