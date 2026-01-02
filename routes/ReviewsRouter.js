const router = require('express').Router()
const controller = require('../controllers/ReviewsController')
const middleware = require('../middleware')

router.get('/:bookId', 
    middleware.stripToken,
)

router.post('/:bookId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateReview
)

router.put('/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateReview
)

router.delete('/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteReview
)

module.exports = router