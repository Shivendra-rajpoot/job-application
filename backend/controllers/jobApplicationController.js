// backend/controllers/jobApplicationController.js
const Joi = require('joi');
const sequelize = require('../config/database');

// require models directly (each model should export a Sequelize model instance)
const JobApplication = require('../models/job_application');
const Education = require('../models/education');
const Experience = require('../models/experience');
const Training = require('../models/training');
const Award = require('../models/award');
const Reference = require('../models/reference');
const File = require('../models/file'); // optional model to keep track of uploaded files

//
// Helper: parse arrays coming as JSON strings or arrays
//
function parseMaybeJsonArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    // try JSON.parse
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      // not JSON - try comma separated fallback
      const parts = value.split(',').map(s => s.trim()).filter(Boolean);
      if (parts.length) return parts;
    }
  }
  return [];
}

//
// Replace child rows: destroy existing and bulkCreate provided rows (inside transaction)
//
async function replaceChild(Model, jobApplicationId, jobId, rows, t) {
  // ensure rows is array
  if (!rows || rows.length === 0) {
    // delete existing if any
    await Model.destroy({ where: { job_application_id: jobApplicationId }, transaction: t });
    return;
  }
  // normalize each row to contain job_application_id and job_id
  const toInsert = rows.map(r => ({ ...r, job_application_id: jobApplicationId, job_id: jobId }));
  // remove existing
  await Model.destroy({ where: { job_application_id: jobApplicationId }, transaction: t });
  // bulk insert
  await Model.bulkCreate(toInsert, { transaction: t });
}

//
// Joi schemas
//
// A minimal schema for drafts (most fields optional)
// and a stricter schema for submitted applications
//
const draftSchema = Joi.object({
  id: Joi.number().optional(),
  applicant_id: Joi.number().optional().allow(null),
  job_id: Joi.number().required(),

  // allow many fields optional in draft
  full_name: Joi.string().optional().allow(''),
  gender: Joi.string().optional().allow(''),
  phone_number: Joi.string().optional().allow(''),
  alt_phone_number: Joi.string().optional().allow(''),
  email: Joi.string().email().optional().allow(''),
  date_of_birth: Joi.date().iso().optional().allow(null),
  father_name: Joi.string().optional().allow(''),
  nationality: Joi.string().optional().allow(''),
  mode_of_application: Joi.string().optional().allow(''),
  current_organization: Joi.string().optional().allow(''),
  current_organization_type: Joi.string().optional().allow(''),
  total_emoluments: Joi.string().optional().allow(''),
  total_experience_years: Joi.number().precision(2).optional().allow(null),
  aadhaar_number: Joi.string().optional().allow(''),
  social_category: Joi.string().optional().allow(''),
  marital_status: Joi.string().optional().allow(''),

  corr_address: Joi.string().optional().allow(''),
  corr_city: Joi.string().optional().allow(''),
  corr_state: Joi.string().optional().allow(''),
  corr_country: Joi.string().optional().allow(''),
  corr_pin: Joi.string().optional().allow(''),
  corr_phone: Joi.string().optional().allow(''),

  perm_address: Joi.string().optional().allow(''),
  perm_city: Joi.string().optional().allow(''),
  perm_state: Joi.string().optional().allow(''),
  perm_country: Joi.string().optional().allow(''),
  perm_pin: Joi.string().optional().allow(''),
  perm_phone: Joi.string().optional().allow(''),

  police_station: Joi.string().optional().allow(''),

  photo_url: Joi.string().optional().allow(''),
  signature_url: Joi.string().optional().allow(''),
  cv_url: Joi.string().optional().allow(''),

  expertise_text: Joi.string().optional().allow(''),
  declaration_name1: Joi.string().optional().allow(''),
  declaration_name2: Joi.string().optional().allow(''),

  status: Joi.string().valid('draft', 'submitted', 'withdrawn', 'shortlisted', 'rejected').optional().default('draft'),
  attempt: Joi.number().integer().min(1).optional().default(1),

  educations: Joi.any().optional(),
  experiences: Joi.any().optional(),
  trainings: Joi.any().optional(),
  awards: Joi.any().optional(),
  references: Joi.any().optional()
});

