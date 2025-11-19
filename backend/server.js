require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const setupAssociations = require('./models/associations');
const path = require("path");
const jobRoutes = require('./routes/jobRoutes');
const AuthRoutes = require('./routes/authRoutes');
const fileUploadRoutes = require('./routes/fileUpload');
const jobApplicationRoutes = require('./routes/jobApplication');


const app = express();


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


setupAssociations();


app.use('/api/jobs', jobRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use('/api/upload', fileUploadRoutes);
app.use('/api', AuthRoutes);
 
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log(' Database connected and synced');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Database connection failed:', err);
});
