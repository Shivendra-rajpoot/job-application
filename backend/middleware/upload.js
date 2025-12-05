// backend/middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// upload dir
const UPLOAD_DIR = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// storage with safe filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);  // extract file extension
    const uniqueName = Date.now() + "-" + Math.round(Math.random()*1E9) + ext;
    cb(null, uniqueName);
  }
}); 

// allowed fields set (only these names allowed)
const ALLOWED_FIELD_NAMES = new Set(['photo', 'signature', 'cv']);

// optional: allowed mime types per file
const ALLOWED_MIMES = {
  photo: ['image/jpeg', 'image/png', 'image/webp'],
  signature: ['image/png', 'image/jpeg'],
  cv: ['application/pdf']
};

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB per file
  },
  fileFilter: (req, file, cb) => {
    // Reject files with unexpected field names
    if (!ALLOWED_FIELD_NAMES.has(file.fieldname)) {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', file.fieldname));
    }
    // Optionally validate mime type
    const allowed = ALLOWED_MIMES[file.fieldname];
    if (allowed && !allowed.includes(file.mimetype)) {
      return cb(new Error(`Invalid file type for ${file.fieldname}`));
    }
    cb(null, true);
  }
});

module.exports = upload;
