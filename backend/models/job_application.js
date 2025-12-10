// backend/models/job_application.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JobApplication = sequelize.define('JobApplication', {
  applicant_id: { 
    type: DataTypes.BIGINT,
    allowNull: true, // optional
  },

  job_id: { 
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  full_name: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },
  phone_number: { type: DataTypes.STRING, allowNull: false },
  alt_phone_number: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: false },
  date_of_birth: { type: DataTypes.DATEONLY, allowNull: false },

  father_name: { type: DataTypes.STRING, allowNull: true },
  nationality: { type: DataTypes.STRING, allowNull: true },
  mode_of_application: { type: DataTypes.STRING, allowNull: false },

  current_organization: { type: DataTypes.STRING, allowNull: true },
  current_organization_type: { type: DataTypes.STRING, allowNull: true },
  total_emoluments: { type: DataTypes.STRING, allowNull: true },
  total_experience_years: { type: DataTypes.DECIMAL(5,2), allowNull: true },

  aadhaar_number: { type: DataTypes.STRING, allowNull: true },
  social_category: { type: DataTypes.STRING, allowNull: true },
  marital_status: { type: DataTypes.STRING, allowNull: true },

  corr_address: { type: DataTypes.STRING, allowNull: false },
  corr_city: { type: DataTypes.STRING, allowNull: false },
  corr_state: { type: DataTypes.STRING, allowNull: false },
  corr_country: { type: DataTypes.STRING, allowNull: false },
  corr_pin: { type: DataTypes.STRING, allowNull: false },
  corr_phone: { type: DataTypes.STRING, allowNull: false },

  perm_address: { type: DataTypes.STRING, allowNull: false },
  perm_city: { type: DataTypes.STRING, allowNull: false },
  perm_state: { type: DataTypes.STRING, allowNull: false },
  perm_country: { type: DataTypes.STRING, allowNull: false },
  perm_pin: { type: DataTypes.STRING, allowNull: false },
  perm_phone: { type: DataTypes.STRING, allowNull: false },

  police_station: { type: DataTypes.STRING, allowNull: true },

  photo_url: { type: DataTypes.STRING, allowNull: false },
  signature_url: { type: DataTypes.STRING, allowNull: false },
  cv_url: { type: DataTypes.STRING, allowNull: false },

 

},
async function getPersonalInfo(applicant_id, job_id) {
  const query = `
    SELECT *
    FROM job_applications
    WHERE applicant_id = $1 AND job_id = $2
    LIMIT 1
  `;
  
  const values = [applicant_id, job_id];

  const result = await pool.query(query, values);
  return result.rows[0] || null;
}
 {
  tableName: 'job_applications',
  underscored: true,
  timestamps: true,
});


module.exports = {
  getPersonalInfo,
  JobApplication
};
