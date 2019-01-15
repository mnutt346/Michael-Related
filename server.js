const express = require("express");
const morgan = require("morgan");
const path = require("path");
//const bodyParser = require('body-parser');
const app = express();
const axios = require("axios");
const port = process.env.PORT || 3000;
const config = require("./config");

//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./public")));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
