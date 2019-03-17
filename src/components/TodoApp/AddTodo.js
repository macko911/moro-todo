import React from 'react'
import {css} from 'emotion'

const AddTodo = ({setTodo, value, addTodo}) => {
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        onChange={e => setTodo(e.currentTarget.value)}
        onKeyDown={onKeyDown}
        value={value}
      />
    </div>
  )
}

const styles = {
  wrap: css``,
  input: css`
    border: none;
    padding: 1rem;
    font-size: 1.8rem;
    outline: none;
    color: #545454;
  `
}

export default AddTodo
