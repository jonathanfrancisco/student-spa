import React from 'react'
import { Table, Button, Divider, Row, Col, Typography, Icon } from 'antd'
import CreateStudentFormModal from '../CreateStudentFormModal/'
const { Title, Text } = Typography

const StudentTable = props => {
  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'sid',
      key: 'sid'
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =>
        `${record.first_name.toUpperCase()} ${record.last_name.toUpperCase()}`
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
          <Button type="default">
            <Icon type="form" /> Edit
          </Button>
          <Divider type="vertical" />
          <Button onClick={() => props.onDelete(record.sid)} type="danger">
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
          <CreateStudentFormModal getStudents={props.getStudents} />
        </Col>
      </Row>
      <Table columns={columns} dataSource={props.students} />
    </React.Fragment>
  )
}

export default StudentTable
