const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const createError = require('http-errors')
const handleErrors = require('./middlewares/handleErrors')
const studentRouter = require('./routes/student')
const URL = 'mongodb://localhost:27017/student-app'
const app = express()

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(db => {
    console.log('SUCCESSFULLY CONNECTED TO MONGODB SERVER')
  })
  .catch(err => {
    console.log(err)
  })

app.use(logger('dev'))
app.use(express.json())
app.use('/students', studentRouter)

app.use((req, res, next) =>
  next(createError.NotFound({ message: 'resource not found' }))
)
app.use(handleErrors)

module.exports = app
