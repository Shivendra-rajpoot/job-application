const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Applicant = sequelize.define('Applicant', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visible_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'applicants',
  timestamps: true,
  hooks: {
    beforeValidate: async (applicant) => {
      if (applicant.password && !applicant.visible_password) {
        applicant.visible_password = applicant.password;
      }
    },
    beforeCreate: async (applicant) => {
      if (applicant.password) {
        const salt = await bcrypt.genSalt(10);
        applicant.password = await bcrypt.hash(applicant.password, salt);
      }
    },
    beforeUpdate: async (applicant) => {
      if (applicant.changed('password')) {
        applicant.visible_password = applicant.password;
        const salt = await bcrypt.genSalt(10);
        applicant.password = await bcrypt.hash(applicant.password, salt);
      }
    },
  },
});

Applicant.prototype.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = Applicant;
