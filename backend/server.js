require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const jobRoutes = require('./routes/jobRoutes');
const AuthRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api/jobs', jobRoutes);

app.use('/api', AuthRoutes);



const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Database connected and synced');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch((err) => {
  console.error('❌ Database connection failed:', err);
});
