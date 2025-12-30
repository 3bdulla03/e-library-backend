const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  
  bookId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    required: false,
  }
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review
