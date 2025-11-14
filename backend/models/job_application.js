// backend/models/job_application.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JobApplication = sequelize.define('JobApplication', {
  applicant_id: { type: DataTypes.BIGINT, allowNull: true },
  job_id: { type: DataTypes.BIGINT, allowNull: false },

  /* Personal info */
  full_name: DataTypes.TEXT,
  gender: DataTypes.STRING,
  phone_number: DataTypes.STRING,
  alt_phone_number: DataTypes.STRING,
  email: DataTypes.STRING,
  date_of_birth: DataTypes.DATEONLY,
  father_name: DataTypes.TEXT,
  nationality: DataTypes.TEXT,
  mode_of_application: DataTypes.TEXT,
  current_organization: DataTypes.TEXT,
  current_organization_type: DataTypes.STRING,
  total_emoluments: DataTypes.TEXT,
  total_experience_years: DataTypes.DECIMAL(5,2),

  aadhaar_number: DataTypes.STRING,
  social_category: DataTypes.STRING,
  marital_status: DataTypes.STRING,

  /* Correspondence address */
  corr_address: DataTypes.TEXT,
  corr_city: DataTypes.STRING,
  corr_state: DataTypes.STRING,
  corr_country: DataTypes.STRING,
  corr_pin: DataTypes.STRING,
  corr_phone: DataTypes.STRING,

  /* Permanent address */
  perm_address: DataTypes.TEXT,
  perm_city: DataTypes.STRING,
  perm_state: DataTypes.STRING,
  perm_country: DataTypes.STRING,
  perm_pin: DataTypes.STRING,
  perm_phone: DataTypes.STRING,

  police_station: DataTypes.TEXT,

  /* File URLs (store S3 or local paths) */
  photo_url: DataTypes.TEXT,
  signature_url: DataTypes.TEXT,
  cv_url: DataTypes.TEXT,

  /* Other sections */
  expertise_text: DataTypes.TEXT,
  declaration_name: DataTypes.TEXT,
  declaration_noc_name: DataTypes.TEXT,

  /* Metadata */
  status: { type: DataTypes.STRING, defaultValue: 'draft' }, // draft | submitted | withdrawn | shortlisted | rejected
  submission_date: DataTypes.DATE,
  attempt: { type: DataTypes.INTEGER, defaultValue: 1 }

}, {
  tableName: 'job_applications',
  underscored: true,
  timestamps: true
});

module.exports = JobApplication;
