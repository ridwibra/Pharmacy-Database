const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

const DrugRoute = require('./routes/drugRoute')
const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb://localhost:27017/pharmaDB')
const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err);
})
db.once('open', ()=>{
    console.log('Database connection established');
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.use('/api/drug', DrugRoute)
app.use('/api', AuthRoute)