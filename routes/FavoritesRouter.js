const router = require('express').Router()
const controller = require('../controllers/FavoritesController')

const middleware = require('../middleware')


router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.AddToFavorites
)

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.GetAllFavorites
)

router.delete(
    '/:bookId',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.RemoveFromFavorites
)

module.exports = router