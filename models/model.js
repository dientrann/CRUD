const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    describe: String,
    // created: {
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('Model', Schema)