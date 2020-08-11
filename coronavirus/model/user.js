const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    middle_name: String,
    last_name: {
        type: String,
        required: true
    },
    member: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', user_schema);
module.exports = User;