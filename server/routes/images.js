// const express = require('express');
// const router = express.Router();

// const imageController = require('../controllers/image.controller')
// const imageUploader = require('../helpers/imageUploader')
// const { checkAuthentication } = require('../middleware/authentication')

// router.post('/uploads', checkAuthentication, imageUploader.upload.single('file'),



//     imageController.uploadFile);

// module.exports = router;
const multer = require('multer')
const express = require('express');
const router = express.Router();

const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/imageUploader');
const { checkAuthentication } = require('../middleware/authentication');

router.post(
    '/uploads',
    checkAuthentication,
    (req, res, next) => {
        imageUploader.upload.single('file')(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // Multer error occurred (e.g., file size exceeded limit)
                return res.status(400).json({ message: 'Multer error: ' + err.message });
            } else if (err) {
                // Custom error thrown by fileFilter function
                return res.status(400).json({ message: 'File validation error: ' + err.message });
            }
            next();
        });
    },
    imageController.uploadFile
);

module.exports = router;
