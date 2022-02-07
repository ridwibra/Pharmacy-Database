//model/controller/route
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mongoosePaginate = require('mongoose-paginate-v2')
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
    },
    avatar: {
        type: String
    }
}, {timestamps: true})

drugSchema.plugin(mongoosePaginate)

const Drug = mongoose.model('Drug', drugSchema)
module.exports = Drug 