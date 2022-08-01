const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

try {
  mongoose.connect(uri);

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
