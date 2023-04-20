const express = require('express');
const models = require('../models')
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs')

const register = async (req, res) => {

    //hashing
    const salt = await bcrypt.genSalt(10)
    //should use try catch here
    const hash = bcrypt.hashSync(req.body.password, salt)

    try {

        //check existing user
        const user = await models.users.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { userName: req.body.userName }
                ]
            }
        });
        // console.log(user.dataValues);

        if (user) {
            console.log('user exists');
            return res.status(409).json({
                message: "User already exists !"
            });
        }
        const userData = {
            email: req.body.email,
            userName: req.body.userName,
            password: hash
        }
        res.status(200).json({
            message: "User created sucessfully !",
        })

    }
    catch (err) {
        res.status(500).json({
            message: "Something went wrong !",
            error: err
        })

    }

}


const login = (req, res) => {


}
const logout = (req, res) => {


}

module.exports = {
    register: register,
    login: login,
    logout: logout,
}