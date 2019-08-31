'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cultivation = sequelize.define('Cultivation', {
    title: DataTypes.STRING,
    area:DataTypes.INTEGER,
    crop:DataTypes.STRING,
    time:DataTypes.INTEGER,
    user_id:DataTypes.INTEGER,
    description:DataTypes.STRING,
    
  }, {});
  Cultivation.associate = function(models) {
    // associations can be defined here
  };
  return Cultivation;
};