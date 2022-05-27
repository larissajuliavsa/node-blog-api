const express = require('express');
const bodyParser = require('body-parser');

const { throwMiddleware } = require('./middleware/errorMiddleware');
const { loginValidation } = require('./middleware/loginMiddleware');
const { userValidation } = require('./middleware/userMiddleware');
const { categoryValidation } = require('./middleware/categoryMiddleware');
const { validateJWT } = require('./middleware/tokenMiddleware');

const controller = require('./controllers');

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
