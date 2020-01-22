const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressValidator = require("express-validator");
const cors = require("cors");
const router = require("./routes/routes");
const mongoose = require("mongoose");

app.use(express());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/nodeJWTServer", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(router);

app.listen(3333);
