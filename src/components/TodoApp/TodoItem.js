import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'

const TodoItem = ({value, index, removeTodo}) => {
  return (
    <div className={styles.wrap}>
      {value}

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
  index: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired
}

const styles = {
  wrap: css`
    background: white;
    padding: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  removeBtn: css`
    cursor: pointer;
  `
}

export default TodoItem