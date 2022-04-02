const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let port = 8080;
let corsOrigin = 'http://localhost:3000';
if (process.env.PRODUCTION) {
  port = 443;
  corsOrigin = 'https://atb-online-store.herokuapp.com';
}

const errorController = require('./controllers/error');

const app = express();

app.use(cors({ origin: corsOrigin }));

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));

console.log('app.js');
app.use(routes);

app.use(errorController.get404);

app.listen(8080);
