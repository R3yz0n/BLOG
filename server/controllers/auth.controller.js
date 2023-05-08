const express = require('express');
const models = require('../models')
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const joi = require('joi')
const { check, validationResult } = require('express-validator');



const a = [
    check('userName').notEmpty().withMessage("Username is required").matches('^[A-Za-z]+$').withMessage('Please enter valid username')

]

const register = async (req, res) => {

    // Define validation rules
    //server side validation is required to sanitize data for malicious code we mustnt insert directly into DB

    // const schema = joi.object({
    //     userName: joi.string().alphanum().min(3).max(30).required(),
    //     email: joi.string().email().required(),
    //     password: joi.string().min(6).required(),
    // });
    // const { error } = schema.validate(req.body);
    // if (error) {
    //     return res.status(400).json({ message: error.details });
    // }

    const error = validationResult(req.body)
    if (!error.isEmpty()) {
        return res.status(401).json(error)
    }

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
            return res.status(409).json({
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
        const token = jwt.sign({ email: user.email, id: user.id, userName: user.userName, image: user.image }, "secret", { expiresIn: '10s' });


        console.log(user.dataValues);
        const { id, email, userName } = user;

        //gpt days for every subsequent reuest made to server by client it is automatically sent in header
        // res.cookie("access_token", token, { maxAge: 300000, httpOnly: true }).status(200).json({ id, email, userName });
        res.status(200).json({ message: "Login sucessfull !", token: token })





    }
    catch (err) {
        res.status(401).json({
            message: "Something went wrong !",
            error: err
        })

    }




}
const logout = (req, res) => {
    console.log('222222222222222222');
    res.clearCookie("access_token").status(200).json("User logged out !")


}

module.exports = {
    register: register,
    login: login,
    logout: logout,
}