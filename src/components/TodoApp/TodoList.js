import React from 'react'

import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return todos.map((todo, index) => (
    <TodoItem value={todo} key={index} />
  ))
}

export default TodoList