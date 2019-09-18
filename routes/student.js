const createError = require('http-errors')
const express = require('express')
const studentRouter = express.Router()
const studentController = require('../controller/studentController')

studentRouter
  .route('/')
  .get(studentController.allStudents)
  .post(studentController.create)

studentRouter
  .route('/:sid')
  .all((req, res, next) => {
    const { sid } = req.params
    if (!/\b[0-9]{4}-[0-9]{5}\b/.test(sid)) {
      return next(new createError.BadRequest({ message: 'invalid sid' }))
    }
    next()
  })
  .get(studentController.getStudentByStudentId)
  .put(studentController.updateStudentByStudentId)
  .delete(studentController.deleteStudentByStudentId)

module.exports = studentRouter
