// backend/middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');   // <-- added

// upload dir
const UPLOAD_DIR = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// storage with safe filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);  // extract .jpg, .png, .pdf
    const uniqueName = uuidv4() + ext;            // <-- use UUID + extension
    cb(null, uniqueName);
  }
});

// allowed fields set (only these names allowed)
const ALLOWED_FIELD_NAMES = new Set(['photo', 'signature', 'cv']);

// allowed mime types
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
    // Reject unexpected field names
    if (!ALLOWED_FIELD_NAMES.has(file.fieldname)) {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', file.fieldname));
    }

    // Validate mime type
    const allowed = ALLOWED_MIMES[file.fieldname];
    if (allowed && !allowed.includes(file.mimetype)) {
      return cb(new Error(`Invalid file type for ${file.fieldname}`));
    }

    cb(null, true);
  }
});

module.exports = upload;

