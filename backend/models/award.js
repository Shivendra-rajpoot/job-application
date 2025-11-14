// backend/models/award.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Award = sequelize.define('Award', {
  job_application_id: { type: DataTypes.BIGINT, allowNull: false },
  job_id: { type: DataTypes.BIGINT, allowNull: false },
  organization: DataTypes.TEXT,
  name: DataTypes.TEXT,
  nature: DataTypes.TEXT,
  year: DataTypes.STRING
}, {
  tableName: 'awards',
  timestamps: false,
  underscored: true
});

module.exports = Award;
