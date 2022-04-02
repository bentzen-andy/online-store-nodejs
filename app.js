const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
corsOrigin = process.env.PRODUCTION
  ? 'https://atb-online-store.herokuapp.com'
  : 'http://localhost:3000';

console.log('PORT');
console.log(PORT);
console.log('corsOrigin');
console.log(corsOrigin);

const errorController = require('./controllers/error');

const app = express();

app.use(cors({ origin: corsOrigin }));

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));

console.log('app.js');
app.use(routes);

app.use(errorController.get404);

app.listen(PORT, () => `Server is up and listening on port: ${PORT}`);
