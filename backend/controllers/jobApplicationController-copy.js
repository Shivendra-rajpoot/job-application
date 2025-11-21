// backend/controllers/jobApplicationController.js
const Joi = require('joi');
const sequelize = require('../config/database');

// require models directly (models export initialized Sequelize models)
const JobApplication = require('../models/job_application');
const Education = require('../models/education');
const Experience = require('../models/experience');
const Training = require('../models/training');
const Award = require('../models/award');
const Reference = require('../models/reference');
const File = require('../models/file');

//
// Validation schema (expand fields as needed)
//
const jobAppSchema = Joi.object({
  id: Joi.number().optional(),

  applicant_id: Joi.number().optional().allow(null),
  job_id: Joi.number().required(),

  // REQUIRED FIELDS
  full_name: Joi.string().required(),
  gender: Joi.string().required(),
  phone_number: Joi.string().required(),
  alt_phone_number: Joi.string().required(),
  email: Joi.string().email().required(),
  date_of_birth: Joi.date().iso().required(),
  father_name: Joi.string().required(),
  nationality: Joi.string().required(),
  mode_of_application: Joi.string().required(),
  current_organization: Joi.string().required(),
  current_organization_type: Joi.string().required(),
  total_emoluments: Joi.string().required(),
  total_experience_years: Joi.number().precision(2).required(),
  aadhaar_number: Joi.string().required(),
  social_category: Joi.string().required(),
  marital_status: Joi.string().required(),

  // Correspondence address
  corr_address: Joi.string().required(),
  corr_city: Joi.string().required(),
  corr_state: Joi.string().required(),
  corr_country: Joi.string().required(),
  corr_pin: Joi.string().required(),
  corr_phone: Joi.string().required(),

  // Permanent address
  perm_address: Joi.string().required(),
  perm_city: Joi.string().required(),
  perm_state: Joi.string().required(),
  perm_country: Joi.string().required(),
  perm_pin: Joi.string().required(),
  perm_phone: Joi.string().required(),

  police_station: Joi.string().required(),

  // File URLs (REQUIRED in model)
  photo_url: Joi.string().required(),
  signature_url: Joi.string().required(),
  cv_url: Joi.string().required(),

    expertise_text: Joi.string(),
        declaration_name1: Joi.string().required(),
       declaration_name2: Joi.string().required(),

  status: Joi.string()
    .valid('draft', 'submitted', 'withdrawn', 'shortlisted', 'rejected')
    .default('draft'),

  attempt: Joi.number().integer().min(1).default(1),

  // child arrays
  educations: Joi.any().optional(),
  experiences: Joi.any().optional(),
  trainings: Joi.any().optional(),
  awards: Joi.any().optional(),
  references: Joi.any().optional()
});


//
// helpers
//
function parseMaybeJsonArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      // not JSON -- maybe comma-separated? We won't try to parse further
    }
  }
  return [];
}

async function replaceChild(Model, jobApplicationId, jobId, rows, t) {
  await Model.destroy({ where: { job_application_id: jobApplicationId }, transaction: t });
  if (!rows || rows.length === 0) return;
  const toInsert = rows.map(r => ({ ...r, job_application_id: jobApplicationId, job_id: jobId }));
  await Model.bulkCreate(toInsert, { transaction: t });
}

//
// Controller functions
//
// async function saveJobApplication(req, res) {
//   // Accept both application/json and multipart/form-data (FormData with stringified arrays)
//   const payload = { ...req.body };

//   // parse arrays passed as JSON strings (common if client uses FormData)
//   payload.educations = parseMaybeJsonArray(payload.educations);
//   payload.experiences = parseMaybeJsonArray(payload.experiences);
//   payload.trainings = parseMaybeJsonArray(payload.trainings);
//   payload.awards = parseMaybeJsonArray(payload.awards);
//   payload.references = parseMaybeJsonArray(payload.references);

//   // Validate core payload
//   const { error, value } = jobAppSchema.validate(payload);
//   if (error) return res.status(400).json({ error: error.message });

