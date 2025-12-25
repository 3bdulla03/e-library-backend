const mongoose = require("mongoose")

const favoritesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookId: {
    type: String,
    required: false,
  },
},{
  timestamps:true
})

favoritesSchema.index({ userId: 1, bookId: 1 }, { unique: true })

const Favorites = mongoose.model("Favorites", favoritesSchema)

module.exports = Favorites
