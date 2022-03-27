const express = require('express');
const app = express();
require('dotenv').config();
const port = 5125;
const host = 'localhost'


const server = require('http').createServer(app);
var cors = require('cors')
const io = require('socket.io')(server, { cors: { origin: "*" } })
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/images'));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization, multipart/form-data');
    next();
});

app.listen(port, host, () => {
    console.log(`Server is listening ${host}:${port}`);
    require('./app')(app, {});
});

app.use(express.json());
