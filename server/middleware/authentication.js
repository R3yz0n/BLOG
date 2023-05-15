const { check } = require('express-validator');
const jwt = require('jsonwebtoken');
const env = require('dotenv')
env.config();



const checkAuthentication = async (req, res, next) => {
    console.log(req.headers.authorization.split(" ")[1]);
    // console.log(req.headers.authorization);
    if (!req.headers.authorization)
        return res.status(403).json({ message: "Unauthorized user." })




    try {
        // const decodedUser = jwt.verify(req.headers.authorization, 'secret')
        console.log('-------');
        console.log(process.env.JWT_SECRET);
        const decodedUser = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)
        console.log(decodedUser);
        console.log('next auth');
        next()


    }
    catch (error) {
        console.log(error.message);

        return res.status(401).json({
            message: "Unauthorized user."
        })

    }




}

module.exports = { checkAuthentication: checkAuthentication }