const submittedSchema = draftSchema.keys({
  // stricter: require some fields
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone_number: Joi.string().required(),
  date_of_birth: Joi.date().iso().required(),
  aadhaar_number: Joi.string().required(),
  photo_url: Joi.string().required(),
  signature_url: Joi.string().required(),
  cv_url: Joi.string().required()
});

//
// Utility: if req.files present (multer), set photo_url etc.
// You may want to adapt URL building to your domain (S3, CDN, or static /uploads).
//
function attachFilesToValue(req, value) {
  // multer usually puts files in req.files (object or array)
  // Support both single and multiple upload patterns.
  if (!req.files) return value;

  // If multer used as fields: req.files = { photo: [...], signature: [...], cv: [...] }
  if (req.files.photo) {
    const f = Array.isArray(req.files.photo) ? req.files.photo[0] : req.files.photo;
    if (f) value.photo_url = f.path || f.filename || (f.location || '');
  }
  if (req.files.signature) {
    const f = Array.isArray(req.files.signature) ? req.files.signature[0] : req.files.signature;
    if (f) value.signature_url = f.path || f.filename || (f.location || '');
  }
  if (req.files.cv) {
    const f = Array.isArray(req.files.cv) ? req.files.cv[0] : req.files.cv;
    if (f) value.cv_url = f.path || f.filename || (f.location || '');
  }

  // Some setups populate req.file (single file). In that case user would need separate endpoints.
  if (req.file && req.file.fieldname) {
    const field = req.file.fieldname;
    value[`${field}_url`] = req.file.path || req.file.filename || req.file.location || '';
  }

  return value;
}

