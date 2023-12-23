const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const mobileSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        require: true
    },
    memory: {
        type: Number,
        require: true
    },
    storage: {
        type: Object,
        default: {}
    },
    os: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
})

const Mobile = model('Mobile', mobileSchema);

module.exports = Mobile;