const express = require('express');
const PostsControllers = require('./controllers/postControllers')
const CommentsControllers = require('./controllers/commentController')

const routes = express.Router();


routes.get('/post', PostsControllers.list)
routes.post('/post', PostsControllers.create)
routes.get('/post/:id', PostsControllers.show)

routes.get('/comment', CommentsControllers.list)
routes.post('/comment', CommentsControllers.create)

module.exports = routes