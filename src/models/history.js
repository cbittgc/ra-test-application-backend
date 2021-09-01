const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
    title: { type: String, default: '' },
    url: { type: String, required: true },
    bookmark: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('History', historySchema)