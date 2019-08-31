'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('Farmer', {
    adhar: DataTypes.STRING,
    locality:DataTypes.INTEGER,
    verification:DataTypes.STRING,
    user_id:DataTypes.INTEGER
  }, {});
  Farmer.associate = function(models) {
    // associations can be defined here
  };
  return Farmer;
};