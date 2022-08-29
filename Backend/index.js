const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

const app = express();
require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HomepageRoute
app.get("/", (req, res) => {
  return res.send("Homepage");
});

//Port
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Successfully Connected To MongoDB");
  } catch {
    console.log("Error while Connecting mongodb database");
  }
  console.log(`Server started on Port ${PORT}`);
});
