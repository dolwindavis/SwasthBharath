'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleUser = sequelize.define('RoleUser', {
    role_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {});
  RoleUser.associate = function(models) {
    // associations can be defined here
  };
  return RoleUser;
};