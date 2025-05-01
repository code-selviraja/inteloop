const Feedback = require('../models/Feedback');

// @desc    Create Feedback
// @route   POST /api/feedback
// @access  Public or Private (if needed)
const createFeedback = async (req, res) => {
  const { projectId, content, imageUrl, priority, tags } = req.body;

  if (!projectId || !content) {
    return res.status(400).json({ message: 'Project and content are required' });
  }

  try {
    const feedback = await Feedback.create({ projectId, content, imageUrl, priority, tags });
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get all feedbacks for a project
// @route   GET /api/feedback/:projectId
const getFeedbacksByProject = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete Feedback
// @route   DELETE /api/feedback/:id
const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createFeedback,
  getFeedbacksByProject,
  deleteFeedback,
};
