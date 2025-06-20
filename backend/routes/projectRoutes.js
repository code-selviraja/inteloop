import express from 'express';
import {
  createProject,
  getProjects,
  deleteProject,
} from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createProject)
  .get(protect, getProjects); 

router.delete('/:id', protect, deleteProject); 

export default router;
