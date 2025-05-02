import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import authRoutes from "./routes/authRoutes.js"
import { errorHandler } from './middleware/errorHandler.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// Define allowed origins (Add the URL of your frontend here)
const allowedOrigins = ['*']; // Your frontend URL here

// Configure CORS to allow only the specified origin and credentials
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);  // Allow the request
    } else {
      callback(new Error('Not allowed by CORS'));  // Reject the request
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Adjust methods if needed
  credentials: true,  // Allow credentials (cookies, tokens)
}));

app.use(express.json());

// Routes
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use("/api/auth", authRoutes);

// Error Handler
app.use(errorHandler);

// Deployment Setup for Render or static hosting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
