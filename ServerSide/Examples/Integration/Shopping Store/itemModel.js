const { mongoose } = require("./mongoDb");

const itemSchema = new mongoose.Schema({
  item_name: String,
  item_desc: String,
  image: {
    data: Buffer,
  },
});

module.exports = new mongoose.model("Item", itemSchema);
