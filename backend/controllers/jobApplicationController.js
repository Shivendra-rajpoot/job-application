// backend/controllers/jobApplicationController.js
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const JobApplication = require('../models/job_application');

const uploadDir = path.join(__dirname, '..', 'uploads');

/**
 * Simple Joi schema (lenient for drafts). Remove `.allow('', null)` for required fields on final submit.
 */
const schema = Joi.object({
  applicant_id: Joi.any().optional(),
  job_id: Joi.any().optional(),

  full_name: Joi.string().allow('', null),
  gender: Joi.string().allow('', null),
  phone_number: Joi.string().allow('', null),

  email: Joi.string().email().allow('', null),
  date_of_birth: Joi.string().allow('', null),

  father_name: Joi.string().allow('', null),
  nationality: Joi.string().allow('', null),
  mode_of_application: Joi.string().allow('', null),

  current_organization: Joi.string().allow('', null),
  current_organization_type: Joi.string().allow('', null),
  total_emoluments: Joi.string().allow('', null),
  total_experience_years: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null),

  aadhaar_number: Joi.string().allow('', null),
  social_category: Joi.string().allow('', null),
  marital_status: Joi.string().allow('', null),

  corr_address: Joi.string().allow('', null),
  corr_city: Joi.string().allow('', null),
  corr_state: Joi.string().allow('', null),
  corr_country: Joi.string().allow('', null),
  corr_pin: Joi.string().allow('', null),
  corr_phone: Joi.string().allow('', null),

  perm_address: Joi.string().allow('', null),
  perm_city: Joi.string().allow('', null),
  perm_state: Joi.string().allow('', null),
  perm_country: Joi.string().allow('', null),
  perm_pin: Joi.string().allow('', null),
  perm_phone: Joi.string().allow('', null),

  police_station: Joi.string().allow('', null),

   photo: Joi.any(),   
  signature: Joi.any(),
  cv: Joi.any()
});

/** Helper: get basename from stored url (like '/uploads/abc.png' or 'uploads/abc.png') */
function filenameFromUrl(url) {
  if (!url) return null;
  return path.basename(url);
}