//   // Begin transaction
//   const t = await sequelize.transaction();
//   try {
//     let jobApp;
//     if (value.id) {
//       jobApp = await JobApplication.findByPk(value.id, { transaction: t });
//       if (!jobApp) {
//         await t.rollback();
//         return res.status(404).json({ error: 'Job application not found' });
//       }

//       // update allowed fields explicitly to avoid accidentally overwriting columns not in schema
//       const updatable = {
//         applicant_id: value.applicant_id ?? jobApp.applicant_id,
//         job_id: value.job_id,
//         full_name: value.full_name,
//         gender: value.gender,
//         phone_number: value.phone_number,
//         alt_phone_number: value.alt_phone_number,
//         email: value.email,
//         date_of_birth: value.date_of_birth,
//         father_name: value.father_name,
//         nationality: value.nationality,
//         mode_of_application: value.mode_of_application,
//         current_organization: value.current_organization,
//         current_organization_type: value.current_organization_type,
//         total_emoluments: value.total_emoluments,
//         total_experience_years: value.total_experience_years,
//         aadhaar_number: value.aadhaar_number,
//         social_category: value.social_category,
//         marital_status: value.marital_status,
//         corr_address: value.corr_address,
//         corr_city: value.corr_city,
//         corr_state: value.corr_state,
//         corr_country: value.corr_country,
//         corr_pin: value.corr_pin,
//         corr_phone: value.corr_phone,
//         perm_address: value.perm_address,
//         perm_city: value.perm_city,
//         perm_state: value.perm_state,
//         perm_country: value.perm_country,
//         perm_pin: value.perm_pin,
//         perm_phone: value.perm_phone,
//         police_station: value.police_station,
//         expertise_text: value.expertise_text,
//         photo_url: value.photo_url,
// signature_url: value.signature_url,
// cv_url: value.cv_url,

//         status: value.status,
//         attempt: value.attempt
//       };

//       await jobApp.update(updatable, { transaction: t });
//     } else {
//       jobApp = await JobApplication.create({
//         applicant_id: value.applicant_id,
//         job_id: value.job_id,
//         full_name: value.full_name,
//         gender: value.gender,
//         phone_number: value.phone_number,
//         alt_phone_number: value.alt_phone_number,
//         email: value.email,
//         date_of_birth: value.date_of_birth,
//         father_name: value.father_name,
//         nationality: value.nationality,
//         mode_of_application: value.mode_of_application,
//         current_organization: value.current_organization,
//         current_organization_type: value.current_organization_type,
//         total_emoluments: value.total_emoluments,
//         total_experience_years: value.total_experience_years,
//         aadhaar_number: value.aadhaar_number,
//         social_category: value.social_category,
//         marital_status: value.marital_status,
//         corr_address: value.corr_address,
//         corr_city: value.corr_city,
//         corr_state: value.corr_state,
//         corr_country: value.corr_country,
//         corr_pin: value.corr_pin,
//         corr_phone: value.corr_phone,
//         perm_address: value.perm_address,
//         perm_city: value.perm_city,
//         perm_state: value.perm_state,
//         perm_country: value.perm_country,
//         perm_pin: value.perm_pin,
//         perm_phone: value.perm_phone,
//         police_station: value.police_station,
//         expertise_text: value.expertise_text,
//        photo_url: value.photo_url,
// signature_url: value.signature_url,
// cv_url: value.cv_url,

//         status: value.status,
//         attempt: value.attempt
//       }, { transaction: t });
//     }

//     const jobApplicationId = jobApp.id;
//     const jobId = value.job_id;

//     // Replace child lists inside same transaction
//     await replaceChild(Education, jobApplicationId, jobId, value.educations, t);
//     await replaceChild(Experience, jobApplicationId, jobId, value.experiences, t);
//     await replaceChild(Training, jobApplicationId, jobId, value.trainings, t);
//     await replaceChild(Award, jobApplicationId, jobId, value.awards, t);
//     await replaceChild(Reference, jobApplicationId, jobId, value.references, t);

