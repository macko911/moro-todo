import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

const request = ({
  endpoint,
  method = 'get',
  body
}) => {
  const url = BASE_URL + endpoint

  return axios({
    url,
    method,
    body
  })
}

class Database {
  fetchTodos () {
    return request({
      endpoint: '/todos'
    })
  }
}

export default new Database()