const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const uploadDir = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);  // get extension
    const unique = uuidv4();                      // generate uuid
    cb(null, unique + ext);                       // save with extension
  }
});

const upload = multer({ storage });

module.exports = upload;
