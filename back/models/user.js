const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        require: true,
        select: false
    },

    phone: {
        type: String,
        require: true
    },
    
    level: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("User", userSchema);