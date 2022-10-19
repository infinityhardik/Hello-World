const express = require("express");
const multer = require("multer");
const app = express();
const bodyParser = require("body-parser");
const { connection } = require("./mongoDb");
const ItemModel = require("./itemModel");
const fs = require("fs");
const path = require("path");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.fieldname);
  },
});
const upload = multer({
  storage,
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add", upload.single("item_image"), async (req, res) => {
  const item = {
    item_name: req.body.item_name,
    item_desc: req.body.item_desc,
    image: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
    },
  };
  const newItem = new ItemModel(item);
  await newItem.save();
  return res.status(200).send("New Item Added!");
});

app.get("/item", async (req, res) => {
  ItemModel.find({ item_name: req.query.item_name })
    .then((data) => {
      return res.json({
        item_name: data[0].item_name,
        item_desc: data[0].item_desc,
        image: data[0].image.data.toString("base64"),
      });
    })
    .catch((err) => res.send("Error: Unknown Item!"));
});

module.exports = { app, storage };