/** CREATE (save draft) */
async function savePersonalInfo(req, res) {
  try {
    // validate body (multipart fields are strings)
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errs = {};
      error.details.forEach(d => (errs[d.path.join('.')] = d.message));
      return res.status(422).json({ errors: errs });
    }
     console.log(req.files);

    
    const payload = {
      applicant_id: req.body.applicant_id,
      job_id: req.body.job_id,
      full_name: req.body.full_name || null,
      gender: req.body.gender || null,
      phone_number: req.body.phone_number || null,
    
      email: req.body.email || null,
      date_of_birth: req.body.date_of_birth || null,
      father_name: req.body.father_name || null,
      nationality: req.body.nationality || null,
      mode_of_application: req.body.mode_of_application || null,
      current_organization: req.body.current_organization || null,
      
      total_emoluments: req.body.total_emoluments || null,
      total_experience_years: req.body.total_experience_years || null,
      aadhaar_number: req.body.aadhaar_number || null,
      social_category: req.body.social_category || null,
      marital_status: req.body.marital_status || null,

      corr_address: req.body.corr_address || null,
      corr_city: req.body.corr_city || null,
      corr_state: req.body.corr_state || null,
      corr_country: req.body.corr_country || null,
      corr_pin: req.body.corr_pin || null,
      corr_phone: req.body.corr_phone || null,

      perm_address: req.body.perm_address || null,
      perm_city: req.body.perm_city || null,
      perm_state: req.body.perm_state || null,
      perm_country: req.body.perm_country || null,
      perm_pin: req.body.perm_pin || null,
      perm_phone: req.body.perm_phone || null,

      police_station: req.body.police_station || null
    };
     
    if (req.files) {
  if (req.files.photo && req.files.photo[0]) payload.photo_url = `/uploads/${req.files.photo[0].filename}`;
  if (req.files.signature && req.files.signature[0]) payload.signature_url = `/uploads/${req.files.signature[0].filename}`;
  if (req.files.cv && req.files.cv[0]) payload.cv_url = `/uploads/${req.files.cv[0].filename}`;
}

    
   

    const created = await JobApplication.create(payload);
    return res.status(201).json({ id: created.id, message: 'Draft saved' });
  } catch (err) {
    console.error('savePersonalInfo error:', err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
}

/** UPDATE (update draft) */
async function updatePersonalInfo(req, res) {
  try {
    const id = req.params.id;
    const jobApp = await JobApplication.findByPk(id);
    if (!jobApp) return res.status(404).json({ message: 'Draft not found' });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errs = {};
      error.details.forEach(d => (errs[d.path.join('.')] = d.message));
      return res.status(422).json({ errors: errs });
    }

    // prepare updates — use provided values or keep existing
    const updates = {
      applicant_id: req.body.applicant_id ?? jobApp.applicant_id,
      job_id: req.body.job_id ?? jobApp.job_id,
      full_name: req.body.full_name ?? jobApp.full_name,
      gender: req.body.gender ?? jobApp.gender,
      phone_number: req.body.phone_number ?? jobApp.phone_number,
      alt_phone_number: req.body.alt_phone_number ?? jobApp.alt_phone_number,
      email: req.body.email ?? jobApp.email,
      date_of_birth: req.body.date_of_birth ?? jobApp.date_of_birth,
      father_name: req.body.father_name ?? jobApp.father_name,
      nationality: req.body.nationality ?? jobApp.nationality,
      mode_of_application: req.body.mode_of_application ?? jobApp.mode_of_application,
      current_organization: req.body.current_organization ?? jobApp.current_organization,
      current_organization_type: req.body.current_organization_type ?? jobApp.current_organization_type,
      total_emoluments: req.body.total_emoluments ?? jobApp.total_emoluments,
      total_experience_years: req.body.total_experience_years ?? jobApp.total_experience_years,
      aadhaar_number: req.body.aadhaar_number ?? jobApp.aadhaar_number,
      social_category: req.body.social_category ?? jobApp.social_category,
      marital_status: req.body.marital_status ?? jobApp.marital_status,

      corr_address: req.body.corr_address ?? jobApp.corr_address,
      corr_city: req.body.corr_city ?? jobApp.corr_city,
      corr_state: req.body.corr_state ?? jobApp.corr_state,
      corr_country: req.body.corr_country ?? jobApp.corr_country,
      corr_pin: req.body.corr_pin ?? jobApp.corr_pin,
      corr_phone: req.body.corr_phone ?? jobApp.corr_phone,

      perm_address: req.body.perm_address ?? jobApp.perm_address,
      perm_city: req.body.perm_city ?? jobApp.perm_city,
      perm_state: req.body.perm_state ?? jobApp.perm_state,
      perm_country: req.body.perm_country ?? jobApp.perm_country,
      perm_pin: req.body.perm_pin ?? jobApp.perm_pin,
      perm_phone: req.body.perm_phone ?? jobApp.perm_phone,

      police_station: req.body.police_station ?? jobApp.police_station
    };

    // handle replaced files: delete old files (if present) and set new urls
    if (req.files) {
      if (req.files.photo && req.files.photo[0]) {
        const oldPhoto = filenameFromUrl(jobApp.photo_url);
        if (oldPhoto) {
          const oldPath = path.join(uploadDir, oldPhoto);
          if (fs.existsSync(oldPath)) {
            try { fs.unlinkSync(oldPath); } catch (e) { console.warn('Could not delete old photo', e); }
          }
        }
        updates.photo_url = `/uploads/${req.files.photo[0].filename}`;
      }

      if (req.files.signature && req.files.signature[0]) {
        const oldSig = filenameFromUrl(jobApp.signature_url);
        if (oldSig) {
          const oldPath = path.join(uploadDir, oldSig);
          if (fs.existsSync(oldPath)) {
            try { fs.unlinkSync(oldPath); } catch (e) { console.warn('Could not delete old signature', e); }
          }
        }
        updates.signature_url = `/uploads/${req.files.signature[0].filename}`;
      }

      if (req.files.cv && req.files.cv[0]) {
        const oldCv = filenameFromUrl(jobApp.cv_url);
        if (oldCv) {
          const oldPath = path.join(uploadDir, oldCv);
          if (fs.existsSync(oldPath)) {
            try { fs.unlinkSync(oldPath); } catch (e) { console.warn('Could not delete old cv', e); }
          }
        }
        updates.cv_url = `/uploads/${req.files.cv[0].filename}`;
      }
    }

    await jobApp.update(updates);
    return res.json({ id: jobApp.id, message: 'Draft updated' });
  } catch (err) {
    console.error('updatePersonalInfo error:', err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
}

module.exports = { savePersonalInfo, updatePersonalInfo };
