const mongoose = require("mongoose");
const DB_NAME = "store";
const connection = mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Connection Established");
  })
  .on("connectionError", (err) => {
    console.log(err);
  });

module.exports = { mongoose, connection, DB_NAME };
