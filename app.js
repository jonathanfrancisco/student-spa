const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const handleErrors = require('./middlewares/handleErrors')
const app = express()

const studentRouter = require('./routes/student')

const URL = 'mongodb://localhost:27017/student-app'
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => {
    console.log('SUCCESSFULLY CONNECTED TO MONGODB SERVER')
  })

app.use(logger('dev'))
app.use(express.json())

app.use('/students', studentRouter)

// errors handler
app.use(handleErrors)

module.exports = app
