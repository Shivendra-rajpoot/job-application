// backend/models/file.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const File = sequelize.define('File', {
  job_application_id: { type: DataTypes.BIGINT, allowNull: false },
  job_id: { type: DataTypes.BIGINT, allowNull: false },
  field_name: { type: DataTypes.TEXT, allowNull: false },
  filename: DataTypes.TEXT,
  url: DataTypes.TEXT,
  mime: DataTypes.TEXT,
  size: DataTypes.BIGINT
}, {
  tableName: 'files',
  timestamps: true,
  underscored: true
});

module.exports = File;
