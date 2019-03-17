import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'

import TodoFilters from './TodoFilters'

const TodoInfo = ({todos, ...props}) => {
  // hide component if there are no todos
  if (todos.length === 0) {
    return null
  }

  const showClearBtn = false

  return (
    <div className={styles.wrap}>
      <span className={styles.itemsLeft}>
        {todos.length} items left
      </span>

      <TodoFilters {...props} />

      {showClearBtn ? (
        <span>
          Clear completed
        </span>
      ) : <span />}
    </div>
  )
}

TodoInfo.propTypes = {
  todos: PropTypes.array.isRequired
}

const styles = {
  wrap: css`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    width: 100%;
  `,
  itemsLeft: css`
    margin-right: 1rem;
  `
}

export default TodoInfo