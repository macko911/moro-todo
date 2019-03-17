import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

const TodoList = ({todos, ...props}) => {
  return todos.map((todo, index) => (
    <TodoItem
      {...props}
      value={todo}
      index={index}
      key={index}
    />
  ))
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList