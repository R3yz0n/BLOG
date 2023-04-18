const express = require('express');
const db = require('../db')

const register = (req, res) => {
    //check existing user

    const q = 'select * from users where email=? or username=?';

    db.query(q, [req.body.email, req.body.name]);

}
const login = (req, res) => {


}
const logout = (req, res) => {


}