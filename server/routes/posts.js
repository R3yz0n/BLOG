const express = require('express');
const postController = require('../controllers/post.controller')
const router = express.Router();

console.log('posts');
router.get('/', postController.getPosts)
router.get('/:id', postController.getPost)
router.post('/', postController.addPost)
router.delete('/:id', postController.deletePost)
// router.update('/:id', postController.updatePost)

module.exports = router;