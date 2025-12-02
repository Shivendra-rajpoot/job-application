// backend/controllers/jobApplicationController.js
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const JobApplication = require('../models/job_application');
const personalInfoschema = require("../validations/personalInfo");

const uploadDir = path.join(__dirname, '..', 'uploads');

function filenameFromUrl(url) {
  if (!url) return null;
  return path.basename(url);
}

/* ============================================================================
   CREATE — SAVE PERSONAL INFO
============================================================================ */
async function savePersonalInfo(req, res) {
  try {
    const errors = {};

   
    const { error } = personalInfoschema.validate(req.body, { abortEarly: false });
    if (error) {
      error.details.forEach(e => {
        errors[e.context.key] = e.message.replace(/"/g, "");
      });
    }

   
    if (!req.files?.photo?.[0]) errors.photo = "Photo is required";
    if (!req.files?.signature?.[0]) errors.signature = "Signature is required";
    if (!req.files?.cv?.[0]) errors.cv = "CV is required";

    // Return errors if any
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ errors });
    }

    // Build payload
    const payload = { ...req.body };

    payload.photo_url = `/uploads/${req.files.photo[0].filename}`;
    payload.signature_url = `/uploads/${req.files.signature[0].filename}`;
    payload.cv_url = `/uploads/${req.files.cv[0].filename}`;

    //Save into database
    const created = await JobApplication.create(payload);
    return res.status(201).json({
      id: created.id,
      message: "Draft saved successfully"
    });

  } catch (err) {
    console.error("savePersonalInfo error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}

/* ============================================================================
   UPDATE — UPDATE PERSONAL INFO
============================================================================ */
async function updatePersonalInfo(req, res) {
  try {
    const id = req.params.id;
    const jobApp = await JobApplication.findByPk(id);

    if (!jobApp) {
      return res.status(404).json({ message: "Record not found" });
    }

    const errors = {};

    // 1️⃣ Joi validation for text fields
    const { error } = personalInfoschema.validate(req.body, { abortEarly: false });
    if (error) {
      error.details.forEach(e => {
        errors[e.context.key] = e.message.replace(/"/g, "");
      });
    }

    // No file required on update — but if present, validate type only
    // (You may extend validation here)

    // If Joi errors exist → return
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ errors });
    }

    // Prepare updates
    const updates = { ...req.body };

    //  Handle file updates
    if (req.files?.photo?.[0]) {
      const old = filenameFromUrl(jobApp.photo_url);
      if (old) {
        const p = path.join(uploadDir, old);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      updates.photo_url = `/uploads/${req.files.photo[0].filename}`;
    }

    if (req.files?.signature?.[0]) {
      const old = filenameFromUrl(jobApp.signature_url);
      if (old) {
        const p = path.join(uploadDir, old);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      updates.signature_url = `/uploads/${req.files.signature[0].filename}`;
    }

    if (req.files?.cv?.[0]) {
      const old = filenameFromUrl(jobApp.cv_url);
      if (old) {
        const p = path.join(uploadDir, old);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      updates.cv_url = `/uploads/${req.files.cv[0].filename}`;
    }

    //  Save update
    await jobApp.update(updates);

    return res.json({
      id: jobApp.id,
      message: "Draft updated successfully"
    });

  } catch (err) {
    console.error("updatePersonalInfo error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}

module.exports = { savePersonalInfo, updatePersonalInfo };
