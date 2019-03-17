import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'

const TodoItem = ({value, completed, index, removeTodo, toggleTodoState}) => {
  return (
    <div className={styles.wrap}>
      <span
        className={styles.check}
        onClick={() => toggleTodoState(index)}
      >
        {completed && '✓'}
      </span>
      <span className={cx(styles.value, completed && styles.completed)}>
        {value}
      </span>

      <span
        className={styles.removeBtn}
        onClick={() => removeTodo(index)}
      >
        x
      </span>
    </div>

  )
}

TodoItem.propTypes = {
  value: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoState: PropTypes.func.isRequired
}

const styles = {
  wrap: css`
    background: white;
    padding: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #e6e6e6;
  `,
  check: css`
    border-radius: 50px;
    border: 1px solid silver;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    text-align: center;
    color: #04a904;
  `,
  completed: css`
    text-decoration: line-through;
    opacity: .7;
  `,
  removeBtn: css`
    cursor: pointer;
  `,
  value: css`
    flex: 1;
    padding: 0 1rem;
  `
}

export default TodoItem