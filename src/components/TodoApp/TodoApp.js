import React, {useState} from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setTodo] = useState('')

  const addTodo = () => {
    // don't add empty todo
    if (newTodo === '') {
      return
    }
    // if todo already added, skip it
    if (todos.includes(newTodo)) {
      return
    }
    // add todo and reset input box
    setTodos([...todos, newTodo])
    setTodo('')
  }

  return (
    <div>
      <AddTodo
        value={newTodo}
        setTodo={setTodo}
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
      />
    </div>
  )
}

export default TodoApp
