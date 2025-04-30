const Project = require('../models/Project');

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject = async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Project name is required' });
  }

  try {
    const project = await Project.create({
      name,
      description,
      user: req.user.id,
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Additional handlers can be added here (getAll, update, delete)

module.exports = {
  createProject,
};
