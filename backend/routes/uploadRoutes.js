const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
router.post('/', upload.single('image'), (req, res) => { 
  if (!req.file || !req.file.path) {
    return res.status(400).json({ message: 'Image upload failed' });
  }
  res.status(200).json({ imageUrl: req.file.path });
});

module.exports = router;
