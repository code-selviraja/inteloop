import asyncHandler from 'express-async-handler';
import Project from '../models/Project.js';

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
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

// @desc    Get all projects for logged-in user
// @route   GET /api/projects
// @access  Private
export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.status(200).json(projects);
});

// @desc    Delete a project by ID
// @route   DELETE /api/projects/:id
// @access  Private
export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!project) {
    res.status(404);
    throw new Error('Project not found or unauthorized');
  }

  await project.deleteOne();
  res.status(200).json({ message: 'Project deleted successfully' });
});
