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
})

const ReadingStatus = mongoose.model("ReadingStatus", readingStatusSchema)

module.exports = ReadingStatus
