const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controllers/error");

const app = express();

const corsOrigin = "http://localhost:3000";
app.use(cors({ origin: corsOrigin }));

const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));

console.log("app.js");
app.use(routes);

app.use(errorController.get404);

app.listen(8080);
