const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title"],
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  stars: {
    type: Number,
  },
  category: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Books", BooksSchema);
