const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const DrugRoute = require('./routes/drugRoute')

mongoose.connect('mongodb://localhost:27017/pharmaDB')
const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err);
})
db.once('open', ()=>{
    console.log('Database connection established');
})

const app = express()

const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.use('/api/drug', DrugRoute)