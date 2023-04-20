const http = require('http');
const port = 8880;
const app = require('./app')
const server = http.createServer(app);
// const { sequelize } = require('./models');






server.listen(port, (req, res) => {
    console.log(`Server running at ${port} port !`)
});

// sequelize.sync({ force: true }).then((result) => {
//     console.log("migration successful")
// }).catch(err => {
//     console.log(err);
// }) 