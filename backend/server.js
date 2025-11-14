require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const jobRoutes = require('./routes/jobRoutes');
const AuthRoutes = require('./routes/authRoutes');
const fileUploadRoutes= require('./routes/fileUpload');
const jobApplicationRoutes= require('./routes/jobApplication');
const bodyParser = require('body-parser');
const setupAssociations = require('./models/associations');
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
setupAssociations();
 app.use('/api/jobs', jobRoutes);

 app.use('/api/job-applications', jobApplicationRoutes);

 app.use('/api/upload', fileUploadRoutes);
 app.use('/api', AuthRoutes);

//app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Database connected and synced');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch((err) => {
  console.error('❌ Database connection failed:', err);
});
