//EXPRESS
import { Express } from "express";
const app = Express();

//MONGOOSE
import mongoose from "mongoose";
import connectToDB from "./connect/connectToDB";
connectToDB();

//BODY PARSER (Express Implementation)
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/admin/portfolio/add");

//CREATE SERVER
app.listen(process.env.PORT || 4000, () => {
  console.log("Server started");
});
