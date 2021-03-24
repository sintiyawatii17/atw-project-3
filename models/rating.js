const mongoose = require('mongoose')
const { Schema } = mongoose

const ratingSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    isirating: String
}, { timestamps: true })

const rating = mongoose.model('Rating', ratingSchema)
module.exports = Rating