const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const studentSchema = new Schema({
  sid: {
    type: String,
    required: [true, 'sid is required'],
    unique: true,
    validate: {
      validator: (v = /\b[0-9]{4}-[0-9]{5}\b/),
      message: props => `${props.value} is not a valid student id`
    }
  },
  first_name: {
    type: String,
    required: true,
    required: [true, 'first_name is required']
  },
  last_name: {
    type: String,
    required: [true, 'last_name is required']
  },
  gender: {
    type: String,
    required: [true, 'gender is required']
  },
  birthday: {
    type: Date,
    required: [true, 'birthday is required']
  },
  status: {
    type: String,
    required: [true, 'status is required'],
    enum: ['regular', 'irregular']
  },
  level: {
    type: String,
    required: [true, 'level is required'],
    enum: ['freshman', 'sophomore', 'junior', 'senior']
  }
})
studentSchema.plugin(uniqueValidator)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
