// backend/models/experience.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Experience = sequelize.define('Experience', {
  job_application_id: { type: DataTypes.BIGINT, allowNull: false },
  job_id: { type: DataTypes.BIGINT, allowNull: false },
  organization: DataTypes.TEXT,
  position: DataTypes.TEXT,
  pay_level: DataTypes.TEXT,
  salary: DataTypes.TEXT,
  from_month: DataTypes.STRING,
  to_month: DataTypes.STRING,
  description: DataTypes.TEXT
}, {
  tableName: 'experiences',
  timestamps: false,
  underscored: true
});

module.exports = Experience;
