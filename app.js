const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.get("/", (req, res) => res.send("Hello Rome"));
const db = require('./config/keys').monogoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));