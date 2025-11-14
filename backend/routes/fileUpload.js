const express = require('express');
const router = express.Router();

const uploadCtrl = require('../controllers/uploadController');
router.post('/upload', uploadCtrl.upload.single('file'), uploadCtrl.handleFileUpload);
module.exports = router;