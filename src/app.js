'use strict';

const bodyParse = require('body-parser');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Preço do Metros Quadrados',
            version: '0.0.1'
        },
    },
    apis:['./src/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

const router = express.Router();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const indexRoutes = require('./routes/indexRoutes');


app.use('/', indexRoutes);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use((error,req, res, next) =>{
    res.status(error.httpStatusCode).json('error'+ error);
});

module.exports = app;