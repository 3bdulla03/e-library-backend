const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
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
},{
  timestamps:true
})

reviewSchema.index({ userId: 1, bookId: 1 }, { unique: true })


const Review = mongoose.model("Review", reviewSchema)

module.exports = Review
