const express = require('express');
const router = express.Router();
const jobAppCtrl = require('../controllers/jobApplicationController');
router.post('/save', jobAppCtrl.saveJobApplication);
router.get('/job-applications/:id', jobAppCtrl.listByApplicant);
router.get('/job-applications', jobAppCtrl.getJobApplication);
module.exports = router;