//
// Main save handler
//
async function saveJobApplication(req, res) {
  try {
    // Copy body. For multipart/form-data, many clients send arrays as JSON strings.
    const payload = { ...req.body };

    // normalize child arrays
    payload.educations = parseMaybeJsonArray(payload.educations);
    payload.experiences = parseMaybeJsonArray(payload.experiences);
    payload.trainings = parseMaybeJsonArray(payload.trainings);
    payload.awards = parseMaybeJsonArray(payload.awards);
    payload.references = parseMaybeJsonArray(payload.references);

    // If files present, attach file URLs into payload
    attachFilesToValue(req, payload);

    // Choose schema based on status: if client indicates "submitted" => strict validation
    const isSubmitted = (payload.status && payload.status === 'submitted') || (req.query && req.query.final === '1');

    const schemaToUse = isSubmitted ? submittedSchema : draftSchema;
    const { error, value } = schemaToUse.validate(payload, { abortEarly: false, convert: true });

    if (error) {
      // return all validation messages
      const details = error.details.map(d => ({ message: d.message, path: d.path }));
      return res.status(400).json({ error: 'validation_failed', details });
    }

    // start transaction
    const t = await sequelize.transaction();
    let jobApp = null;

    try {
      // 1) if id provided -> find and update
      if (value.id) {
        jobApp = await JobApplication.findByPk(value.id, { transaction: t });
        if (!jobApp) {
          await t.rollback();
          return res.status(404).json({ error: 'Job application not found' });
        }
      }
      // 2) else if applicant_id+job_id find existing
      else if (value.applicant_id && value.job_id) {
        jobApp = await JobApplication.findOne({
          where: { applicant_id: value.applicant_id, job_id: value.job_id },
          transaction: t
        });
      }

      // Build updatable/create payload
      const fields = {
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

        status: value.status,
        attempt: value.attempt
      };

      if (jobApp) {
        // update only provided values (avoid overwriting with undefined)
        const toUpdate = {};
        Object.keys(fields).forEach(k => {
          if (fields[k] !== undefined) toUpdate[k] = fields[k];
        });
        await jobApp.update(toUpdate, { transaction: t });
      } else {
        // create
        jobApp = await JobApplication.create(fields, { transaction: t });
      }

      const jobApplicationId = jobApp.id;
      const jobId = value.job_id;

      // replace child lists
      await replaceChild(Education, jobApplicationId, jobId, value.educations, t);
      await replaceChild(Experience, jobApplicationId, jobId, value.experiences, t);
      await replaceChild(Training, jobApplicationId, jobId, value.trainings, t);
      await replaceChild(Award, jobApplicationId, jobId, value.awards, t);
      await replaceChild(Reference, jobApplicationId, jobId, value.references, t);

      // Optionally persist file metadata into File table if you want to track them
      if (req.files) {
        // prepare array of file rows
        const filesToInsert = [];
        // handle both object (fields) or array of files
        const addFile = (f, kind) => {
          if (!f) return;
          const fileRow = {
            job_application_id: jobApplicationId,
            job_id: jobId,
            field: kind,
            original_name: f.originalname || f.filename || '',
            path: f.path || f.filename || f.location || '',
            mime_type: f.mimetype || '',
            size: f.size || 0
          };
          filesToInsert.push(fileRow);
        };

        // if req.files is object of arrays: { photo: [..], signature: [..], cv: [..] }
        if (typeof req.files === 'object') {
          if (req.files.photo) addFile(Array.isArray(req.files.photo) ? req.files.photo[0] : req.files.photo, 'photo');
          if (req.files.signature) addFile(Array.isArray(req.files.signature) ? req.files.signature[0] : req.files.signature, 'signature');
          if (req.files.cv) addFile(Array.isArray(req.files.cv) ? req.files.cv[0] : req.files.cv, 'cv');
        }
        // if single file in req.file
        if (req.file) addFile(req.file, req.file.fieldname || 'file');

        if (filesToInsert.length) {
          // remove previous file rows for this job_application (optional)
          await File.destroy({ where: { job_application_id: jobApplicationId }, transaction: t });
          await File.bulkCreate(filesToInsert, { transaction: t });
        }
      }

      await t.commit();

      // reload saved app with children & files
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
      console.error('saveJobApplication transaction error:', err);
      return res.status(500).json({ error: err.message || 'Save failed' });
    }
  } catch (err) {
    console.error('saveJobApplication top-level error:', err);
    return res.status(500).json({ error: err.message || 'Save failed' });
  }
}

//
// GET single application by id
//
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
    return res.json({ success: true, job_application: jobApp });
  } catch (err) {
    console.error('getJobApplication error:', err);
    return res.status(500).json({ error: err.message });
  }
}

//
// list by applicant
//
async function listByApplicant(req, res) {
  const applicantId = req.params.applicantId || req.query.applicant_id;
  if (!applicantId) return res.status(400).json({ error: 'applicantId required' });

  try {
    const rows = await JobApplication.findAll({
      where: { applicant_id: applicantId },
      order: [['updated_at', 'DESC']]
    });
    return res.json({ success: true, rows });
  } catch (err) {
    console.error('listByApplicant error:', err);
    return res.status(500).json({ error: err.message });
  }
}

async function listByQuery(req, res) {
  try {
    const { job_id, status, applicant_id, limit = 100, offset = 0 } = req.query;
    const where = {};
    if (job_id) where.job_id = job_id;
    if (status) where.status = status;
    if (applicant_id) where.applicant_id = applicant_id;

    const rows = await JobApplication.findAll({
      where,
      order: [['updated_at', 'DESC']],
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10)
    });

    return res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    console.error('listByQuery error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
//
// Delete
//
async function deleteJobApplication(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: 'id required' });
  const t = await sequelize.transaction();
  try {
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
    listByQuery,

  deleteJobApplication
};
