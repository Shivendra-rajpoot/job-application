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

   
    // const { error } = personalInfoschema.validate(req.body, { abortEarly: false });
    // if (error) {
    //   error.details.forEach(e => {
    //     errors[e.context.key] = e.message.replace(/"/g, "");
    //   });
    // }

   
    if (!req.files || !req.files.photo || !req.files.photo[0]) {
      errors.photo = "Photo is required";
    }
    if (!req.files || !req.files.signature || !req.files.signature[0]) {
      errors.signature = "Signature is required";
    }
    if (!req.files || !req.files.cv || !req.files.cv[0]) {
      errors.cv = "CV is required";
    }

    // Example: optional file-type/size validation (adjust as required)
    if (req.files?.photo?.[0]) {
      const p = req.files.photo[0];
      // allowed mime types
      const imgTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!imgTypes.includes(p.mimetype || p.type)) {
        errors.photo = errors.photo ? errors.photo + " | invalid file type" : "Photo must be JPG/PNG/WEBP";
      }
      // max 2MB
      if (p.size && p.size > 2 * 1024 * 1024) {
        errors.photo = errors.photo ? errors.photo + " | too large" : "Photo must be < 2MB";
      }
    }

    if (req.files?.signature?.[0]) {
      const s = req.files.signature[0];
      const imgTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!imgTypes.includes(s.mimetype || s.type)) {
        errors.signature = errors.signature ? errors.signature + " | invalid file type" : "Signature must be JPG/PNG/WEBP";
      }
      if (s.size && s.size > 2 * 1024 * 1024) {
        errors.signature = errors.signature ? errors.signature + " | too large" : "Signature must be < 2MB";
      }
    }

    if (req.files?.cv?.[0]) {
      const c = req.files.cv[0];
      const pdfTypes = ["application/pdf"];
      if (!pdfTypes.includes(c.mimetype || c.type)) {
        errors.cv = errors.cv ? errors.cv + " | invalid file type" : "CV must be a PDF";
      }
      if (c.size && c.size > 5 * 1024 * 1024) {
        errors.cv = errors.cv ? errors.cv + " | too large" : "CV must be < 5MB";
      }
    }

    // If there are errors, send 422 with the errors object
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ errors });
    }

    // Return errors if any
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ errors });
    }

    // Build payload
    const payload = { ...req.body };
    console.log("=========="+ req.files.photo);
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
    return res.status(500).json({
      message: "Server error",
      // send err.message for dev; remove in production or wrap into generic message
      error: err && err.message ? err.message : "Unknown error"
    });
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
