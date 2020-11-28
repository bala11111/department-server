const mongoose = require('mongoose');

// This is the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    department : {
        type : String,
        required: true,
        enum : ['dept1', 'dept2']
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;