const express = require('express');
const models = require('../models')
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {


    // return res.json({
    //     mesage: 'good'
    // })
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

        if (user) {
            // console.log('user exists');
            // status code for useralready exits
            return res.status(408).json({
                message: "User already exists !"
            });
        }

    }
    catch (err) {
        res.status(401).json({
            message: "Something went wrong !",
            error: err
        })

    }



    const salt = await bcrypt.genSalt(10)
    // console.log(typeof (req.body.password));
    // console.log(password);
    const hash = bcrypt.hashSync(req.body.password, salt)

    const userData = { email: req.body.email, userName: req.body.userName, password: hash }

    try {
        const user = models.users.create(userData);
        // console.log(user);
        return res.status(200).json({
            message: "User created sucessfully !",
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Something went wrong !",
            error: err
        })

    }



}


const login = async (req, res) => {

    try {

        //check existing user
        console.log('shs');

        const user = await models.users.findOne({
            where: {
                [Op.or]: [
                    // { email: req.body.email },
                    { userName: req.body.userName }
                ]
            }
        });
        // console.log(user);

        if (!user) {
            return res.status(404).json({ message: "User doesn't exists !" });
        }

        const checkPassword = bcrypt.compareSync(req.body.password, user.dataValues.password)
        if (!checkPassword)
            return res.status(400).json({ message: "Wrong username or password !" })

        // if usrnm and pw correct then send jwt toktne
        const token = jwt.sign({ email: user.userName, id: user.id }, "secret");

        const { password, ...other } = user;
        console.log(password);
        console.log(other);

        //gpt days for every subsequent reuest made to server by client it is automatically sent in header
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(other);
        // res.status(200).json({ message: "Login sucessfull !", token: token })





    }
    catch (err) {
        res.status(401).json({
            message: "Something went wrong !",
            error: err
        })

    }




}
const logout = (req, res) => {


}

module.exports = {
    register: register,
    login: login,
    logout: logout,
}