const dotenv = require("dotenv").config({ path: "../.env" });

//EXPRESS
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//MONGOOSE
const mongoose = require("mongoose");
const connectToDB = require("./config/connectToDB");
connectToDB();

//BODY PARSER (Express Implementation)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MIDDLEWARE
const { errorHandler } = require("./middleware/errorMW");
app.use(errorHandler);

//ROUTES
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/works", require("./routes/workRoutes"));

//CREATE SERVER
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
