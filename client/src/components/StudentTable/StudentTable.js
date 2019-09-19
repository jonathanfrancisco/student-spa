import React from 'react'
import { Table, Button, Divider, Row, Col, Typography, Icon } from 'antd'
import CreateStudentFormModal from '../CreateStudentFormModal/'
import UpdateStudentFormModal from '../UpdateStudentFormModal'
const { Title } = Typography

const StudentTable = props => {
  const { handleCreate, handleDelete, handleUpdate } = props
  const columns = [
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
          <Button type="primary">
            <Icon type="profile" />
            View
          </Button>
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
