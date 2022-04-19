require('dotenv').config();
require('./db/db').connect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorController = require('./controllers/error');
const routes = require('./routes/routes');

const { PORT } = process.env;
const { CORS_ORIGIN } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(routes);
app.use(errorController.get404);
app.listen(PORT, () => `Server is up and listening on port: ${PORT}`);
