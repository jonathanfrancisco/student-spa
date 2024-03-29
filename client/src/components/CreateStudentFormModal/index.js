import React from 'react'
import CreateStudentFormModal from './CreateStudentFormModal'

class CreateStudentFormModalContainer extends React.Component {
  state = { visible: false }

  handleVisible = () => {
    console.log('handle visible')
    this.setState({ visible: !this.state.visible })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form } = this.formRef.props
    const { onCreate } = this.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      onCreate(values)
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
    return (
      <CreateStudentFormModal
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onVisible={this.handleVisible}
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
      />
    )
  }
}

export default CreateStudentFormModalContainer
