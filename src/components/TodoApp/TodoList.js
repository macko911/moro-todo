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

const addIndex = (todo, index) => ({...todo, index})

const TodoList = ({todos, currentFilter, ...props}) => {
  const filteredTodos = todos
    .map(addIndex)
    .filter(checkFilter(currentFilter))

  return filteredTodos.map((todo, index) => (
    <TodoItem {...props} {...todo} key={index} />
  ))
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList