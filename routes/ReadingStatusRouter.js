const router = require('express').Router()
const controller = require('../controllers/ReadingStatusController')

const middleware = require('../middleware')

router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken ,
    controller.SetReadingStatus
)



module.exports = router