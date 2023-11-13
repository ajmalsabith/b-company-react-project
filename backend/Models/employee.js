const mongoose= require('mongoose')


const employee= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
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
    dob:{
        type:Date,
        required:true
    },
    desigination: {
        type:String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    leaveMonth: {
        type: Number,
        default:4
    },
    isOff:{
        type:Boolean,
        default:false
    }

})

module.exports= mongoose.model('employeModel',employee)