import React from 'react'
import {
  Table,
  Button,
  Divider,
  Row,
  Col,
  Typography,
  Icon,
  Avatar
} from 'antd'
import CreateStudentFormModal from '../CreateStudentFormModal'
import StudentProfileDrawer from '../StudentProfileDrawer'
import UpdateStudentFormModal from '../UpdateStudentFormModal'
const { Title } = Typography

const StudentTable = props => {
  const { handleCreate, handleDelete, handleUpdate } = props
  const columns = [
    {
      title: '',
      dataIndex: '',
      key: '',
      render: (text, record) =>
        record.gender === 'male' ? (
          <Avatar src="https://freeicons.io/laravel/public/uploads/icons/png/14887127141548234988-128.png" />
        ) : (
          <Avatar src="https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/student_girl-512.png" />
        )
    },
    {
      title: 'Student ID',
      dataIndex: 'sid',
      key: 'sid'
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name'
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name'
    },
    {
      title: 'Action(s)',
      key: 'actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <div>
          <StudentProfileDrawer student={record} />
          <Divider type="vertical" />
          <UpdateStudentFormModal student={record} onUpdate={handleUpdate} />
          <Divider type="vertical" />
          <Button onClick={() => handleDelete(record.sid)} type="danger">
            <Icon type="delete" /> Delete
          </Button>
        </div>
      )
    }
  ]

  return (
    <React.Fragment>
      <Row style={{ marginBottom: 12 }}>
        <Col span={12}>
          <Title level={3}>Students</Title>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <CreateStudentFormModal onCreate={handleCreate} />
        </Col>
      </Row>
      <Table size="small" columns={columns} dataSource={props.students} />
    </React.Fragment>
  )
}

export default StudentTable
