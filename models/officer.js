'use strict';
module.exports = (sequelize, DataTypes) => {
  const Officers = sequelize.define('Officer', {
    locality: DataTypes.INTEGER,
    designation: DataTypes.STRING,
    user_id:DataTypes.INTEGER

  }, {});
  Officers.associate = function(models) {
    // associations can be defined here
  };
  return Officers;
};