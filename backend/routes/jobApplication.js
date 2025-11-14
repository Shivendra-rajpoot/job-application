const express = require('express');
const router = express.Router();
const jobAppCtrl = require('../controllers/jobApplicationController');
router.post('/save', jobAppCtrl.saveJobApplication);
router.get('/job-applications/:id', jobAppCtrl.getJobApplication);
module.exports = router;