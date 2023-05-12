const { check } = require('express-validator');
const jwt = require('jsonwebtoken');



const checkAuthentication = async (req, res, next) => {
    // console.log(req.headers.authorization.split(" ")[1]);
    if (!req.headers.authorization)
        return res.status(403).json({ message: "Unauthorized user." })




    try {
        // const decodedUser = jwt.verify(req.headers.authorization, 'secret')
        const decodedUser = jwt.verify(req.headers.authorization.split(" ")[1], 'secret')
        // console.log(decodedUser);
        console.log('next auth');
        next();


    }
    catch (error) {
        console.log(error.message);

        return res.status(401).json({
            message: "Unauthorized user."
        })

    }

    // return res.send({
    //     code: 403,
    //     message: 'Unauthorized user.'
    // })

    // res.status()


    // try {
    //     // const token = req.headers.authorization.split(" ")[1]
    //     // console.log(req.cookies.access_token);
    //     // console.log(req.headers);
    //     // const decodedToken = jwt.verify(token, "secret")":3,"title":"Sunday","description":"In this example, we have a JWT token and a secret key. We call jwt.verify() with these two parameters. If the token is valid and can be decoded using the secret key, the decoded data will be passed to the callback function as the second parameter. If the token is invalid or cannot be decoded, an error will be passed as the first parameter to the callback function.","image":"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","category":"science","uid":3,"createdAt":"2023-05-06T10:29:34.000Z","updatedAt":"2023-05-06T10:29:34.000Z","user":{"id":3,"email":"test@test.com","userName":"test","password":"$2a$10$jgUpbIsg4JV9fHNh5dJMjOUFFPpBaFq1SIU5bgpCwRHlv.wL2gNmG","image":"https://images.unsplash.com/photo-1680009195045-506cdd3f2b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80","createdAt":"2023-05-04T07:55:57.000Z","updatedAt":"2023-05-04T07:55:57.000Z"}}
    //     // console.log(decodedToken);

    // }
    // catch (error) {
    //     console.log(error);

    // }


}

module.exports = { checkAuthentication: checkAuthentication }


