import React from 'react'
import {css} from 'emotion'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../store/actions'

import AddTodo from './AddTodo'
import TodoList, {checkFilter} from './TodoList'
import TodoInfo from './TodoInfo'

const TodoApp = ({todos, setTodos, currentFilter, setFilter}) => {
  const addTodo = (value) => {
    // don't add empty todo
    if (value === '') {
      return false
    }
    // if todo already added, skip it
    if (todos.map(todo => todo.value).includes(value)) {
      return false
    }
    // create new todo
    const newTodo = {
      value,
      completed: false
    }
    // add todo and reset input box
    setTodos([...todos, newTodo])
    return true
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

  const editTodo = (index, value) => {
    // new value can't be empty string
    if (value === '') {
      return
    }
    setTodos(
      todos.map((todo, i) => {
        if (i !== index) {
          return todo
        }
        return {...todo, value}
      })
    )
  }

  const completeAll = () => {
    setTodos(
      todos.map((todo) => ({...todo, completed: true}))
    )
  }

  return (
    <div className={styles}>
      <AddTodo
        addTodo={addTodo}
        completeAll={completeAll}
      />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoState={toggleTodoState}
        currentFilter={currentFilter}
        editTodo={editTodo}
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
  box-shadow: 0 0 3px 1px #e6e6e6;
`

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
