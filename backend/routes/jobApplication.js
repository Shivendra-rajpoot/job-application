const express = require("express");
const router = express.Router();

const upload = require("../config/multer");  // ← use custom multer config
const controller = require("../controllers/jobApplicationController");

// define upload fields
const uploadFields = upload.fields([
  { name: "photo", maxCount: 1 },
  { name: "signature", maxCount: 1 },
  { name: "cv", maxCount: 1 }
]);

// CREATE personal info
router.post("/", uploadFields, controller.savePersonalInfo);

// UPDATE personal info
router.put("/:id", uploadFields, controller.updatePersonalInfo);

// GET personal info (existing record)
router.get("/:applicant_id/:job_id", controller.getPersonalInfo);

module.exports = router;

