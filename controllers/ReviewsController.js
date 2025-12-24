const { Review } = require('../models')

const GetReviews = async (req, res) => {
    try {
        const review = await Review.find().populate('user')
        res.send(review)}
    catch (error) {
        throw error
    }    
}

const CreateReview = async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.send(review)
    } catch (error) {
        throw error
    }
}

const UpdateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
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
    DeleteReview
}