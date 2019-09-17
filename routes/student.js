const express = require('express')
const studentRouter = express.Router()
const studentController = require('../controller/studentController')

studentRouter
  .route('/')
  .get(studentController.allStudents)
  .post(studentController.create)
  .put(studentController.updateStudentByStudentId)
  .delete(studentController.deleteStudentByStudentId)

module.exports = studentRouter
