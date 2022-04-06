// create an express backend
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

// controller
const userJobsController = require("./controllers.js");

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

//  Routes
app.get("/index", (req, res) => {
  res.send("Invalid Endpoint");
});

// cookie test route
app.get("/test", userJobsController.signup, (req, res) => {
  res.status(200).cookie("user1", "verified").send(res.locals);
});

// get individual user jobs
app.get("/getjobs/:userId", userJobsController.getUserJobs, (req, res) => {
  console.log("Data returned", res.locals);
  res.status(200).send(res.locals);
});

// get cohort user jobs
app.get("/test3", userJobsController.getCohortJobs, (req, res) => {
  res.status(200).send(res.locals);
});

// post jobs
app.post("/addjob", userJobsController.postUserJob, (req, res) => {
  console.log("In add job ", res.locals);
  res.status(200).send(res.locals);
});

// update jobs
app.put("/test5", userJobsController.updateUserJob, (req, res) => {
  res.status(200).send(res.locals);
});

// delete jobs
app.delete("/test6", userJobsController.deleteUserJob, (req, res) => {
  res.status(200).send(res.locals);
});

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
