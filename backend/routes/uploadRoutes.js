import express from 'express';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file || !req.file.path) {
    return res.status(400).json({ message: 'Image upload failed' });
  }
  res.status(200).json({ imageUrl: req.file.path });
});

export default router;
