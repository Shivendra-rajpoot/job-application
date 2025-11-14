// backend/models/reference.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reference = sequelize.define('Reference', {
  job_application_id: { type: DataTypes.BIGINT, allowNull: false },
  job_id: { type: DataTypes.BIGINT, allowNull: false },
  seq: DataTypes.SMALLINT,
  name: DataTypes.TEXT,
  organization: DataTypes.TEXT,
  position: DataTypes.TEXT,
  email: DataTypes.TEXT,
  phone: DataTypes.TEXT
}, {
  tableName: 'references_data',
  timestamps: false,
  underscored: true
});

module.exports = Reference;
