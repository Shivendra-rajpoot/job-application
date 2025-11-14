// controllers/uploadController.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { File } = require('../models/file');

const uploadDir = process.env.UPLOAD_DIR || './uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, uploadDir); },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random()*1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } }); // 20MB

// route handler to be used as middleware: upload.single('file')
async function handleFileUpload(req, res) {
  // expected form-data: fieldName, job_application_id, job_id, file
  const { fieldName, job_application_id, job_id } = req.body;
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  try {
    const rec = await File.create({
      job_application_id: job_application_id,
      job_id: job_id,
      field_name: fieldName,
      filename: req.file.originalname,
      url: req.file.path, // in prod use S3 URL
      mime: req.file.mimetype,
      size: req.file.size
    });
    // optionally update job_applications.photo_url/cv_url etc if you store single file references
    res.json({ success: true, file: rec });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload save failed' });
  }
}

module.exports = { upload, handleFileUpload };
