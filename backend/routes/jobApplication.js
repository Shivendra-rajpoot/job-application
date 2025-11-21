// backend/routes/jobApplication.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const jobAppCtrl = require('../controllers/jobApplicationController');

// simple multer (only used for POST); adapt as needed
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname,'..','uploads')),
  filename: (req, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });

// create or update (multipart/form-data allowed)
router.post('/job-applications', auth, upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'cv', maxCount: 1 }
]), jobAppCtrl.saveJobApplication);

// list with filters: ?job_id=1&status=draft&applicant_id=5
router.get('/job-applications', jobAppCtrl.listByQuery);

// convenience route for drafts by job (same as /job-applications?job_id=1&status=draft)
router.get('/job-applications/draft', jobAppCtrl.listByQuery);

// get single
router.get('/job-applications/:id', jobAppCtrl.getJobApplication);

// delete
router.delete('/job-applications/:id', auth, jobAppCtrl.deleteJobApplication);

module.exports = router;
