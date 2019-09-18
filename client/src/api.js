import axios from 'axios'

const api = {
  getStudents() {
    return axios.get('/students')
  },
  createStudent(student) {
    return axios.post('/students', student)
  },
  getStudentByStudentId(sid) {
    return axios.get(`/students/${sid}`)
  },
  deleteStudentByStudentId(sid) {
    return axios.delete(`/students/${sid}`)
  }
}

export default api
