const express = require('express');
const postController = require('../controllers/post.controller')
const router = express.Router();
const checkAuthentication = require('../middleware/authentication')

router.get('/', postController.getPosts)
router.get('/:id', postController.getPost)
router.post('/', checkAuthentication.checkAuthentication, postController.addPost)
router.delete('/:id', checkAuthentication.checkAuthentication, postController.deletePost)
// router.update('/:id', postController.updatePost)

module.exports = router;