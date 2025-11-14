// backend/models/associations.js
// Run this once at startup to wire associations
const Applicant = require('./applicant');
const Job = require('./job');
const JobApplication = require('./job_application');
const Education = require('./education');
const Experience = require('./experience');
const Training = require('./training');
const Award = require('./award');
const Reference = require('./reference');
const File = require('./file');

function setupAssociations() {
  // applicant <-> job_applications
  Applicant.hasMany(JobApplication, { foreignKey: 'applicant_id' });
  JobApplication.belongsTo(Applicant, { foreignKey: 'applicant_id' });

  // job <-> job_applications
  Job.hasMany(JobApplication, { foreignKey: 'job_id' });
  JobApplication.belongsTo(Job, { foreignKey: 'job_id' });

  // job_application -> child lists
  JobApplication.hasMany(Education, { foreignKey: 'job_application_id' });
  Education.belongsTo(JobApplication, { foreignKey: 'job_application_id' });

  JobApplication.hasMany(Experience, { foreignKey: 'job_application_id' });
  Experience.belongsTo(JobApplication, { foreignKey: 'job_application_id' });

  JobApplication.hasMany(Training, { foreignKey: 'job_application_id' });
  Training.belongsTo(JobApplication, { foreignKey: 'job_application_id' });

  JobApplication.hasMany(Award, { foreignKey: 'job_application_id' });
  Award.belongsTo(JobApplication, { foreignKey: 'job_application_id' });

  JobApplication.hasMany(Reference, { foreignKey: 'job_application_id' });
  Reference.belongsTo(JobApplication, { foreignKey: 'job_application_id' });

  JobApplication.hasMany(File, { foreignKey: 'job_application_id' });
  File.belongsTo(JobApplication, { foreignKey: 'job_application_id' });

  // Also link child tables to job (if you want quick job-based queries)
  Education.belongsTo(Job, { foreignKey: 'job_id' });
  Experience.belongsTo(Job, { foreignKey: 'job_id' });
  Training.belongsTo(Job, { foreignKey: 'job_id' });
  Award.belongsTo(Job, { foreignKey: 'job_id' });
  Reference.belongsTo(Job, { foreignKey: 'job_id' });
  File.belongsTo(Job, { foreignKey: 'job_id' });
}

module.exports = setupAssociations;
