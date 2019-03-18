import React from 'react'
import {css} from 'emotion'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../store/actions'
import {useAsync} from '../../hooks'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoInfo from './TodoInfo'
import TodoError from './TodoError'
import Spinner from '../Spinner'

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
    editTodo,
    fetchTodos,
    error,
    setError
  } = props

  const isFetchingTodos = useAsync(fetchTodos)

  if (isFetchingTodos) {
    return (
      <div>
        <Spinner className={styles.spinner} />
        <div className={styles.text}>
          Fetching todos...
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
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

      <TodoError error={error} setError={setError} />

    </div>
  )
}

const styles = {
  wrap: css`
    min-width: 500px;
    margin-bottom: 1rem;
    box-shadow: 0 0 3px 1px #e6e6e6;
    background: white;
  `,
  spinner: css`
    margin-bottom: 1rem;
  `,
  text: css`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  `
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
