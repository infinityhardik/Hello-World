const express = require("express");
const multer = require("multer");
const path = require("path");
const GridFsStorage = require("multer-gridfs-storage");
const { connection } = require("./mongoDb");

const app = express();
const storage = new GridFsStorage({ db: connection });
const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback("Only images are allowed", false);
    }
    callback(null, true);
  },
}).single("profile");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/profile", upload, (req, res) => {
  res.status(200).send("Upload Successful!");
});

module.exports = { app, storage };
