const mongoose = require('mongoose');
const users = require("./routes/api/users");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.get("/", (req, res) => res.send("Hello Rome"));
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));