const { check } = require('express-validator');
const jwt = require('jsonwebtoken');



const checkAuthentication = async (req, res, next) => {

    try {
        // const token = req.headers.authorization.split(" ")[1]
        console.log(req.cookies.access_token);
        // const decodedToken = jwt.verify(token, "secret")
        // console.log(decodedToken);

    }
    catch (error) {
        console.log(error);

    }


}

module.exports = { checkAuthentication: checkAuthentication }