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

  createTodo () {
    return request({
      endpoint: '/todos',
      method: 'post'
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

  editTodo (todoId) {
    return request({
      endpoint: `/todos/${todoId}`,
      method: 'post'
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