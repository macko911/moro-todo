import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

export const checkFilter = (filter) => (todo) => {
  if (filter === 'Completed') {
    return todo.completed
  }
  if (filter === 'Active') {
    return !todo.completed
  }
  return true
}

const TodoList = ({todos, currentFilter, ...props}) => {
  const filteredTodos = todos.filter(checkFilter(currentFilter))

  return filteredTodos.map((todo) => (
    <TodoItem {...props} {...todo} key={todo.id} />
  ))
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
