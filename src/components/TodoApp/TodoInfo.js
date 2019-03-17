import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'

import TodoFilters from './TodoFilters'

import {checkFilter} from './TodoList'

const TodoInfo = ({todos, clearCompletedTodos, ...props}) => {
  // hide component if there are no todos
  if (todos.length === 0) {
    return null
  }

  const showClearBtn = todos.filter(checkFilter('Completed')).length > 0

  return (
    <div className={styles.wrap}>
      <span className={styles.itemsLeft}>
        {todos.length} items left
      </span>

      <TodoFilters {...props} />

      <span
        className={cx(styles.clearBtn, showClearBtn && 'visible')}
        onClick={clearCompletedTodos}
      >
        Clear completed
      </span>
    </div>
  )
}

TodoInfo.propTypes = {
  todos: PropTypes.array.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired
}

const styles = {
  wrap: css`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    width: 100%;
    font-size: 1rem;
    border-top: 1px solid #e6e6e6;
  `,
  itemsLeft: css`
    margin-right: 1rem;
  `,
  clearBtn: css`
    visibility: hidden;
    cursor: pointer;
    &:hover {
      color: black;
      text-decoration: underline;
    }
    &.visible {
      visibility: visible;
    }
  `
}

export default TodoInfo