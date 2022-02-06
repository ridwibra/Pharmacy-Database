//model/controller/route
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drugSchema = new Schema({
    name: {
        type: String
    },
    company: {
        type: String 
    },
    country: {
        type: String 
    },
    production: {
        type: Date 
    },
    expiry: {
        type: Date
    },
    price: {
        type: Number
    }
}, {timestamps: true})

const Drug = mongoose.model('Drug', drugSchema)
module.exports = Drug 