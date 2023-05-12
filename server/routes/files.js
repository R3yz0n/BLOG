const multer = require('multer')
const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file.controller');
const fileUploader = require('../helpers/fileUploader');
const { checkAuthentication } = require('../middleware/authentication');

router.post('/uploads', checkAuthentication, fileUploader.upload, fileController.uploadFile);

module.exports = router;
