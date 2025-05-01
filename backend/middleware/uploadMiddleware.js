import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'feedback_images',
    allowed_formats: ['jpg', 'png', 'jpeg', 'pdf'],
  },
});

const upload = multer({ storage });

export default upload;
