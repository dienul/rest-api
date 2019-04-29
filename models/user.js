'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    hooks : {
      beforeCreate : (User,option)=>{
        let salt = bcrypt.genSaltSync(8)
        let hash = bcrypt.hashSync(User.password,salt)
        User.password = hash  
      }
    }
    });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};