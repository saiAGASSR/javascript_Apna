const cloudinary = require('cloudinary').v2;
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
    cloud_name : process.env.cloud_name,
    cloud_key  : process.env.cloud_key,
    api_key    : process.env.api_key,
    api_secret : process.env.api_secret
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'listings-Images',
    //   format: async (req, file) => 'png', // supports promises as well
      allowedFormats :['jpg', 'png' , 'jpeg']
    },
  });