const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcryptjs");

const Applicant = sequelize.define("Applicant", {
  full_name: { type: DataTypes.STRING, allowNull: false },

  email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },

  password: { type: DataTypes.STRING, allowNull: false },

  visible_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "applicants",
  timestamps: true,
  underscored: true,

  hooks: {
    beforeCreate: async (applicant) => {
      // 👉 Copy plain password into password field
      if (applicant.visible_password) {
        applicant.password = applicant.visible_password;
      }

      // 👉 Hash the password
      if (applicant.password) {
        const salt = await bcrypt.genSalt(10);
        applicant.password = await bcrypt.hash(applicant.password, salt);
      }
    },

    beforeUpdate: async (applicant) => {
      if (applicant.visible_password) {
        applicant.password = applicant.visible_password;
      }

      if (applicant.changed("password")) {
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
