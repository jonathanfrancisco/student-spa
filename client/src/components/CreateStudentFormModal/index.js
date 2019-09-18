import React from 'react'
import CreateStudentFormModal from './CreateStudentFormModal'
import api from '../../api'
import { notification } from 'antd'

class CreateStudentFormModalContainer extends React.Component {
  state = { visible: false }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  handleCreate = e => {
    e.preventDefault()
    const { form } = this.formRef.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      api
        .createStudent(values)
        .then(response => {
          if (response.status === 201) {
            notification['success']({
              message: 'New Student Created',
              description: 'New student has been succesfully created'
            })
          }
        })
        .catch(err => {
          console.log(err.response)
        })
        .finally(() => {
          form.resetFields()
          this.setState({ visible: false })
          this.props.getStudents()
        })
    })
  }

  handleCancel = () => {
    const { form } = this.formRef.props
    form.resetFields()
    this.setState({ visible: false })
  }

  saveFormRef = formRef => {
    this.formRef = formRef
  }

  render() {
    return (
      <CreateStudentFormModal
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onVisible={this.handleVisible}
        onCreate={this.handleCreate}
        onCancel={this.handleCancel}
      />
    )
  }
}

export default CreateStudentFormModalContainer
