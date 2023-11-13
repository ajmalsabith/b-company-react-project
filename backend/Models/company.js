const mongoose = require('mongoose');

const newcompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:''
    },
    about: {
        type: String,
        required: true
    },
    phone: {
        type: Number, 
        required: true
    },
    email: {
        type: String,
        default:'bcompany@gmail.com'
    },
    password: {
        type: String,
        default:'bcompany@123'
    },
    isOff: {
        type: Boolean,
        default: false
    }
});

const company = mongoose.model('companyDetails',newcompanySchema);

module.exports = company;