//     await t.commit();

//     // load saved record with children and files
//     const saved = await JobApplication.findByPk(jobApplicationId, {
//       include: [
//         { model: Education },
//         { model: Experience },
//         { model: Training },
//         { model: Award },
//         { model: Reference },
//         { model: File }
//       ]
//     });

//     return res.json({ success: true, job_application: saved });
//   } catch (err) {
//     await t.rollback();
//     console.error('saveJobApplication error:', err);
//     return res.status(500).json({ error: err.message || 'Save failed' });
//   }
// }
async function saveJobApplication(req, res) {
  const payload = { ...req.body };

  payload.educations = parseMaybeJsonArray(payload.educations);
  payload.experiences = parseMaybeJsonArray(payload.experiences);
  payload.trainings = parseMaybeJsonArray(payload.trainings);
  payload.awards = parseMaybeJsonArray(payload.awards);
  payload.references = parseMaybeJsonArray(payload.references);

  const { error, value } = jobAppSchema.validate(payload);
  if (error) return res.status(400).json({ error: error.message });

  const t = await sequelize.transaction();
  try {

    let jobApp = null;

    // -----------------------------
    // 1️⃣ UPDATE USING ID (direct)
    // -----------------------------
    if (value.id) {
      jobApp = await JobApplication.findByPk(value.id, { transaction: t });
      if (!jobApp) {
        await t.rollback();
        return res.status(404).json({ error: "Job application not found" });
      }
    }

    // -----------------------------------------------------------
    // 2️⃣ If NO ID → check if same applicant_id + job_id exists
    // -----------------------------------------------------------
    else if (value.applicant_id && value.job_id) {
      jobApp = await JobApplication.findOne({
        where: {
          applicant_id: value.applicant_id,
          job_id: value.job_id
        },
        transaction: t
      });
    }

    // ------------------------------------------
    // 3️⃣ UPDATE existing (ID or applicant+job)
    // ------------------------------------------
    if (jobApp) {
      const updatable = {
        applicant_id: value.applicant_id ?? jobApp.applicant_id,
        job_id: value.job_id,
        full_name: value.full_name,
        gender: value.gender,
        phone_number: value.phone_number,
        alt_phone_number: value.alt_phone_number,
        email: value.email,
        date_of_birth: value.date_of_birth,
        father_name: value.father_name,
        nationality: value.nationality,
        mode_of_application: value.mode_of_application,
        current_organization: value.current_organization,
        current_organization_type: value.current_organization_type,
        total_emoluments: value.total_emoluments,
        total_experience_years: value.total_experience_years,
        aadhaar_number: value.aadhaar_number,
        social_category: value.social_category,
        marital_status: value.marital_status,
        corr_address: value.corr_address,
        corr_city: value.corr_city,
        corr_state: value.corr_state,
        corr_country: value.corr_country,
        corr_pin: value.corr_pin,
        corr_phone: value.corr_phone,
        perm_address: value.perm_address,
        perm_city: value.perm_city,
        perm_state: value.perm_state,
        perm_country: value.perm_country,
        perm_pin: value.perm_pin,
        perm_phone: value.perm_phone,
        police_station: value.police_station,
        
        photo_url: value.photo_url,
        signature_url: value.signature_url,
        cv_url: value.cv_url,
       expertise_text: value.expertise_text,
        declaration_name1: value.declaration_name1,
       declaration_name2: value.declaration_name2,

        status: value.status,
        attempt: value.attempt
      };

      await jobApp.update(updatable, { transaction: t });
    }

    // ---------------------------
    // 4️⃣ CREATE NEW RECORD
    // ---------------------------
    else {
      jobApp = await JobApplication.create({
        applicant_id: value.applicant_id,
        job_id: value.job_id,
        full_name: value.full_name,
        gender: value.gender,
        phone_number: value.phone_number,
        alt_phone_number: value.alt_phone_number,
        email: value.email,
        date_of_birth: value.date_of_birth,
        father_name: value.father_name,
        nationality: value.nationality,
        mode_of_application: value.mode_of_application,
        current_organization: value.current_organization,
        current_organization_type: value.current_organization_type,
        total_emoluments: value.total_emoluments,
        total_experience_years: value.total_experience_years,
        aadhaar_number: value.aadhaar_number,
        social_category: value.social_category,
        marital_status: value.marital_status,
        corr_address: value.corr_address,
        corr_city: value.corr_city,
        corr_state: value.corr_state,
        corr_country: value.corr_country,
        corr_pin: value.corr_pin,
        corr_phone: value.corr_phone,
        perm_address: value.perm_address,
        perm_city: value.perm_city,
        perm_state: value.perm_state,
        perm_country: value.perm_country,
        perm_pin: value.perm_pin,
        perm_phone: value.perm_phone,
        police_station: value.police_station,
        expertise_text: value.expertise_text,
        declaration_name1: value.declaration_name1,
       declaration_name2: value.declaration_name2,
        photo_url: value.photo_url,
        signature_url: value.signature_url,
        cv_url: value.cv_url,
        expertise_text: value.expertise_text,

        status: value.status,
        attempt: value.attempt
      }, { transaction: t });
    }

    const jobApplicationId = jobApp.id;
    const jobId = value.job_id;

    await replaceChild(Education, jobApplicationId, jobId, value.educations, t);
    await replaceChild(Experience, jobApplicationId, jobId, value.experiences, t);
    await replaceChild(Training, jobApplicationId, jobId, value.trainings, t);
    await replaceChild(Award, jobApplicationId, jobId, value.awards, t);
    await replaceChild(Reference, jobApplicationId, jobId, value.references, t);

    await t.commit();

    const saved = await JobApplication.findByPk(jobApplicationId, {
      include: [
        { model: Education },
        { model: Experience },
        { model: Training },
        { model: Award },
        { model: Reference },
        { model: File }
      ]
    });

    return res.json({ success: true, job_application: saved });
  } catch (err) {
    await t.rollback();
    console.error("saveJobApplication error:", err);
    return res.status(500).json({ error: err.message });
  }
}


