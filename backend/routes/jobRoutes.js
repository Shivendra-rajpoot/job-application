const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');


router.get('/', jobController.getAllJobs);
router.post('/', jobController.createJob);
router.put('/:id', jobController.updateJob);     // Update job
router.delete('/:id', jobController.deleteJob);  // Delete job

router.get('/active', jobController.getActiveJobs);


module.exports = router;
