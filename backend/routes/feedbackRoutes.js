const express = require('express');
const {
  createFeedback,
  getFeedbacksByProject,
  deleteFeedback,
} = require('../controllers/feedbackController');

const router = express.Router();

router.post('/', createFeedback);
router.get('/:projectId', getFeedbacksByProject);
router.delete('/:id', deleteFeedback);

module.exports = router;
