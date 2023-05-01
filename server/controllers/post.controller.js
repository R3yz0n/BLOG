const express = require('express')
const { posts } = require('../models')


const getPosts = async (req, res) => {

    try {

        const query = req.query.category ? { where: { category: req.query.category } } : {};
        console.log('----------');
        console.log(query);

        const allPosts = await posts.findAll(query);
        res.json(allPosts);

    } catch (err) {
        if (err.name === 'SequelizeDatabaseError') {
            res.status(400).json({ message: 'Invalid query parameter' });
        }
        res.status(500).json({ message: 'Something went wrong.' });
    }

}
const getPost = () => {
    const q = req.query.category ? "Select * from posts where cat=?" :
        "Select * from posts"
    db.query(q, [req.query.category], (err, data) => {
        if (err)
            return res.send(err)
    })

}
const addPost = (req, res) => {
    res.json("form controller");


}

const deletePost = () => {


}

const updatePost = () => {


}

module.exports = {
    addPost: addPost,
    getPost: getPost,
    getPosts: getPosts,
    updatePost: updatePost,
    deletePost: deletePost
}