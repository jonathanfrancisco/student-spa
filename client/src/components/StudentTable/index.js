import React, { useState, useEffect } from 'react'
import StudentTable from './StudentTable'
import api from '../../api'
import { Modal } from 'antd'
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

  const handleDelete = sid => {
    confirm({
      title: 'Are you sure delete this student?',
      content: 'This action cannot be undone',
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

  return (
    <StudentTable
      students={students}
      getStudents={getStudents}
      onDelete={handleDelete}
    />
  )
}

export default StudentTableContainer
