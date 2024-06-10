const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactSubject: {
        type: String,
        required: true
    },
    contactMessage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contact', contactSchema)