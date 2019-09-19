import React from 'react'
import StudentProfileDrawer from './StudentProfileDrawer'

class StudentProfileDrawerContainer extends React.Component {
  state = { visible: false }

  handleToggleDrawer = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { student } = this.props
    return (
      <StudentProfileDrawer
        student={student}
        onToggleDrawer={this.handleToggleDrawer}
        visible={this.state.visible}
      />
    )
  }
}

export default StudentProfileDrawerContainer
