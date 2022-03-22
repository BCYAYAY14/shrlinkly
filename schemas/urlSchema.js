const mongoose = require('mongoose')


const URLSchema = new mongoose.Schema({
    url: String,
    urlCode: String,
    createtionDate: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Url', URLSchema)