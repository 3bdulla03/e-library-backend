const router = require('express').Router()
const controller = require('../controllers/FavoritesController')

const middleware = require('../middleware')


router.post(
    '/Favorites',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.AddToFavorites
)

router.get(
    '/Favorites',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.GetAllFavorites
)

router.delete(
    '/Favorites/:bookId',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.RemoveFromFavorites
)

module.exports = router