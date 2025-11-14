// backend/models/job.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Job = sequelize.define('Job', {
  title: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.TEXT, allowNull: false },
  mode_of_application: { type: DataTypes.STRING, allowNull: false },
  from_date: { type: DataTypes.DATE, allowNull: false },
  to_date: { type: DataTypes.DATE, allowNull: false },
  fee_apply: { type: DataTypes.ENUM('yes', 'no'), allowNull: false },
  fee: { type: DataTypes.STRING, allowNull: false },
  advt_file: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'jobs',
  timestamps: true,
  underscored: true
});

module.exports = Job;
