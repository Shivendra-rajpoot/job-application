// backend/models/education.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Education = sequelize.define('Education', {
  job_application_id: { type: DataTypes.BIGINT, allowNull: false },
  job_id: { type: DataTypes.BIGINT, allowNull: false },
  exam: DataTypes.TEXT,
  degree_name: DataTypes.TEXT,
  institute: DataTypes.TEXT,
  year_month: DataTypes.STRING,
  subjects: DataTypes.TEXT,
  grade: DataTypes.TEXT
}, {
  tableName: 'educations',
  timestamps: false,
  underscored: true
});

module.exports = Education;
