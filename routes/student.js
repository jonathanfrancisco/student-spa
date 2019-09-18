const express = require('express')
const studentRouter = express.Router()
const studentController = require('../controller/studentController')

studentRouter
  .route('/')
  .get(studentController.allStudents)
  .post(studentController.create)

studentRouter
  .route('/:sid([0-9]{4}-[0-9]{5})') //
  .get(studentController.getStudentByStudentId)
  .put(studentController.updateStudentByStudentId)
  .delete(studentController.deleteStudentByStudentId)

module.exports = studentRouter
