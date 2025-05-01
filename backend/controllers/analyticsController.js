import asyncHandler from 'express-async-handler';
import Feedback from '../models/Feedback.js';

export const getTagFrequency = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find();

  const tagFrequency = feedbacks.reduce((acc, feedback) => {
    feedback.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  res.status(200).json(tagFrequency);
});

export const getPriorityDistribution = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find();

  const priorityDistribution = feedbacks.reduce((acc, feedback) => {
    acc[feedback.priority] = (acc[feedback.priority] || 0) + 1;
    return acc;
  }, { Low: 0, Medium: 0, High: 0 });

  res.status(200).json(priorityDistribution);
});
