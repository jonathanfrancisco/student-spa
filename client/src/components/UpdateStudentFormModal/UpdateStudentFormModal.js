import React from 'react'
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Input,
  Select,
  DatePicker,
  Icon
} from 'antd'
import moment from 'moment'
const { Option } = Select

const UpdateStudentFormModal = Form.create({ name: 'update_student_modal' })(
  class extends React.Component {
    render() {
      const {
        student,
        form,
        visible,
        onVisible,
        onSubmit,
        onCancel
      } = this.props
      const { getFieldDecorator } = form

      return (
        <React.Fragment>
          <Modal
            centered
            title="Update Student"
            okText="Update"
            visible={visible}
            onOk={onSubmit}
            onCancel={onCancel}
          >
            <Form layout="vertical" onSubmit={onSubmit}>
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item label="Student ID">
                    {getFieldDecorator('sid', {
                      rules: [
                        {
                          required: true,
                          message: 'Student ID is required'
                        },
                        {
                          validator: (rule, value, cb) => {
                            const validSidRegex = /\b[0-9]{4}-[0-9]{5}\b/
                            if (!value) {
                              cb()
                            } else if (validSidRegex.test(value) === false) {
                              cb('Student ID not valid')
                            }
                            cb()
                          }
                        }
                      ],
                      initialValue: student.sid
                    })(<Input disabled />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="First Name">
                    {getFieldDecorator('first_name', {
                      rules: [
                        {
                          required: true,
                          message: 'First Name is required'
                        }
                      ],
                      initialValue: student.first_name
                    })(<Input />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last Name">
                    {getFieldDecorator('last_name', {
                      rules: [
                        {
                          required: true,
                          message: 'Last Name is required'
                        }
                      ],
                      initialValue: student.last_name
                    })(<Input />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Gender">
                    {getFieldDecorator('gender', {
                      rules: [
                        {
                          required: true,
                          message: 'Gender is required'
                        }
                      ],
                      initialValue: student.gender
                    })(
                      <Select placeholder="Select Gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Birthday">
                    {getFieldDecorator('birthday', {
                      rules: [
                        {
                          required: true,
                          message: 'Birthday is required'
                        }
                      ],
                      initialValue: moment(student.birthday)
                    })(
                      <DatePicker
                        format="MM-DD-YYYY"
                        style={{ width: '100%' }}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Status">
                    {getFieldDecorator('status', {
                      rules: [
                        {
                          required: true,
                          message: 'Status is required'
                        }
                      ],
                      initialValue: student.status
                    })(
                      <Select placeholder="Select Status">
                        <Option value="regular">Regular</Option>
                        <Option value="irregular">Irregular</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Level">
                    {getFieldDecorator('level', {
                      rules: [
                        {
                          required: true,
                          message: 'Level is required'
                        }
                      ],
                      initialValue: student.level
                    })(
                      <Select placeholder="Select Level">
                        <Option value="freshman">Freshman</Option>
                        <Option value="sophomore">Sophomore</Option>
                        <Option value="junior">Junior</Option>
                        <Option value="senior">Senior</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Button hidden htmlType="submit">
                Submit on enter
              </Button>
            </Form>
          </Modal>
          <Button onClick={onVisible} htmlType="submit">
            <Icon type="edit" /> Update
          </Button>
        </React.Fragment>
      )
    }
  }
)

export default UpdateStudentFormModal
