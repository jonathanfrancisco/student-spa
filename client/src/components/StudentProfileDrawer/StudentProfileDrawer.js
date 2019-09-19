import React from 'react'
import { Drawer, Row, Col, Divider, Button, Avatar } from 'antd'
import moment from 'moment'

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16
}

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)'
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)'
      }}
    >
      {title}:
    </p>
    {content}
  </div>
)

const StudentProfileDrawer = props => {
  const { student, onToggleDrawer, visible } = props
  return (
    <React.Fragment>
      <Drawer
        width={720}
        placement="right"
        closable={false}
        onClose={onToggleDrawer}
        visible={visible}
      >
        <p style={{ ...pStyle, marginBottom: 24 }}>
          {student.gender === 'male' ? (
            <Avatar src="https://freeicons.io/laravel/public/uploads/icons/png/14887127141548234988-128.png" />
          ) : (
            <Avatar src="https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/student_girl-512.png" />
          )}{' '}
          Student Profile
        </p>
        <Row>
          <Col span={8}>
            <DescriptionItem title="First Name" content={student.first_name} />{' '}
          </Col>
          <Col span={8}>
            <DescriptionItem title="Last Name" content={student.last_name} />
          </Col>
          <Col span={8}>
            <DescriptionItem
              title="Gender"
              content={
                student.gender.substr(0, 1).toUpperCase() +
                student.gender.substr(1).toLowerCase()
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Birthday"
              content={moment(student.birthday).format('MMMM DD, YYYY')}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Age"
              content={moment().diff(student.birthday, 'years')}
            />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Status"
              content={
                student.status.substr(0, 1).toUpperCase() +
                student.status.substr(1).toLowerCase()
              }
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Level"
              content={
                student.level.substr(0, 1).toUpperCase() +
                student.level.substr(1).toLowerCase()
              }
            />
          </Col>
        </Row>
        <Divider />
      </Drawer>
      <Button onClick={onToggleDrawer} type="primary">
        View Profile
      </Button>
    </React.Fragment>
  )
}

export default StudentProfileDrawer
