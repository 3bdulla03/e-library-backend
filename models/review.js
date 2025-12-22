const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review
