import express from 'express';
import {
  createFeedback,
  getFeedbacksByProject,
  deleteFeedback,
} from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', createFeedback);
router.get('/:projectId', getFeedbacksByProject);
router.delete('/:id', deleteFeedback);

export default router;
