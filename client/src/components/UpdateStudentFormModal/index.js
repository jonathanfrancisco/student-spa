import React from 'react'
import UpdateStudentFormModal from './UpdateStudentFormModal'

class UpdateStudentFormModalContainer extends React.Component {
  state = { visible: false }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form } = this.formRef.props
    const { sid } = this.props.student
    const { onUpdate } = this.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      onUpdate(sid, values)
      form.resetFields()
      this.setState({ visible: false })
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
    const { student } = this.props
    return (
      <UpdateStudentFormModal
        student={student}
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onVisible={this.handleVisible}
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
      />
    )
  }
}

export default UpdateStudentFormModalContainer
