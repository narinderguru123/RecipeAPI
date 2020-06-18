// db schema design

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// declare collection and types

let Ingredients = new Schema(
  {
    ingredientId: {
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
    collection: "Ingredients",
  }
);

module.exports = mongoose.model("Ingredients", Ingredients);
