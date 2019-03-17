import React, {useState} from 'react'
import {css} from 'emotion'

import AddTodo from './AddTodo'
import TodoList, {checkFilter} from './TodoList'
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
    if (todos.map(todo => todo.value).includes(value)) {
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

  const toggleTodoState = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i !== index) {
          return todo
        }
        return {...todo, completed: !todo.completed}
      })
    )
  }

  const clearCompletedTodos = () => {
    setTodos(
      todos.filter(checkFilter('Active'))
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
        toggleTodoState={toggleTodoState}
        currentFilter={currentFilter}
      />

      <TodoInfo
        todos={todos}
        currentFilter={currentFilter}
        setFilter={setFilter}
        clearCompletedTodos={clearCompletedTodos}
      />
    </div>
  )
}

const styles = css`
  min-width: 500px;
  margin-bottom: 1rem;
`

export default TodoApp
