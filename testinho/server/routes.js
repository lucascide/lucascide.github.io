const express = require('express');
const route = express.Router();

const mensagemController = require('./controllers/mensagemController')
const respostaController = require('./controllers/respostaController')

route.post('/api/reg', mensagemController.register);
route.get('/api', mensagemController.resgate);
route.post('/api2', respostaController.register);
route.get('/api3', respostaController.resgate)


module.exports = route;