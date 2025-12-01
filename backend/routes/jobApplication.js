const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // for production use S3 or other storage
const controller = require('../controllers/jobApplicationController');



router.post('/',controller.savePersonalInfo);
router.put('/:id',controller.updatePersonalInfo);

module.exports = router;

