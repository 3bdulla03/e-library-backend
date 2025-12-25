const router = require('express').Router()
const controller = require('../controllers/ReadingStatusController')

const middleware = require('../middleware')

router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.SetReadingStatus
)

router.get(
    '/:bookId' ,
    middleware.stripToken,
    middleware.verifyToken ,
    controller.GetBookStatus
)

router.delete(
    '/:bookId' ,
    middleware.stripToken,
    middleware.verifyToken ,
    controller.DeleteReadingStatus
)

module.exports = router