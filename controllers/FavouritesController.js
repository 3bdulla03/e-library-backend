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

module.exports = {
    AddToFavorites
}
