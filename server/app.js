const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const postRoutes = require('./routes/posts')
// const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

const app = express();
// const cors = require('cors')
// app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.use(cookieParser()) //yo paxi bujinxa hola xd




app.use('/api/posts', postRoutes);
// app.use('/api/auth', (postRoutes));
app.use('/auth', authRoutes);







module.exports = app;