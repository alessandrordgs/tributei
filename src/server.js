const express = require ('express');
const api = express();
const cors =require ('cors')

const routes = require('./router')
require ('./database')

api.use(cors())
api.use(express.json());

api.use(routes);

api.listen(3333)