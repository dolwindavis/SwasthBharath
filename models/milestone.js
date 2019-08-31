'use strict';
module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define('Milestone', {
    cultivation_id:DataTypes.INTEGER,
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    image:DataTypes.STRING,
    date:DataTypes.STRING
  }, {});
  Milestone.associate = function(models) {
    // associations can be defined here
  };
  return Milestone;
};