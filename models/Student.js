const mongoose = require('mongoose')
const { Schema } = mongoose

const studentSchema = new Schema({
  sid: {
    type: String,
    required: true,
    validate: {
      validator: (v = /[0-9]{4}-[0-9]{5}/),
      message: props => `${props.value} is not a valid student id`
    }
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['regular', 'irregular']
  },
  level: {
    type: String,
    required: true,
    enum: ['freshman', 'sophomore', 'junior', 'senior']
  }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
