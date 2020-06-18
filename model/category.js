// db schema design

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// declare collection and types

let Category = new Schema(
  {
    category_id: {
      type: Number,
    },
    name: {
      type: String,
    },
    photo_url: {
      type: String,
    },
  },
  {
    collection: "Category",
  }
);

module.exports = mongoose.model("Category", Category);
