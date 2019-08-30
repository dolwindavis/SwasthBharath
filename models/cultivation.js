'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cultivation = sequelize.define('Cultivation', {
    
  }, {});
  Cultivation.associate = function(models) {
    // associations can be defined here
  };
  return Cultivation;
};