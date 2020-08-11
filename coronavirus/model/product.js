const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    sanitizer: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    toiletpaper: {
        type: String,
        required: true
    },
    facialmask: {
        type: String,
        required: true
    },
    disinfectant: {
        type: String,
        required: true
    },
    themometer: {
        type: String,
        required: true
    },
});

const Product = mongoose.model('product', product_schema);
module.exports = Product;