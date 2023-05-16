const express = require('express')
const { posts, users } = require('../models')
const models = require('../models')
const jwt = require('jsonwebtoken')


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
        if (err.name === 'SequelizeDatabaseError') {
            res.status(400).json({ message: 'Invalid query parameter' });
        }
        res.status(500).json({ message: "Something went wrong." })

    }





}
const addPost = (req, res, user) => {
    // console.log(req.body);
    console.log(user.id);
    const postToCreate = {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        uid: req.body.uid,
    }
    console.log(1);
    // console.log(user);
    console.log(postToCreate);

    posts.create(postToCreate).then(result => {
        res.status(201).json(
            {
                message: 'Post created sucessfully',
                post: result
            }
        );
        console.log(result);
        // console.log('sucessfull');



    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'SOmething went wrong',
            error: error
        })
    })



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
        res.status(500).json({
            message: "Something went wrong."
        })

    }



}

const updatePost = async (req, res) => {

    console.log('hello');
    // console.log(1);
    const id = req.params.id;



    try {
        const isExists = await posts.findOne({ where: { id: req.params.id } })
        // console.log(isExists);
        if (!isExists)
            return res.status(404).json({
                message: "Post not found."
            })
    }
    catch (error) {

        res.status(500).json({
            message: "Something went wrong",
            error: error
        })

    }

    const postToUpdate = {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        uid: req.body.uid,
    }
    // console.log(postToCreate);


    try {
        const result = await models.posts.update(postToUpdate, { where: { id: id, uid: req.body.uid } })

        if (!result[0]) {


            return res.status(409).json(
                {
                    message: "Update unsucessful."
                }
            )

            //this also works fine xd

            // console.log('raannnn');
            // const error = new Error()
            // error.message = "Update unsucessfull."
            // error.status = 400;
            // console.log(error);

            // throw error
        }

        res.status(200).json(
            {
                message: "Update sucessfull.",
                post: postToUpdate
            }
        )

    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong.",
            error: error
        })


    }









}

module.exports = {
    addPost: addPost,
    getPost: getPost,
    getPosts: getPosts,
    updatePost: updatePost,
    deletePost: deletePost
}