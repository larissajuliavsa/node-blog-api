const express = require('express');
const bodyParser = require('body-parser');

const { throwMiddleware } = require('./database/middleware/errorMiddleware');
const { loginValidation } = require('./database/middleware/loginMiddleware');
const { userValidation } = require('./database/middleware/userMiddleware');
const { categoryValidation } = require('./database/middleware/categoryMiddleware');
// const { postValidation } = require('./database/middleware/postMiddleware');
const { validateJWT } = require('./database/middleware/tokenMiddleware');

const controller = require('./database/controllers');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// Route Login
app.post('/login', loginValidation, controller.login.getLogin);

// Route User
app.get('/user', validateJWT, controller.user.getUsers);
app.post('/user', userValidation, controller.user.createUser);

// Route User Id
app.get('/user/:id', validateJWT, controller.user.getUserId);

// Route Categories
app.get('/categories', validateJWT, controller.category.getCategories);
app.post('/categories', validateJWT, categoryValidation, controller.category.createCategory);

// Route Post
app.get('/post', validateJWT, controller.post.getPosts);

app.use(throwMiddleware);

module.exports = app;
