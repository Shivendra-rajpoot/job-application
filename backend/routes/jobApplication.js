// routes/jobApplications.js
const express = require('express');
const router = express.Router();
const multer = require('multer');

// local uploads directory (dev). For production, use S3 pipeline.
const upload = multer({ dest: 'uploads/' });

// simple controller example (replace with your real controller)
router.post('/job-applications', upload.fields([{ name: 'photo' }, { name: 'signature' }, { name: 'cv' }]), async (req, res) => {
  console.log('POST /api/job-applications called, query:', req.query, 'body keys:', Object.keys(req.body));
  // minimal echo response so front-end sees something
  return res.json({
    success: true,
    received: {
      query: req.query,
      body: req.body,
      files: Object.keys(req.files || {})
    },
    job_application: {
      id: 123, // in real code this will come from DB
      job_id: req.body.job_id || null
    }
  });
});

// support update via POST + _method=PUT (your frontend uses that pattern for file uploads)
router.post('/job-applications/:id', upload.fields([{ name: 'photo' }, { name: 'signature' }, { name: 'cv' }]), async (req, res) => {
  console.log('POST (update) /api/job-applications/:id called, id=', req.params.id, 'query:', req.query);
  return res.json({ success: true, updatedId: req.params.id, body: req.body, files: Object.keys(req.files||{}) });
});

router.get('/job-applications/:id', (req, res) => {
  console.log('GET /api/job-applications/:id called id=', req.params.id);
  return res.json({ success: true, job_application: { id: req.params.id } });
});

router.get('/job-applications/by-applicant', (req, res) => {
  // used by frontend to load draft
  console.log('GET /api/job-applications/by-applicant', req.query);
  return res.status(404).json({ error: 'Not implemented in demo' });
});

module.exports = router;
