'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locality = sequelize.define('Locality', {
    name: DataTypes.STRING,
  }, {});
  Locality.associate = function(models) {
    // associations can be defined here
  };
  return Locality;
};