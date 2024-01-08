const mongoose = require('mongoose')

const projectSchema= new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    pcname:{
        type:String,
        required:true
    },
    pcon:{
        type:String,
        required:true
    },
    psdate:{
        type:Date,
        required:true
    },
    pedate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        default:'comingsoon'
    },
    is_block:{
        type:Boolean,
        default:false
    }
    

})

module.exports = mongoose.model('projects',projectSchema)