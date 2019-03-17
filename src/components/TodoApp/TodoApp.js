import React, {useState} from 'react'
import {css} from 'emotion'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoInfo from './TodoInfo'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [value, setTodo] = useState('')
  const [currentFilter, setFilter] = useState('All')

  const addTodo = () => {
    // don't add empty todo
    if (value === '') {
      return
    }
    const newTodo = {
      value,
      completed: false
    }
    // if todo already added, skip it
    if (todos.map(todo => todo.value).includes(newTodo)) {
      return
    }
    // add todo and reset input box
    setTodos([...todos, newTodo])
    setTodo('')
  }

  const removeTodo = (index) => {
    setTodos(
      todos.filter((_, i) => i !== index)
    )
  }

  return (
    <div className={styles}>
      <AddTodo
        value={value}
        setTodo={setTodo}
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
      />

      <TodoInfo
        todos={todos}
        currentFilter={currentFilter}
        setFilter={setFilter}
      />
    </div>
  )
}

const styles = css`
  min-width: 500px;
  margin-bottom: 1rem;
`

export default TodoApp
