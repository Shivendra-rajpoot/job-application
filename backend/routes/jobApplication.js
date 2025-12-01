const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // for production use S3 or other storage
const controller = require('../controllers/jobApplicationController');
const uploadFields = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'cv', maxCount: 1 }
]);



router.post('/', uploadFields, controller.savePersonalInfo);
router.put('/:id', uploadFields, controller.updatePersonalInfo);

module.exports = router;

