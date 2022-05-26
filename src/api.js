const express = require('express');
const bodyParser = require('body-parser');

const { throwMiddleware } = require('./database/middleware/errorMiddleware');
const { loginValidation } = require('./database/middleware/loginMiddleware');

const controller = require('./database/controllers');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.post('/login', loginValidation, controller.login.getLogin);

app.use(throwMiddleware);

module.exports = app;
