const express = require('express')
const router = express.Router()

const ratingcontroller = require('../controllers/rating')

 router.route('/ratings')
 	.get(ratingcontroller.index)
 	.post(ratingcontroller.store)

router.get('/ratings',ratingcontroller.index)

module.exports = router