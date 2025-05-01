// aiRoutes.js (ES module version)

import express from 'express';
import { generateInsights } from '../controllers/aiController.js';

const router = express.Router();

router.post('/generate-insights', generateInsights);

export default router;
