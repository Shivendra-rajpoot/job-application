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

   
   

    // Build payload
    const payload = { ...req.body };

  

    //Save into database
    const created = await JobApplication.create(payload);
    return res.status(201).json({
      id: created.id,
      message: "Save successfully"
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

   

    // Prepare updates
    const updates = { ...req.body };
    if (req.files?.photo?.[0]) {
      const oldFile = filenameFromUrl(jobApp.photo_url); // get old photo file
      if (oldFile) {
        const oldPath = path.join(uploadDir, oldFile);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      updates.photo_url = `/uploads/${req.files.photo[0].filename}`;
    }

    // ------------------------------
    // Handle SIGNATURE update
    // ------------------------------
    if (req.files?.signature?.[0]) {
      const oldFile = filenameFromUrl(jobApp.signature_url);
      if (oldFile) {
        const oldPath = path.join(uploadDir, oldFile);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      updates.signature_url = `/uploads/${req.files.signature[0].filename}`;
    }

    // ------------------------------
    // Handle CV update
    // ------------------------------
    if (req.files?.cv?.[0]) {
      const oldFile = filenameFromUrl(jobApp.cv_url);
      if (oldFile) {
        const oldPath = path.join(uploadDir, oldFile);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      updates.cv_url = `/uploads/${req.files.cv[0].filename}`;
    }

    

    //  Save update
    await jobApp.update(updates);

    return res.json({
      id: jobApp.id,
      message: "Save successfully"
    });

  } catch (err) {
    console.error("updatePersonalInfo error:", err);
     return res.json({
      message: "Something went wrong!"
    });

   
  }
}
 //get data from job_id and applicant_id
 async function getPersonalInfo(req, res) {
  try {
    const { applicant_id, job_id } = req.params;

    const data = await JobApplication.getPersonalInfo(applicant_id, job_id);

    if (!data) {
      return res.status(404).json({ message: "No application found" });
    }

    return res.json(data);
  } catch (err) {
    console.error("getPersonalInfo Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = { savePersonalInfo, updatePersonalInfo,getPersonalInfo};
