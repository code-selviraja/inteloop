const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projectRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

// Load env vars
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/feedback', feedbackRoutes);


app.get('/', (req, res) => {
  res.send('Inteloop API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
