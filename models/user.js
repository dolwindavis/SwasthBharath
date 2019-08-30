var bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
  }, {


  });

  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password

  // User.addHook("beforeCreate", function(user) {
  //   return user.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  // });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
