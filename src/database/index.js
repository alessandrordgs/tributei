const Sequelize = require ('sequelize');
const dbConfig = require ('../config/db');

const Posts = require('../models/posts')
const Comments = require('../models/comments')


const connection = new Sequelize (dbConfig);

Posts.init(connection);

module.exports = connection; 