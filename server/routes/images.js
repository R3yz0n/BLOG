const express = require('express');
const router = express.Router();

const imageController = require('../controllers/image.controller')
const imageUploader = require('../helpers/imageUploader')
const { checkAuthentication } = require('../middleware/authentication')

router.post('/uploads', checkAuthentication, imageUploader.upload.single('file'), imageController.uploadFile);

module.exports = router;