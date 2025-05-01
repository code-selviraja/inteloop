const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'drhjcnppx', 
    api_key: '527984919526119', 
    api_secret: 'sm0wlklhnQUJBwEdetuETvUlh8k'
});

module.exports = cloudinary;
