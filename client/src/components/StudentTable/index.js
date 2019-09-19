import React, { useState, useEffect } from 'react'
import StudentTable from './StudentTable'
import api from '../../api'
import { Modal, notification } from 'antd'
const { confirm } = Modal

const StudentTableContainer = () => {
  const [students, setStudents] = useState([])
  const getStudents = () => {
    api.getStudents().then(({ data }) => {
      setStudents(data)
    })
  }
  useEffect(() => {
    getStudents()
  }, [])

  const handleCreate = values => {
    api
      .createStudent(values)
      .then(response => {
        console.log(response)
        if (response.status === 201) {
          console.log('gago')
          notification['success']({
            message: 'New Student',
            description: 'New student has been successfully created'
          })
          getStudents()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDelete = sid => {
    confirm({
      title: 'Delete Student',
      content:
        'Are you sure you want to delete this student? This action cannot be undone',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        api
          .deleteStudentByStudentId(sid)
          .then(response => {
            if (response.status === 204) {
              getStudents()
            }
          })
          .catch(err => {
            console.log(err.respose)
          })
      },
      onCancel() {}
    })
  }

  const handleUpdate = (sid, values) => {
    api
      .updateStudentByStudentId(sid, values)
      .then(response => {
        if (response.status === 200) {
          notification['success']({
            message: 'Update Student',
            description: 'Student has been successfully updated'
          })
          getStudents()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <StudentTable
      students={students}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  )
}

export default StudentTableContainer
