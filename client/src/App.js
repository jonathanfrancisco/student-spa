import React from 'react'
import 'antd/dist/antd.css'
import { Layout, Card, Typography } from 'antd'
import StudentTable from './components/StudentTable'

const { Title } = Typography

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout
          style={{
            padding: '50px 100px',
            minHeight: '100vh',
            background: '#fff'
          }}
        >
          <div style={{ background: '#fff' }}>
            <Card style={{ boxShadow: '4px 4px 2px -4px' }}>
              <StudentTable />
            </Card>
          </div>
        </Layout>
      </div>
    )
  }
}

export default App
