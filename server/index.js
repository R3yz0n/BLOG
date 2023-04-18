const express = require('express')
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')


const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/users', authRoutes);

app.listen(8800, () => {
    console.log('connected');
})
