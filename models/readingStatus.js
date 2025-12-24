const mongoose = require("mongoose")

const readingStatusSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookId: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["Reading", "Finished", "ToRead", null],
  },
}, {
  timestamps: true
})
readingStatusSchema.index({ userId: 1, bookId: 1 } , { unique: true } )

const ReadingStatus = mongoose.model("ReadingStatus", readingStatusSchema)

module.exports = ReadingStatus
