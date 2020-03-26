const express = require('express');
const routes = require('./routes'); // Requerimento do arquivo de rotas
const cors = require('cors');

const app = express();

app.use(cors());

// Converte o body da página em JSON
app.use(express.json());

app.use(routes);

app.listen(3333);