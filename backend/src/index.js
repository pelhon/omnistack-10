/*
Métodos HTTP: GET, POST, PUT, DELETE

Tipos de parâmetros:
Query Params: request.query (filtros, ordenação, paginação, etc...)
Route Params: request.params (identificar um recurso na alteração ou remoção)
Body: request.body (dados para a criação ou alteração de um registro)
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const connectionString = 'mongodb+srv://pelhon:A53Un1fJeql02IQQ@cluster-sandbox-lxcmo.gcp.mongodb.net/week10?retryWrites=true&w=majority';
mongoose.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
