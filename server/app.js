const express = require('express')
const bodyParser = require('body-parser')


// const postRoutes = require('./routes/posts')
// const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

const app = express();
app.use(express.json())
app.use(bodyParser.json())
console.log();




// app.use('/api/posts', postRoutes);
// app.use('/api/auth', (postRoutes));
app.use('/api/auth', authRoutes);







module.exports = app;