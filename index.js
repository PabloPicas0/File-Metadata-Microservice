require("dotenv").config();

const express = require("express");
const cors = require("cors");

const multer = require("multer");
const upload = multer();

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  console.log(req);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening to localhost:${listener.address().port}`);
  console.log("Press ctrl + c to exit");
});
