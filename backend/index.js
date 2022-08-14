const dotenv = require("dotenv").config();

//EXPRESS
const express = require("express");
const app = express();

//MONGOOSE
const mongoose = require("mongoose");
const connectToDB = require("./config/connectToDB");
connectToDB();

//BODY PARSER (Express Implementation)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MIDDLEWARE
const { errorHandler } = require("./middleware/errorMW");
app.use(errorHandler);

//ROUTES
app.use("/admin/portfolio/add");

//CREATE SERVER
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
