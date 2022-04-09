require('dotenv').config();
require('./db/db').connect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorController = require('./controllers/error');
const routes = require('./routes/routes');

const { PORT } = process.env;
const { CORS_ORIGIN } = process.env;

console.log('PORT');
console.log(PORT);
console.log('CORS_ORIGIN');
console.log(CORS_ORIGIN);

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: CORS_ORIGIN }));

console.log('app.js');
app.use(routes);

app.use(errorController.get404);

app.listen(PORT, () => `Server is up and listening on port: ${PORT}`);
