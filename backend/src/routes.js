const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/**
 * Tipos de parâmetros: 
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) [Ex: http://localhost:3333/users?nome=Ronaldo&idade=20] / se obtem usando request.query
 * Route params: Parâmetros utilizados para identificar recursos (id) [Ex: http://localhost:3333/users/1] / se obtem usando request.params
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos (cadastro) / se obtem usando request.body; (obs: o método deve ser app.post e não app.get)
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;