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
    const newStudent = await new Student(req.body)
    const error = newStudent.validateSync()
    if (error) {
      return next(new createError.BadRequest(error.errors))
    }
    const student = await newStudent.save()
    res.status(201).json(student)
  } catch (err) {
    if (err.errors.sid) {
      return next(new createError.BadRequest(err.errors))
    }
    next(err)
  }
}

module.exports.getStudentByStudentId = async (req, res, next) => {
  try {
    const { sid } = req.params
    const student = await Student.findOne({ sid })
    if (student === null) {
      return next()
    }
    res.json(student)
  } catch (err) {
    next(err)
  }
}

module.exports.updateStudentByStudentId = async (req, res, next) => {
  try {
    const { sid } = req.params
    const studentToUdate = await Student.findOne({ sid })
    if (studentToUdate === null) {
      return next()
    }

    const updatedStudent = new Student(req.body)
    const error = updatedStudent.validateSync()
    if (error) {
      return next([new createError.BadRequest(error.errors)])
    }

    const student = await Student.findOneAndUpdate(
      { sid },
      { $set: updatedStudent },
      true
    )
    res.json(student)
  } catch (err) {
    if (err.errors.sid) {
      return next(new createError.BadRequest(err.errors))
    }
    next(err)
  }
}

module.exports.deleteStudentByStudentId = async (req, res, next) => {
  try {
    const { sid } = req.params
    const studentToDelete = await Student.findOne({ sid })
    if (studentToDelete === null) {
      return next()
    }
    await Student.findOneAndDelete({ sid })
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}
