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
app.use("/api/posts", require("./routes/blogRoutes"));
app.use("/api/works", require("./routes/workRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//CREATE SERVER
const port = process.env.BACKEND_PORT || 4000;
app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
