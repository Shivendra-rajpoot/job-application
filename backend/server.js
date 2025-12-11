require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const setupAssociations = require('./models/associations');
const path = require("path");
const listEndpoints = require('express-list-endpoints');

const jobRoutes = require('./routes/jobRoutes');
const AuthRoutes = require('./routes/authRoutes');


const jobApplicationRoutes = require('./routes/jobApplication');


const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json({ limit: '10mb' }));
app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
 

setupAssociations();


app.use('/api/jobs', jobRoutes);

app.use('/api', AuthRoutes);

app.use('/api/personal-info', jobApplicationRoutes);




const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log(' Database connected and synced');
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  console.log(listEndpoints(app));
}).catch((err) => {
  console.error('Database connection failed:', err);
});