async function getJobApplication(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: 'id required' });

  try {
    const jobApp = await JobApplication.findByPk(id, {
      include: [
        { model: Education },
        { model: Experience },
        { model: Training },
        { model: Award },
        { model: Reference },
        { model: File }
      ]
    });
    if (!jobApp) return res.status(404).json({ error: 'Not found' });
    return res.json(jobApp);
  } catch (err) {
    console.error('getJobApplication error:', err);
    return res.status(500).json({ error: err.message });
  }
}

async function listByApplicant(req, res) {
  const applicantId = req.params.applicantId || req.query.applicant_id;
  if (!applicantId) return res.status(400).json({ error: 'applicantId required' });

  try {
    const rows = await JobApplication.findAll({
      where: { applicant_id: applicantId },
      
      order: [['updated_at', 'DESC']]
    });
    return res.json(rows);
  } catch (err) {
    console.error('listByApplicant error:', err);
    return res.status(500).json({ error: err.message });
  }
}

async function deleteJobApplication(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: 'id required' });
  const t = await sequelize.transaction();
  try {
    // delete child rows then the job_application record
    await Education.destroy({ where: { job_application_id: id }, transaction: t });
    await Experience.destroy({ where: { job_application_id: id }, transaction: t });
    await Training.destroy({ where: { job_application_id: id }, transaction: t });
    await Award.destroy({ where: { job_application_id: id }, transaction: t });
    await Reference.destroy({ where: { job_application_id: id }, transaction: t });
    await File.destroy({ where: { job_application_id: id }, transaction: t });

    await JobApplication.destroy({ where: { id }, transaction: t });

    await t.commit();
    return res.json({ success: true });
  } catch (err) {
    await t.rollback();
    console.error('deleteJobApplication error:', err);
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {
  saveJobApplication,
  getJobApplication,
  listByApplicant,
  deleteJobApplication
};
