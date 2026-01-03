const Review = require("../models/review")

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ bookId: req.params.bookId }).populate(
      "userId"
    )
    console.log(reviews)
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({
      message: req.body.message,
      bookId: req.params.bookId,
      userId: req.user.id,
    })
    await review.populate("userId", "name")
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { message: req.body.message },
      { new: true }
    ).populate("userId", "name")
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.id })
    res.send({ msg: "Review Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  CreateReview,
  UpdateReview,
  DeleteReview,
}
