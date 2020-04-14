
const express = require('express');

const server = express();

const carsRouter = require('./cars/carsRouter');

server.use(express.json())

server.use('/cars', carsRouter);

server.listen(5500, ()=> console.log(`\n** running on port 5500 **\n`))


module.exports = server; 