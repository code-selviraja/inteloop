// analyticsController.js (ES module version)

import Feedback from '../models/Feedback.js';

export const getTagFrequency = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    // Calculate tag frequency
    const tagFrequency = feedbacks.reduce((acc, feedback) => {
      feedback.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {});

    res.status(200).json(tagFrequency);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tag frequency', error: err });
  }
};

export const getPriorityDistribution = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    // Calculate priority distribution
    const priorityDistribution = feedbacks.reduce((acc, feedback) => {
      acc[feedback.priority] = (acc[feedback.priority] || 0) + 1;
      return acc;
    }, { Low: 0, Medium: 0, High: 0 });

    res.status(200).json(priorityDistribution);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching priority distribution', error: err });
  }
};
