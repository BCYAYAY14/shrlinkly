const mongoose = require('mongoose')

const connectionUrl = process.env.dbURL

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

module.exports = connection