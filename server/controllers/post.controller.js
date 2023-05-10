const express = require('express')
const { posts, users } = require('../models')
const models = require('../models')
const jwt = require('jsonwebtoken')
const u = require('../')


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
const getPost = async (req, res) => {



    try {
        console.log('-----ss-');
        //it will come in the url the post id
        const post = await models.posts.findOne({
            where: { id: req.params.id },
            include: [{ model: users, as: "user" }]
        });
        console.log(post);
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post)

    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong." })

    }



    // const q = req.query.category ? "Select * from posts where cat=?" :
    //     "Select * from posts"
    // db.query(q, [req.query.category], (err, data) => {
    //     if (err)
    //         return res.send(err)
    // })

}
const addPost = (req, res) => {
    res.json("form controller");


}

const deletePost = async (req, res) => {


    try {
        const postToDelete = await posts.destroy({
            where: { id: req.params.id }
        })
        console.log(postToDelete);
        if (postToDelete)
            res.status(200).json({ message: "Post has been deleted." })
        console.log(postToDelete);
    }
    catch (error) {
        console.log(error);

    }



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