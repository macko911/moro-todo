import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

const request = ({
  endpoint,
  method = 'get',
  data
}) => {
  const url = BASE_URL + endpoint

  return axios({
    url,
    method,
    data
  })
}

class Database {
  fetchTodos () {
    return request({
      endpoint: '/todos'
    })
  }

  createTodo (text) {
    return request({
      endpoint: '/todos',
      method: 'post',
      data: {text}
    })
  }

  fetchCompletedTodos () {
    return request({
      endpoint: '/todos/completed'
    })
  }

  fetchIncompletedTodos () {
    return request({
      endpoint: '/todos/incompleted'
    })
  }

  editTodo (todoId, text) {
    return request({
      endpoint: `/todos/${todoId}`,
      method: 'post',
      data: {text}
    })
  }

  removeTodo (todoId) {
    return request({
      endpoint: `/todos/${todoId}`,
      method: 'delete'
    })
  }

  completeTodo (todoId) {
    return request({
      endpoint: `/todos/${todoId}/complete`,
      method: 'post'
    })
  }

  incompleteTodo (todoId) {
    return request({
      endpoint: `/todos/${todoId}/incomplete`,
      method: 'post'
    })
  }
}

export default new Database()