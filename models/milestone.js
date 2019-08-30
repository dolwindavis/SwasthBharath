'use strict';
module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define('Milestone', {
    
  }, {});
  Milestone.associate = function(models) {
    // associations can be defined here
  };
  return Milestone;
};