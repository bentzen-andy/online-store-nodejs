const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorController = require('./controllers/error');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 8080;
corsOrigin = process.env.PRODUCTION
  ? 'https://atb-online-store.herokuapp.com'
  : 'http://localhost:3000';

console.log('PORT');
console.log(PORT);
console.log('corsOrigin');
console.log(corsOrigin);

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: corsOrigin }));

console.log('app.js');
app.use(routes);

app.use(errorController.get404);

app.listen(PORT, () => `Server is up and listening on port: ${PORT}`);
