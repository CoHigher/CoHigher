// create an express backend
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");


// controller
const userJobsController = require("/Users/yasir/Desktop/CoHigher/server/controllers.js");


// handle parsing request body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.resolve(__dirname, "../client")));

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get("/index", (req, res) => {
  res.send("Invalid Endpoint");
});

app.get("/test", userJobsController.signup, (req, res) => {
  res.status(200).send(res.locals)
});
// Use Routes

//express error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

// Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});

// Export
module.exports = {
  app,
};

// End of file
