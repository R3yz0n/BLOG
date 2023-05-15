const multer = require('multer')
const express = require('express');
const router = express.Router();


const fileController = require('../controllers/file.controller');
const fileUploader = require('../helpers/fileUploader');
const { checkAuthentication } = require('../middleware/authentication');

router.post('/', fileUploader.upload, fileController.uploadFile);

router.delete('/:filename', fileController.deleteFile);

//app.js

//file routes
router.get('/:filename', fileController.getFile)

router.put('/:filename', fileController.updateFile, fileUploader.upload, fileController.uploadFile)






module.exports = router;
