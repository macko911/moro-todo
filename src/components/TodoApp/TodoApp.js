import React from 'react'
import {css} from 'emotion'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../store/actions'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoInfo from './TodoInfo'

const TodoApp = (props) => {
  const {
    todos,
    addTodo,
    currentFilter,
    setFilter,
    completeAllTodos,
    clearCompletedTodos,
    removeTodo,
    toggleTodoState,
    editTodo
  } = props

  return (
    <div className={styles}>
      <AddTodo
        addTodo={addTodo}
        completeAllTodos={completeAllTodos}
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
