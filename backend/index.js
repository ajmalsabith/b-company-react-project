const express= require('express')
const cors= require('cors')
const { default: mongoose } = require('mongoose')
const app= express()





app.use(cors({
    origin:['http//:localhost:3000']
}))


mongoose.connect('mongodb://127.0.0.1:27017/b-Company').then(()=>{
    console.log('database connected');
})

app.listen(5000,()=>{
    console.log('server started')
})