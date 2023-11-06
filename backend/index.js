const express= require('express')
const cors= require('cors')
const { default: mongoose } = require('mongoose')
const app= express()
const fullroute= require('./Routes/fullRoutes')



app.use(cors({
    origin:['http://localhost:3000']
}))

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use('',fullroute)


mongoose.connect('mongodb://127.0.0.1:27017/b-Company', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected successfully');
})
.catch((error) => {
  console.error('Error connecting to database:', error);
});


app.listen(5000,()=>{
    console.log('server started')
})