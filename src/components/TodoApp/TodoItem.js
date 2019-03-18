import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'

const TodoItem = ({
  text,
  completed,
  index,
  id,
  removeTodo,
  editTodo,
  toggleTodoState
}) => {
  const [editing, setEditing] = useState(false)
  const [newValue, setTodoValue] = useState(text)

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      // new value can't be empty string
      if (newValue === '') {
        return
      }
      editTodo(index, newValue)
      setEditing(false)
    }
    if (e.key === 'Escape') {
      // reset todo value
      setTodoValue(text)
      setEditing(false)
    }
  }
  return (
    <div className={styles.wrap}>
      <span
        className={styles.check}
        onClick={() => toggleTodoState(id, !completed)}
      >
        {completed && '✓'}
      </span>

        {editing ? (
          <input
            autoFocus
            className={styles.input}
            value={newValue}
            onChange={e => setTodoValue(e.currentTarget.value)}
            onKeyDown={onKeyDown}
          />
        ) : (
          <span
            className={cx(styles.value, completed && styles.completed)}
            onDoubleClick={() => setEditing(true)}
          >
            {text}
          </span>
        )}

      <span
        className={cx(styles.removeBtn, 'visible-on-hover')}
        onClick={() => removeTodo(index)}
      >
        x
      </span>
    </div>

  )
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
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

    &:hover .visible-on-hover {
      visibility: visible;
    }
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
    visibility: hidden;
    cursor: pointer;
  `,
  value: css`
    flex: 1;
    padding: 0 1rem;
  `,
  input: css`
    padding: 0 1rem;
    outline: 0;
    border: 0;
    flex: 1;
    font-size: 1.5rem;
    font-weight: 100;
  `
}

export default TodoItem