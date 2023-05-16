const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const postRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')
const fileRoutes = require('./routes/files')

const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.use(cookieParser()) //yo paxi bujinxa hola xd



// app.use('/upload', express.static(path.join(__dirname, "uploads")))
// app.use('/uploads',)
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/files', fileRoutes)







module.exports = app;