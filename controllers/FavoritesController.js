const Favorites = require('../models/favorites')

const AddToFavorites = async (req, res) => {
    try {
        const { bookId } = req.body
        const userId = req.user.id

        const existingFavorite = await Favorites.findOne({ userId, bookId })
        if (existingFavorite) {
            return res.status(400).send({ msg: 'Book already in favorites' })
        }

        const favorite = await Favorites.create({ userId, bookId })
        res.send({ msg: 'Added to favorites', data: favorite })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'Failed to add to favorites' })
    }
}

const GetAllFavorites = async (req, res) => {

    try {
        const userId = req.user.id

        const favorites = await Favorites.find({ userId })
        res.send(favorites)

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'Failed to get favorites' })
    }
}

const RemoveFromFavorites = async (req, res) => {
    try {
        const { bookId } = req.params
        const userId = req.user.id

        const deleted = await Favorites.findOneAndDelete({ userId, bookId })

        if (!deleted) {
            return res.status(404).send({ msg: 'Favorite not found' })
        }

        res.send({ msg: 'Removed from favorites', data: deleted })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'Failed to remove from favorites' })
    }

}

module.exports = {
    AddToFavorites,
     GetAllFavorites,
    RemoveFromFavorites
}
