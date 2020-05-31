'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bug = sequelize.define('Bug,', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT,
    priorityLvl: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    projectId: DataTypes.INTEGER,
    assignedTo: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN
  }, {});
  Bug.associate = function (models) {
    // associations can be defined here
  };
  return Bug;
};