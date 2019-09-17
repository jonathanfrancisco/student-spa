const createError = require('http-errors')
const Student = require('../models/Student')

module.exports.allStudents = async (req, res, next) => {
  try {
    const students = await Student.find({})
    res.json(students)
  } catch (err) {
    next(err)
  }
}

module.exports.create = async (req, res, next) => {
  try {
    const newStudent = new Student(req.body)
    const student = await Student.crea
    console.log('nani dafak', student)
    res.status(201).json(student)
  } catch (err) {
    next(err)
  }
}

module.exports.getStudentByStudentId = async (req, res, next) => {
  try {
    const { sid } = req.params
    const student = await Student.find({ sid })
    if (student) {
      res.json(student)
    }
    return next(new createError.NotFound())
  } catch (err) {
    next(err)
  }
}

module.exports.updateStudentByStudentId = async (req, res, next) => {
  try {
    const { sid } = req.params
    const updatedStudent = req.body
    const student = await Student.find({ sid }, { $set: updatedStudent })
    if (student) {
      res.json(student)
    }
    return next(new createError.NotFound())
  } catch (err) {
    next(err)
  }
}

module.exports.deleteStudentByStudentId = async (req, res, next) => {
  try {
    const { sid } = req.params
    const student = await Student.find({ sid })
    if (student) {
      res.status(204).send()
    }
    return next(new createError.NotFound())
  } catch (err) {
    next(err)
  }
}
