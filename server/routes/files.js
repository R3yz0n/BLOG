const multer = require('multer')
const express = require('express');
const router = express.Router();


const fileController = require('../controllers/file.controller');
const fileUploader = require('../helpers/fileUploader');
const { checkAuthentication } = require('../middleware/authentication');

router.post('/', checkAuthentication, fileUploader.upload, fileController.uploadFile);

router.delete('/:filename', checkAuthentication, fileController.deleteFile);

router.get('/:filename', fileController.getFile)

// suru ma delete tespaxi multer middleware

router.put('/:filename', checkAuthentication, fileUploader.update, fileController.updateFile)






module.exports = router;
