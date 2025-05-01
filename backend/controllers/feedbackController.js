import asyncHandler from 'express-async-handler';
import Feedback from '../models/Feedback.js';

export const createFeedback = asyncHandler(async (req, res) => {
  const { projectId, content, imageUrl, priority, tags } = req.body;

  if (!projectId || !content) {
    res.status(400);
    throw new Error('Project and content are required');
  }

  const feedback = await Feedback.create({ projectId, content, imageUrl, priority, tags });
  res.status(201).json(feedback);
});

export const getFeedbacksByProject = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
  res.status(200).json(feedbacks);
});

export const deleteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findByIdAndDelete(req.params.id);
  if (!feedback) {
    res.status(404);
    throw new Error('Feedback not found');
  }

  res.status(200).json({ message: 'Feedback deleted successfully' });
});
