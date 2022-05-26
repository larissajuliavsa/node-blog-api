const express = require('express');
const bodyParser = require('body-parser');

const { throwMiddleware } = require('./database/middleware/errorMiddleware');
const { loginValidation } = require('./database/middleware/loginMiddleware');
const { userValidation } = require('./database/middleware/userMiddleware');
const { validateJWT } = require('./database/middleware/tokenMiddleware');

const controller = require('./database/controllers');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.post('/login', loginValidation, controller.login.getLogin);

app.get('/user', validateJWT, controller.user.getUsers);
app.post('/user', userValidation, controller.user.createUser);

app.get('/user/:id', validateJWT, controller.user.getUserId);

app.use(throwMiddleware);

module.exports = app;
