'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceRequests = sequelize.define('ServiceRequests', {
    title: DataTypes.STRING
  }, {});
  ServiceRequests.associate = function(models) {
    // associations can be defined here
  };
  return ServiceRequests;
};