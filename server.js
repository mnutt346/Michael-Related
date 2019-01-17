const express = require("express");
const morgan = require("morgan");
const path = require("path");
//const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./public")));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
