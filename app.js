const express = require("express");
const bodyParser = require("body-parser");
const payrollRoutes = require("./controller/payroll.js");

const app = express();

app.use("/payroll", payrollRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept,Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Method", "PUT,POST,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log("here");
  res.status(error.status || 500);
  res.json({
    error: { message: error.message }
  });
});

module.exports = app;
