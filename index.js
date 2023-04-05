require("dotenv").config();

const express = require("express");
const cors = require("cors");

const multer = require("multer");

const app = express();
const upload = multer({ limits: { fileSize: 1048576 } }); // Limit max file size to 1MB in bytes

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size: size });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening to localhost:${listener.address().port}`);
  console.log("Press ctrl + c to exit");
});
