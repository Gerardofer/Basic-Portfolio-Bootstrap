const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

var MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://heroku_d1swb4n2:vcckbuvaop1slgnsd0tjrhgfpm@ds239359.mlab.com:39359/heroku_d1swb4n2";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// mongoose.connect("mongodb://localhost/gerardoProfile");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
