const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Apagar uma informação
*/

/**
 * Tipos de parâmetros:
 *
 * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação).
 *   /users?name=Jean
 *   request.query
 *
 * Route params: parâmetros utilizados para identificar recursos.
 *  /users/:id
 *  request.params
 *
 * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos.
 *   request.body
 */
