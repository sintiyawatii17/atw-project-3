const { v4: uuidv4 } = require('uuid')

const rating = require('../models/rating')

module.exports = {
	index: function(request, response){
		response.render('pages/rating/index', {ratings: ratings})
	},

}