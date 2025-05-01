const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    content: {
      type: String,
      required: [true, 'Feedback content is required'],
    },
    imageUrl: {
      type: String,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low',
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', feedbackSchema);
