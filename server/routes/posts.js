const express = require('express');
const postController = require('../controllers/post.controller')
const router = express.Router();
router.get('/test', postController.addPost)

module.exports = router;