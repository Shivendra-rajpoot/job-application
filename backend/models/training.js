// backend/models/training.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Training = sequelize.define('Training', {
  job_application_id: { type: DataTypes.BIGINT, allowNull: false },
  job_id: { type: DataTypes.BIGINT, allowNull: false },
  organization: DataTypes.TEXT,
  course: DataTypes.TEXT,
  institute: DataTypes.TEXT,
  duration_days: DataTypes.INTEGER
}, {
  tableName: 'trainings',
  timestamps: false,
  underscored: true
});

module.exports = Training;
