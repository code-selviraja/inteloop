// analyticsRoutes.js (ES module version)

import express from 'express';
import { getTagFrequency, getPriorityDistribution } from '../controllers/analyticsController.js';

const router = express.Router();

// Route for tag frequency
router.get('/tag-frequency', getTagFrequency);

// Route for priority distribution
router.get('/priority-distribution', getPriorityDistribution);

export default router;
