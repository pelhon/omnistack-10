const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

// index, show, update, destroy

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.save);

routes.get('/search', SearchController.index);

module.exports = routes;