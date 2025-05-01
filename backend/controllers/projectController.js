import asyncHandler from 'express-async-handler';
import Project from '../models/Project.js';

export const createProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Project name is required');
  }

  const project = await Project.create({
    name,
    description,
    user: req.user.id,
  });

  res.status(201).json(project);
});