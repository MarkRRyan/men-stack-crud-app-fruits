require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_URI)
// mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Fruit = require('./models/fruit.js')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')
})

app.listen(3000, () => {
    console.log('Servering up some fruits on 3000 ')
})